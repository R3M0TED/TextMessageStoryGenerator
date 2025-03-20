function CloseKeyboard(){
    const messageContainer = document.querySelector('.message-container');
    const footer = document.querySelector('.footer');
    const footerControls = document.querySelector('.footer-controls');

    footer.style.marginBottom = "-690px"

    messageContainer.style.paddingBottom = "0px";
    footerControls.style.marginBottom = "65px";
}

export default CloseKeyboard;
