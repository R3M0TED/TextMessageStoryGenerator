import ShowTypingIndicator from "./ShowTypingIndicator";
async function TypeAndUndoRecievedMessage(content, typingSpeed) {
    return new Promise(async (resolve) => {
        
        const messageContainer = document.querySelector('.message-container');

        if (messageContainer) {
            await ShowTypingIndicator(content, typingSpeed * 5).then(async () => {
            resolve()
                
            });
        } else {
            console.error('Message container not found');
            resolve();
        }
    });
}

export default TypeAndUndoRecievedMessage;