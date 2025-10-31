// Standalone версия чатбота для Tilda
// Этот файл содержит ВСЮ логику из оригинального HTML

(function() {
    'use strict';
    
    // ============ БАЗА ДАННЫХ АЭРОПОРТОВ ============
    window.AIRPORT_DATABASE = {
        "москва": { code: "MOW", country: "Россия", translitLower: "moscow" },
        "санкт-петербург": { code: "LED", country: "Россия", translitLower: "saint-petersburg" },
        "сочи": { code: "AER", country: "Россия", translitLower: "sochi" },
        "казань": { code: "KZN", country: "Россия", translitLower: "kazan" },
        "екатеринбург": { code: "SVX", country: "Россия", translitLower: "ekaterinburg" },
        "новосибирск": { code: "OVB", country: "Россия", translitLower: "novosibirsk" },
        "краснодар": { code: "KRR", country: "Россия", translitLower: "krasnodar" },
        "минеральные воды": { code: "MRV", country: "Россия", translitLower: "mineralnye-vody" },
        "калининград": { code: "KGD", country: "Россия", translitLower: "kaliningrad" },
        "владивосток": { code: "VVO", country: "Россия", translitLower: "vladivostok" },
        "иркутск": { code: "IKT", country: "Россия", translitLower: "irkutsk" },
        "байкал": { code: "IKT", country: "Россия", translitLower: "baykal" },
        "алтай": { code: "BAX", country: "Россия", translitLower: "altay" },
        "барнаул": { code: "BAX", country: "Россия", translitLower: "barnaul" },
        "омск": { code: "OMS", country: "Россия", translitLower: "omsk" },
        "самара": { code: "KUF", country: "Россия", translitLower: "samara" },
        "анапа": { code: "AAQ", country: "Россия", translitLower: "anapa" },
        "геленджик": { code: "GDZ", country: "Россия", translitLower: "gelendzhik" },
        "симферополь": { code: "SIP", country: "Россия", translitLower: "simferopol" },
        "петропавловск-камчатский": { code: "PKC", country: "Россия", translitLower: "petropavlovsk-kamchatskiy" },
        "камчатка": { code: "PKC", country: "Россия", translitLower: "kamchatka" },
        
        // Ближнее зарубежье
        "минск": { code: "MSQ", country: "Беларусь", translitLower: "minsk" },
        "алматы": { code: "ALA", country: "Казахстан", translitLower: "almaty" },
        "ташкент": { code: "TAS", country: "Узбекистан", translitLower: "tashkent" },
        "самарканд": { code: "SKD", country: "Узбекистан", translitLower: "samarkand" },
        "баку": { code: "GYD", country: "Азербайджан", translitLower: "baku" },
        "ереван": { code: "EVN", country: "Армения", translitLower: "erevan" },
        "тбилиси": { code: "TBS", country: "Грузия", translitLower: "tbilisi" },
        "батуми": { code: "BUS", country: "Грузия", translitLower: "batumi" },
        
        // Турция, ОАЭ
        "стамбул": { code: "IST", country: "Турция", translitLower: "istanbul" },
        "анталья": { code: "AYT", country: "Турция", translitLower: "antalya" },
        "дубай": { code: "DXB", country: "ОАЭ", translitLower: "dubai" },
        
        // Азия
        "бангкок": { code: "BKK", country: "Таиланд", translitLower: "bangkok" },
        "пхукет": { code: "HKT", country: "Таиланд", translitLower: "phuket" },
        "бали": { code: "DPS", country: "Индонезия", translitLower: "bali" },
        "токио": { code: "TYO", country: "Япония", translitLower: "tokyo" },
    };
    
    window.COUNTRY_CODES = {
        "Россия": "russia",
        "Беларусь": "belarus",
        "Казахстан": "kazakhstan",
        "Узбекистан": "uzbekistan",
        "Грузия": "georgia",
        "Турция": "turkey",
        "ОАЭ": "uae",
        "Таиланд": "thailand",
    };
    
    // ============ ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ============
    
    function transliterate(text) {
        const map = {
            'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e',
            'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm',
            'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
            'ф': 'f', 'х': 'h', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'sch',
            'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya',
            ' ': '-', '-': '-'
        };
        
        return text.split('').map(char => {
            const lower = char.toLowerCase();
            return map[lower] || char;
        }).join('');
    }
    
    function findAirportCode(cityName) {
        if (!window.AIRPORT_DATABASE || !cityName) return null;
        
        const cityLower = cityName.toLowerCase().trim();
        
        // Точное совпадение
        if (window.AIRPORT_DATABASE[cityLower]) {
            return window.AIRPORT_DATABASE[cityLower];
        }
        
        // Частичное совпадение
        for (const [key, value] of Object.entries(window.AIRPORT_DATABASE)) {
            if (cityLower.includes(key) || key.includes(cityLower)) {
                return value;
            }
        }
        
        return null;
    }
    
    function getNearestMajorCity(fromCity) {
        const fromCityLower = fromCity.toLowerCase();
        const spbRegion = ['санкт-петербург', 'петербург', 'спб', 'архангельск', 'мурманск'];
        
        for (let city of spbRegion) {
            if (fromCityLower.includes(city) || city.includes(fromCityLower)) {
                return { code: 'LED', name: 'Санкт-Петербург', translit: 'saint-petersburg' };
            }
        }
        
        return { code: 'MOW', name: 'Москва', translit: 'moscow' };
    }
    
    function formatMessageText(text) {
        if (!text) return '';
        
        // Убираем ** и заменяем на <strong>
        let formatted = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
        
        // Убираем информацию в квадратных скобках
        formatted = formatted.replace(/\[([^\]]+)\]/g, '');
        
        // Убираем (X часов), (X ч.), (2 часа) и т.д.
        formatted = formatted.replace(/\(\s*\d+\s*часа?\w*\s*\)/gi, '');
        formatted = formatted.replace(/\(\s*\d+\s*ч\.?\s*\)/gi, '');
        
        // Сохраняем переносы строк
        formatted = formatted.replace(/\n/g, '<br>');
        
        return formatted;
    }
    
    // ============ ГЛАВНАЯ ФУНКЦИЯ ИНИЦИАЛИЗАЦИИ ============
    
    window.initTourChatBot = function(containerId) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error('Container не найден:', containerId);
            return;
        }
        
        // Вставляем HTML структуру
        container.innerHTML = `
            <div class="tour-chatbot-wrapper">
                <div class="tour-messages-area" id="tourMessagesArea"></div>
                <div class="tour-quick-replies" id="tourQuickReplies"></div>
                <div class="tour-input-area" id="tourInputArea"></div>
            </div>
        `;
        
        // Инициализируем чатбот
        initChatBotLogic();
    };
    
    // ============ ЛОГИКА ЧАТБОТА ============
    
    function initChatBotLogic() {
        const messagesArea = document.getElementById('tourMessagesArea');
        const quickReplies = document.getElementById('tourQuickReplies');
        const inputArea = document.getElementById('tourInputArea');
        
        if (!messagesArea) {
            console.error('Messages area не найдена');
            return;
        }
        
        // Состояние
        const state = {
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
        };
        
        // Вопросы
        const questions = [
            {
                text: "Из какого города планируешь выезд?",
                type: "text"
            },
            {
                text: "С кем ты планируешь путешествие?",
                type: "single",
                options: [
                    { text: "Один/одна", value: "Один/одна" },
                    { text: "Пара (вдвоем)", value: "Пара (вдвоем)" },
                    { text: "Семья с детьми", value: "Семья с детьми" },
                    { text: "Компания друзей", value: "Компания друзей" }
                ]
            },
            {
                text: "Куда хочешь поехать?",
                type: "text"
            }
        ];
        
        // Добавление сообщения
        function addMessage(text, isUser) {
            const messageDiv = document.createElement('div');
            messageDiv.className = `tour-message-wrapper ${isUser ? 'user' : 'bot'}`;
            
            const formattedText = isUser ? text : formatMessageText(text);
            
            messageDiv.innerHTML = `
                <div class="tour-message-bubble">${formattedText}</div>
            `;
            
            messagesArea.appendChild(messageDiv);
            messagesArea.scrollTop = messagesArea.scrollHeight;
        }
        
        // Рендер кнопок быстрого ответа
        function renderQuickReplies() {
            if (!quickReplies) return;
            quickReplies.innerHTML = '';
            
            if (!state.isSurveyStarted && !state.isBriefCompleted) {
                const btn = document.createElement('button');
                btn.className = 'tour-quick-reply-btn';
                btn.textContent = 'Да, начать опрос';
                btn.onclick = handleStartSurvey;
                quickReplies.appendChild(btn);
            }
        }
        
        // Начало опроса
        function handleStartSurvey() {
            addMessage("Да, начать опрос", true);
            state.isSurveyStarted = true;
            renderQuickReplies();
            setTimeout(() => {
                showNextQuestion();
            }, 300);
        }
        
        // Показать следующий вопрос
        function showNextQuestion() {
            if (state.currentQuestionIndex < questions.length) {
                const question = questions[state.currentQuestionIndex];
                addMessage(question.text, false);
                renderInputArea();
            } else {
                completeBrief();
            }
        }
        
        // Рендер поля ввода
        function renderInputArea() {
            if (!inputArea) return;
            const question = questions[state.currentQuestionIndex];
            
            if (question.type === 'text') {
                inputArea.innerHTML = `
                    <div class="tour-input-container">
                        <input type="text" class="tour-text-input" id="tourTextInput" placeholder="Введи сообщение..." />
                        <button class="tour-send-btn" onclick="window.handleTourTextInput()">Отправить</button>
                    </div>
                `;
                
                const input = document.getElementById('tourTextInput');
                if (input) {
                    input.focus();
                    input.addEventListener('keypress', (e) => {
                        if (e.key === 'Enter') window.handleTourTextInput();
                    });
                }
            } else if (question.type === 'single') {
                let html = '<div>';
                question.options.forEach((option) => {
                    html += `
                        <button class="tour-option-btn" onclick="window.handleTourSingleOption('${option.value.replace(/'/g, "\\'")}', '${option.text.replace(/'/g, "\\'")}')">
                            <span class="tour-option-text">${option.text}</span>
                        </button>
                    `;
                });
                html += '</div>';
                inputArea.innerHTML = html;
            }
        }
        
        // Обработка текстового ввода
        window.handleTourTextInput = function() {
            const input = document.getElementById('tourTextInput');
            if (!input) return;
            
            const value = input.value.trim();
            if (value) {
                addMessage(value, true);
                state.answers[state.currentQuestionIndex] = value;
                state.currentQuestionIndex++;
                setTimeout(() => {
                    showNextQuestion();
                }, 300);
            }
        };
        
        // Обработка выбора опции
        window.handleTourSingleOption = function(value, text) {
            addMessage(text, true);
            state.answers[state.currentQuestionIndex] = value;
            state.currentQuestionIndex++;
            setTimeout(() => {
                showNextQuestion();
            }, 300);
        };
        
        // Завершение опроса
        function completeBrief() {
            state.isBriefCompleted = true;
            inputArea.innerHTML = '';
            
            let summary = "Отлично! Твои предпочтения:\n\n";
            summary += `Город выезда: ${state.answers[0] || 'не указан'}\n`;
            summary += `Компания: ${state.answers[1] || 'не указана'}\n`;
            summary += `Направление: ${state.answers[2] || 'не указано'}\n`;
            
            addMessage(summary, false);
            addMessage("Подбираю варианты для тебя...", false);
            
            // Генерируем промпт для GPT
            const prompt = generateGPTPrompt();
            sendToGPT(prompt);
        }
        
        // Генерация промпта для GPT
        function generateGPTPrompt() {
            const destination = state.answers[2] || 'не указано';
            const fromCity = state.answers[0] || 'не указан';
            
            return `Ты профессиональный турагент. Клиент хочет поехать в ${destination} из города ${fromCity}.

КРИТИЧЕСКИ ВАЖНО:

1. УКАЗЫВАЙ ТОЛЬКО КОНКРЕТНЫЕ ОБЪЕКТЫ:
   - НЕ "основные достопримечательности", А "Красная площадь, Кремль, Третьяковская галерея"
   - НЕ "кафе с национальной кухней", А "Кафе Пушкин, Ресторан Белуга, Кафе Корчма"
   - На каждый день минимум 3-5 конкретных мест с названиями

2. ЗАПРЕЩЕНО ПОВТОРЯТЬ ОБЪЕКТЫ в программе
   - Каждое место должно упоминаться только ОДИН раз

3. НЕ УКАЗЫВАЙ коды аэропортов в программе тура
   - Пиши просто "Переезд в аэропорт"

4. НЕ ИСПОЛЬЗУЙ символы ** (два asteriska)

5. УБЕРИ временные метки типа (X часов)

6. НЕ ДОБАВЛЯЙ информацию в квадратных скобках

Подбери 3 варианта программы тура в ${destination}.

ФОРМАТ ОТВЕТА:

Вариант 1: [Город] - [Название программы]
[2-3 предложения почему подходит]

Вариант 2: [Город] - [Название программы]
[2-3 предложения почему подходит]

Вариант 3: [Город] - [Название программы]
[2-3 предложения почему подходит]`;
        }
        
        // Отправка запроса к GPT
        async function sendToGPT(prompt) {
            try {
                const response = await fetch('https://functions.yandexcloud.net/d4e3fempk5bopa9943rp', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message: prompt, history: [] })
                });
                
                const data = await response.json();
                
                if (data.reply) {
                    const formattedReply = formatMessageText(data.reply);
                    addMessage(formattedReply, false);
                }
            } catch (error) {
                console.error('Ошибка:', error);
                addMessage('Ошибка соединения с сервером', false);
            }
        }
        
        // Инициализация
        addMessage('Привет! Я Ита, твой AI-друг в мире путешествий. Могу подобрать идеальный тур по твоим предпочтениям. Начнем?', false);
        renderQuickReplies();
    }
    
})();
