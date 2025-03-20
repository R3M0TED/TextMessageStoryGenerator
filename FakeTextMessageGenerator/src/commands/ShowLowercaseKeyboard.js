import KeyboardButtonsLowercase from '../elements/keyboard-buttons-lowercase';
import React from 'react';
import ReactDOM from 'react-dom/client';
async function ShowLowercaseKeyboard() {
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
                root.render(<KeyboardButtonsLowercase/>);
                setTimeout(() => {
                    resolve();
                }, 300);
            }
        }
        catch(error){
            console.error('Error showing lowercase keyboard:', error);
            resolve(); 
        }
    })
   

        


}

export default ShowLowercaseKeyboard;