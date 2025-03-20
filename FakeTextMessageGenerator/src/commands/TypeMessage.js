import PressKey from "./PressKey";
import SetAutoComplete from "./SetAutoComplete";
import OpenKeyboard from "./OpenKeyboard";
async function TypeMessage(content, typingSpeed) {
    return new Promise(async (resolve) => {
        const modifiedContent = content.replace(/ /g, '+'); 
        const characters = modifiedContent.split('');

        if (!document.querySelector('.keyboard-buttons')){
            await OpenKeyboard()
        }
        (async () => {
            for (let i = 0; i < characters.length; i++) {
                await new Promise((resolve) => setTimeout(resolve, typingSpeed  * 3));
                await PressKey(characters[i]);
                SetAutoComplete()
            }
            console.log("Message typing completed.");
            
            setTimeout(() => {
                resolve();
            }, 150);
        })();
    });
}

export default TypeMessage;