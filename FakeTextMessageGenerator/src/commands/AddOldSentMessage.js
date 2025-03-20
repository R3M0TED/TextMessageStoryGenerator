import React from 'react';
import ReactDOM from 'react-dom/client';
import Message from "../elements/message";
import RemoveDelieveredMessageTag from './RemoveDelieveredMessageTag';
import ShowLatestMessage from './ShowLatestMessage';
import AddOldChatDateHeader from './AddOldChatDateHeader';
async function AddOldSentMessage(content) {
    return new Promise(async (resolve) => {
        try {
            const messageContainer = document.querySelector('.message-container');
            let isLatest = true;

            if (messageContainer) {

                
                if (!document.querySelector('.date-header-old')){
                    await AddOldChatDateHeader()
                }
                const container = document.createElement('div');
                messageContainer.appendChild(container);
                const root = ReactDOM.createRoot(container);

                RemoveDelieveredMessageTag()

                const messages = document.querySelectorAll('.message');
                const lastMessage = messages[messages.length - 1];
                if (lastMessage) {
                    if (lastMessage.classList.contains('message-sent')) {
                        isLatest = true;
                        lastMessage.classList.remove('last-message');
                    } else {
                        lastMessage.style.marginBottom = '30px';
                    }
                }

                document.querySelector('.message-composer-content').style.height = '54px';

                root.render(<Message content={content} isSent={true} isLatest={isLatest} />);

                await ShowLatestMessage()
                resolve(); 

            } else {
                throw new Error('Message container not found');
            }
        } catch (error) {
            console.error('Error in SendMessage:', error);
            resolve(); 
        }
    });
}

export default AddOldSentMessage;