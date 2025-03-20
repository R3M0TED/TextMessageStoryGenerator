import UpdateMessageComposer from "./UpdateMessageComposer";
import ShowDefaultMessageComposerContent from "./ShowDefaultMessageComposerContent";
import HideSendMessageButton from "./HideSendMessageButton";
import PressBackspaceButton from "./PressBackspaceButton";
import SetAutoComplete from "./SetAutoComplete";
async function UndoTypedMessage() {
    return new Promise(async (resolve) => {
        try {
        const messageComposerContent = document.querySelector('.message-composer-content').value

        let speed = 100
        for (let char in messageComposerContent){
            speed *= 0.99
            PressBackspaceButton(speed)
            await UpdateMessageComposer(char, false, speed)
            SetAutoComplete()

        }

        ShowDefaultMessageComposerContent()
        HideSendMessageButton()
        resolve()

        } catch (error) {
        console.log('Error undoing typed message:', error);
        resolve()

        }
  }
)}
  
  export default UndoTypedMessage;
  