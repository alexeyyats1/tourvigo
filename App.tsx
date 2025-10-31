import ChatBot from './components/ChatBot';
import './styles/globals.css';

export default function App() {
    return (
        <div className="app">
            <ChatBot />
        </div>
    );
}

// Экспорт для использования в Tilda
if (typeof window !== 'undefined') {
    (window as any).initTourChatBot = (elementId: string) => {
        const container = document.getElementById(elementId);
        if (container) {
            import('react-dom/client').then(({ createRoot }) => {
                const root = createRoot(container);
                root.render(<App />);
            });
        }
    };
}
