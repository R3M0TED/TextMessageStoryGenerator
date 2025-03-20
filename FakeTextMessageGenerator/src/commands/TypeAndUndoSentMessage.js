import TypeMessage from "./TypeMessage";
import UndoTypedMessage from "./UndoTypedMessage";
import Wait from "./Wait";
async function TypeAndUndoSentMessage(content, typingSpeed, pauseTimeBeforeDeletion) {
    return new Promise(async (resolve) => {
        try {
            await TypeMessage(content, typingSpeed);
            await Wait(pauseTimeBeforeDeletion)
            await UndoTypedMessage()

            resolve()
        } catch (error) {
            console.error('Error in TypeAndDeleteMessage:', error);
            resolve(); 
        }
    });
}

export default TypeAndUndoSentMessage;