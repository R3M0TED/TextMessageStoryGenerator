import ClearKeyPoppers from "./ClearKeyPoppers";
import ShowkeyPopper from "./ShowKeyPopper";
import HideDefaultMessageComposerContent from "./HideDefaultMessageComposerContent";
import UpdateMessageComposer from "./UpdateMessageComposer";
import ShowSendMessageButton from "./ShowSendMessageButton";
import ShowUppercaseKeyboard from "./ShowUppercaseKeyboard";
import ShowLowercaseKeyboard from "./ShowLowercaseKeyboard";
import ShowPunctuationKeyboard from "./ShowPunctuationKeyboard";
async function PressKey(key) {
  return new Promise(async (resolve) => {
    const punctuationKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
      '-','/',':',';','(',')','£','&','@','"',
      '.',',','?','!','`']
    try {
      ShowSendMessageButton();

      if (key === "+") {
        key = ' ';
        document.querySelector('.keyboard-space-button').classList.add('keyboard-space-button-pressed');

        setTimeout(() => {
          document.querySelector('.keyboard-space-button').classList.remove('keyboard-space-button-pressed');
          resolve();
        }, 200);

      } else {
        if (!punctuationKeys.includes(key)){
          if (key === key.toUpperCase()) {
            if (!document.querySelector('.keyboard-buttons-uppercase'))
              await ShowUppercaseKeyboard();
          } else {
            if (document.querySelector('.keyboard-buttons-uppercase') || document.querySelector('.keyboard-buttons-punctuation'))
              await ShowLowercaseKeyboard();
          }
      }
      else{
        if(!document.querySelector('.keyboard-buttons-punctuation')){
          await ShowPunctuationKeyboard()
        }
      }

        ClearKeyPoppers();
        ShowkeyPopper(key);
      }
      let rand = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
      document.getElementById(`typing${rand}`).play();

      HideDefaultMessageComposerContent();
      UpdateMessageComposer(key);
      resolve();
    } catch (error) {
      resolve();
    }
  });
}

export default PressKey;
