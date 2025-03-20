import React from 'react';
import ReactDOM from 'react-dom/client';
import Message from "../elements/message";
import ShowLatestMessage from './ShowLatestMessage';
import AddOldChatDateHeader from './AddOldChatDateHeader';

async function AddOldRecievedMessage(content) {
    return new Promise(async (resolve) => {
        
        const messageContainer = document.querySelector('.message-container');

        if (messageContainer) {

            if (!document.querySelector('.date-header-old')){
                await AddOldChatDateHeader()
            }
            const container = document.createElement('div');
            messageContainer.appendChild(container);
            const root = ReactDOM.createRoot(container);

            const messages = document.querySelectorAll('.message');
            const lastMessage = messages[messages.length - 1];
            if (lastMessage) {
                if (lastMessage.classList.contains('message-recieved')) {
                    lastMessage.classList.remove('last-message');
                } else {
                    lastMessage.style.marginBottom = '30px';
                }
            }
            root.render(<Message content={content} isSent={false} isLatest={true} />);
            await ShowLatestMessage()
            resolve(); 
                

        } else {
            console.error('Message container not found');
            resolve();
        }
    });
}

export default AddOldRecievedMessage;