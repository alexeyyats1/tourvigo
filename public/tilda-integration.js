// Скрипт для интеграции с Tilda
// Этот файл будет подключаться в HTML блоке Tilda

(function() {
    // URL вашего приложения на Vercel
    const APP_URL = 'https://tourvigo.vercel.app';
    
    // Создаем контейнер для чатбота
    function createChatBotContainer(targetElementId) {
        const target = document.getElementById(targetElementId);
        if (!target) {
            console.error('Элемент с ID ' + targetElementId + ' не найден');
            return;
        }
        
        // Создаем контейнер
        const container = document.createElement('div');
        container.id = 'tour-chatbot-root';
        container.style.width = '100%';
        container.style.minHeight = '600px';
        target.appendChild(container);
        
        // Загружаем стили
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = APP_URL + '/assets/index.css';
        document.head.appendChild(link);
        
        // Загружаем скрипт приложения
        const script = document.createElement('script');
        script.type = 'module';
        script.src = APP_URL + '/assets/index.js';
        script.onload = function() {
            // Инициализируем приложение после загрузки
            if (window.initTourChatBot) {
                window.initTourChatBot('tour-chatbot-root');
            }
        };
        document.body.appendChild(script);
    }
    
    // Экспортируем функцию глобально
    window.initTourChatBotInTilda = createChatBotContainer;
    
    // Автоматическая инициализация при загрузке страницы
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            const defaultTarget = document.querySelector('[data-tour-chatbot]');
            if (defaultTarget) {
                createChatBotContainer(defaultTarget.id);
            }
        });
    } else {
        const defaultTarget = document.querySelector('[data-tour-chatbot]');
        if (defaultTarget) {
            createChatBotContainer(defaultTarget.id);
        }
    }
})();
