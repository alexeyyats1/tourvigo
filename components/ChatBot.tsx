import { useState, useEffect, useRef } from 'react';
import { findAirportCode, getNearestMajorCity, transliterate } from './AirportDatabase';

interface Message {
    text: string;
    isUser: boolean;
    html?: string;
}

interface TourState {
    currentQuestionIndex: number;
    answers: Record<number, any>;
    isSurveyStarted: boolean;
    isBriefCompleted: boolean;
    adultsCount: number;
    childrenCount: number;
    childrenAges: number[];
    dateFrom: Date | null;
    dateTo: Date | null;
    currentProposals: any[];
    selectedProposal: any;
    tourProgram: string;
    partnerLinks: Array<{ text: string; url: string }>;
}

export default function ChatBot() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [state, setState] = useState<TourState>({
        currentQuestionIndex: 0,
        answers: {},
        isSurveyStarted: false,
        isBriefCompleted: false,
        adultsCount: 1,
        childrenCount: 0,
        childrenAges: [],
        dateFrom: null,
        dateTo: null,
        currentProposals: [],
        selectedProposal: null,
        tourProgram: '',
        partnerLinks: [],
    });
    
    const messagesEndRef = useRef<HTMLDivElement>(null);
    
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    
    useEffect(() => {
        scrollToBottom();
    }, [messages]);
    
    useEffect(() => {
        addMessage('Привет! Я Ита, твой AI-друг в мире путешествий. Могу подобрать идеальный тур по твоим предпочтениям. Начнем?', false);
    }, []);
    
    const addMessage = (text: string, isUser: boolean, html?: string) => {
        setMessages(prev => [...prev, { text, isUser, html }]);
    };
    
    const formatMessageText = (text: string): string => {
        // Убираем все ** и заменяем на жирный текст через HTML
        let formatted = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
        
        // Убираем информацию в квадратных скобках
        formatted = formatted.replace(/\[([^\]]+)\]/g, '');
        
        // Убираем (X часов)
        formatted = formatted.replace(/\(\s*\d+\s*часа?\w*\s*\)/gi, '');
        formatted = formatted.replace(/\(\s*\d+\s*ч\.?\s*\)/gi, '');
        
        // Сохраняем переносы строк
        formatted = formatted.replace(/\n/g, '<br>');
        
        return formatted;
    };
    
    const sendToGPT = async (prompt: string) => {
        try {
            addMessage('Подбираю варианты...', false);
            
            const response = await fetch('https://functions.yandexcloud.net/d4e3fempk5bopa9943rp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: prompt, history: [] })
            });
            
            const data = await response.json();
            
            if (data.reply) {
                const formattedReply = formatMessageText(data.reply);
                addMessage(data.reply, false, formattedReply);
                
                // Парсим варианты туров
                const proposals = parseProposals(data.reply);
                if (proposals.length > 0) {
                    setState(prev => ({ ...prev, currentProposals: proposals }));
                }
            }
        } catch (error) {
            console.error('Ошибка:', error);
            addMessage('Ошибка соединения с сервером', false);
        }
    };
    
    const parseProposals = (text: string) => {
        const proposals: any[] = [];
        const variantRegex = /Вариант\s+(\d+):\s*([А-Яа-яёЁ0-9\-\s]+?)(?:\s*[-–—]\s*([^*\n]+?))?\n/gi;
        const matches = [...text.matchAll(variantRegex)];
        
        matches.forEach(match => {
            const cityName = match[2].trim();
            const programName = match[3] ? match[3].trim() : cityName;
            const cityData = findAirportCode(cityName);
            
            if (cityData) {
                proposals.push({
                    destination: cityName,
                    country: cityData.country,
                    translitLower: cityData.translitLower,
                    code: cityData.code,
                    programName
                });
            } else {
                proposals.push({
                    destination: cityName,
                    country: "Разное",
                    translitLower: transliterate(cityName).toLowerCase(),
                    code: "XXX",
                    programName
                });
            }
        });
        
        return proposals;
    };
    
    const generateDetailedPrompt = (proposal: any) => {
        const destination = proposal.destination;
        const days = 7; // Из ответов пользователя
        
        return `Подробно распиши программу тура в ${destination} на ${days} дней.

КРИТИЧЕСКИ ВАЖНО:

1. УКАЗЫВАЙ ТОЛЬКО КОНКРЕТНЫЕ ОБЪЕКТЫ:
   - НЕ "основные достопримечательности", А "Красная площадь, Кремль, Третьяковская галерея"
   - НЕ "кафе с национальной кухней", А "Кафе Пушкин, Ресторан Белуга, Кафе Корчма"
   - НЕ "исторический центр", А "Невский проспект, Дворцовая площадь, Эрмитаж"
   - На каждый день минимум 3-5 конкретных мест с названиями

2. ЗАПРЕЩЕНО ПОВТОРЯТЬ ОБЪЕКТЫ в разные дни программы
   - Каждое место должно упоминаться только ОДИН раз
   - Ведите список посещенных мест и не включайте их повторно

3. НЕ УКАЗЫВАЙ коды аэропортов в программе тура
   - Пиши просто "Переезд в аэропорт" вместо "Переезд в аэропорт (LED)"
   - Убери всю техническую информацию о кодах

4. НЕ ИСПОЛЬЗУЙ в тексте символы ** (два asteriska)
   - Не выделяй текст через **текст**
   - Используй обычное форматирование

5. УБЕРИ временные метки типа (X часов)
   - Не пиши "(2 часа)", "(3 часа)" и т.д.

6. НЕ ДОБАВЛЯЙ информацию в квадратных скобках [информация]

ФОРМАТ ОТВЕТА:

Маршрут путешествия:

День 1: Выезд из [город]. Прибытие в ${destination}. Размещение в отеле. Вечерняя прогулка по [конкретные улицы/районы]. Ужин в [конкретное кафе].

День 2: Утренняя экскурсия: [Музей 1], [Памятник 1], [Площадь 1]. Обед в [конкретный ресторан]. После обеда посещение [Объект 2], [Объект 3]. Ужин в [конкретное место].

...продолжай для всех ${days} дней...

Что включено:
- Проживание в отеле
- Питание
- Экскурсии
- Трансферы

Примерный бюджет: [сумма] рублей

Почему этот тур для вас:
[Персонализированное описание без технических деталей]

Важные советы:
[Практические рекомендации]`;
    };
    
    return (
        <div className="chatbot-container">
            <div className="chatbot-wrapper">
                <div className="messages-area">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`message-wrapper ${msg.isUser ? 'user' : 'bot'}`}>
                            <div 
                                className="message-bubble"
                                dangerouslySetInnerHTML={msg.html ? { __html: msg.html } : undefined}
                            >
                                {!msg.html && msg.text}
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
            </div>
        </div>
    );
}
