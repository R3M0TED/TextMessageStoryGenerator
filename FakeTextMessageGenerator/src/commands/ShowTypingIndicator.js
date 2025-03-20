import TypingIndicator from "../elements/typing-indicator";
import React from 'react';
import ReactDOM from 'react-dom/client';

async function ShowTypingIndicator(content, typingSpeed) {
    return new Promise((resolve) => {
        const messageContainer = document.querySelector('.message-container');
        
        if (messageContainer) {
            const container = document.createElement('div');
            messageContainer.appendChild(container);
            const root = ReactDOM.createRoot(container);

            root.render(<TypingIndicator />);

            const scrollToBottom = () => {
                const scrollHeight = messageContainer.scrollHeight;
                const height = messageContainer.clientHeight;
                const maxScrollTop = scrollHeight - height;
                messageContainer.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
            };

            const attemptScroll = (attempts = 5) => {
                if (attempts === 0) return;

                requestAnimationFrame(() => {
                    scrollToBottom();
                    setTimeout(() => attemptScroll(attempts - 1), 100);
                });
            };
            attemptScroll();

            const typingDuration = (content.length * typingSpeed) * 2;

            setTimeout(() => {
                root.unmount(); 
                container.remove();
                resolve(); 
            }, typingDuration);

        } else {
            console.error('Message container not found');
            resolve(); 
        }
    });
}

export default ShowTypingIndicator;