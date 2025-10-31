// Основная логика чатбота
window.initTildaChatbot = function() {
  console.log('Tilda Chatbot initialized');
  
  // База данных аэропортов и городов
  window.AIRPORT_DATABASE = {
    // Россия
    "Москва": { code: "MOW", country: "Россия", translitLower: "moscow" },
    "Санкт-Петербург": { code: "LED", country: "Россия", translitLower: "saint-petersburg" },
    "Сочи": { code: "AER", country: "Россия", translitLower: "sochi" },
    // ... (полная база данных из вашего кода)
  };

  window.COUNTRY_CODES = {
    "Россия": "russia",
    "Беларусь": "belarus",
    // ... (полный список стран из вашего кода)
  };

  // Основная логика чатбота
  const MONTHS_RU = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  
  const urlParams = new URLSearchParams(window.location.search);
  const isAlternativeScenario = urlParams.has('non');

  // Инициализация EmailJS
  emailjs.init("GhvXaAuEJgPTGDgLr");

  let state = {
    currentQuestionIndex: 0,
    answers: {},
    shownQuestions: [],
    isSurveyStarted: false,
    isBriefCompleted: false,
    adultsCount: 1,
    childrenCount: 0,
    childrenAges: [],
    selectedMultiple: [],
    dateFrom: null,
    dateTo: null,
    showDateFromPicker: false,
    showDateToPicker: false,
    currentProposals: [],
    selectedProposal: null,
    isLoading: false,
    currentCalendarMonth: new Date(),
    currentChatId: null,
    isViewingHistory: false,
    isAlternativeScenario: isAlternativeScenario,
    tourProgram: '',
    partnerLinks: [],
    showAgeSelector: false,
    excursionDays: 3
  };

  // DOM элементы
  const messagesArea = document.getElementById('messagesArea');
  const quickReplies = document.getElementById('quickReplies');
  const inputArea = document.getElementById('inputArea');
  const progressBar = document.getElementById('progressBar');

  // Основные функции
  function initChatbot() {
    if (isAlternativeScenario) {
      addMessage("Привет! Я Ита, твой AI-друг в мире путешествий. Я помогу подобрать лучшие варианты для твоей поездки. Начнем?", false);
    } else {
      addMessage("Привет! Я Ита, твой AI-друг в мире путешествий. Могу подобрать идеальный тур по твоим предпочтениям. Начнем?", false);
    }
    
    renderQuickReplies();
  }

  function addMessage(text, isUser, hint = null) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message-wrapper ${isUser ? 'user' : 'bot'}`;
    
    const avatar = isUser 
      ? 'https://static.tildacdn.com/tild6464-3166-4333-a465-316436316562/avatar.png'
      : 'https://static.tildacdn.com/tild6432-3465-4036-b232-396631303438/ita.png';
    
    messageDiv.innerHTML = `
      <img src="${avatar}" alt="${isUser ? 'Вы' : 'Ита'}" class="message-avatar">
      <div class="message-content">
        <div class="message-sender">${isUser ? 'Вы' : 'Ита'}</div>
        <div class="message-bubble">${text}</div>
        ${hint ? `<div class="message-hint">${hint}</div>` : ''}
      </div>
    `;
    
    messagesArea.appendChild(messageDiv);
    scrollToBottom();
  }

  function scrollToBottom() {
    messagesArea.scrollTop = messagesArea.scrollHeight;
  }

  // Добавьте остальные функции из вашего кода...
  // handleStartSurvey, showNextQuestion, renderInputArea, и т.д.

  // Инициализация
  setTimeout(initChatbot, 100);
};

// Утилитные функции
function transliterate(text) {
  const map = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e',
    'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm',
    'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
    'ф': 'f', 'х': 'h', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'sch',
    'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya',
    ' ': '-', '-': '-'
  };
  
  return text.split('').map(char => map[char] || char).join('');
}
