import ShowLatestMessage from "./ShowLatestMessage";
import ShowLowercaseKeyboard from "./ShowLowercaseKeyboard";
async function OpenKeyboard() {
    const messageContainer = document.querySelector('.message-container');
    const footer = document.querySelector('.footer');
    const footerControls = document.querySelector('.footer-controls');
    const messageComposer = document.querySelector('.message-composer-content');

    footer.style.marginBottom = "0px";
    messageContainer.style.paddingBottom = "840px";
    footerControls.style.marginBottom = "0px";

    await ShowLowercaseKeyboard();
    messageComposer.focus();

    await ShowLatestMessage()
}

export default OpenKeyboard;
