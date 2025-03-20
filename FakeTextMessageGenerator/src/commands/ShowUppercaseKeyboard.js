import KeyboardButtonsUppercase from '../elements/keyboard-buttons-uppercase';
import React from 'react';
import ReactDOM from 'react-dom/client';
async function ShowUppercaseKeyboard() {
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
                document.getElementById('typing1').play()

                root.render(<KeyboardButtonsUppercase/>);
                setTimeout(() => {
                    resolve();
                }, 200);
            }
        }
        catch(error){
            console.error('Error showing uppercase keyboard:', error);
            resolve(); 
        }
    })
   

        


}

export default ShowUppercaseKeyboard;