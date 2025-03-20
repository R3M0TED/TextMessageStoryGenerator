import React from 'react';
import ReactDOM from 'react-dom/client';
import NewDateHeader from '../elements/new-date-header';

async function AddNewChatDateHeader() {
    return new Promise(async (resolve) => {
        try {
            const messageContainer = document.querySelector('.message-container');

            if (messageContainer) {
                const container = document.createElement('div');
                messageContainer.appendChild(container);
                const root = ReactDOM.createRoot(container);
                root.render(<NewDateHeader time={document.querySelector('.header-time').innerHTML}/>);

                resolve(); 

            } else {
                throw new Error('Message container not found');
            }
        } catch (error) {
            console.error('Error in AddNewDateHeader:', error);
            resolve(); 
        }
    });
}

export default AddNewChatDateHeader;