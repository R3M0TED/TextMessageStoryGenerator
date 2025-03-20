import SendMessage from "./SendMessage";
import RecieveMessage from "./RecieveMessage";
import TypeAndUndoSentMessage from "./TypeAndUndoSentMessage";
import TypeAndUndoRecievedMessage from "./TypeAndUndoRecievedMessage";
import Wait from "./Wait";

async function StartConversation(Actions) {
    return new Promise(async (resolve) => {
        try {
            for (const action of Actions) {

                let type = action.Type;

                if (type === "SendMessage"){
                    let content = action.Content
                    let typingSpeed = action.TypingSpeed
                    console.log(content)
                    await SendMessage(content, typingSpeed)
                }

                if (type === "RecieveMessage"){
                    let content = action.Content
                    let typingSpeed = action.TypingSpeed
                    await RecieveMessage(content, typingSpeed)
                }

                if (type === "TypeAndUndoSentMessage"){
                    let content = action.Content
                    let typingSpeed = action.TypingSpeed
                    let pauseTimeBeforeDeletion = action.PauseTimeBeforeDeletion

                    await TypeAndUndoSentMessage(content, typingSpeed, pauseTimeBeforeDeletion)
                }

                if (type === "TypeAndUndoRecievedMessage"){
                    let content = action.Content
                    let typingSpeed = action.TypingSpeed

                    await TypeAndUndoRecievedMessage(content, typingSpeed)
                }

                if (type === "Wait"){
                    let waitTime = action.Amount
                    await Wait(waitTime)
                }
            }
            resolve();
        } catch (error) {
            console.error('Error adding existing messages:', error);
            resolve(); 
        }
    });
}

export default StartConversation;
