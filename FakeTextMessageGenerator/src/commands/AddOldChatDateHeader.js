import React from 'react';
import ReactDOM from 'react-dom/client';
import OldDateHeader from '../elements/old-date-header';
async function AddOldChatDateHeader() {
    return new Promise(async (resolve) => {
        try {
            const messageContainer = document.querySelector('.message-container');

            if (messageContainer) {
                const container = document.createElement('div');
                messageContainer.appendChild(container);
                const root = ReactDOM.createRoot(container);
                root.render(<OldDateHeader/>);

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

export default AddOldChatDateHeader;