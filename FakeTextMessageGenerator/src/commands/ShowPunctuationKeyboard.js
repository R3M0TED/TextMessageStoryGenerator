import React from 'react';
import ReactDOM from 'react-dom/client';
import KeyboardButtonsPunctuation from '../elements/keyboard-buttons-punctuation';
async function ShowPunctuationKeyboard() {
    return new Promise(async (resolve) => {
        try {
            const keyboardButtons = document.querySelector('.keyboard-buttons');
            if (keyboardButtons) {
                keyboardButtons.remove();
            }   
        
            const keyboardButtonsContainer = document.querySelector('.keyboard-buttons-container');
            if (keyboardButtonsContainer){
                const container = document.createElement('div');
                keyboardButtonsContainer.appendChild(container);
                const root = ReactDOM.createRoot(container);
                root.render(<KeyboardButtonsPunctuation/>);
                document.getElementById('typing1').play()
                setTimeout(() => {
                    resolve();
                }, 300);
            }
        }
        catch(error){
            console.error('Error showing punctuation keyboard:', error);
            resolve(); 
        }
    })
   

        


}

export default ShowPunctuationKeyboard;