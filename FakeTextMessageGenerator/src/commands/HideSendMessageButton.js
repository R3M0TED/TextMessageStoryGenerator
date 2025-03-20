function HideSendMessageButton(){
      document.querySelector('.voice-note').style.visibility = "visible"
      const sendButton = document.querySelector('.send-button');
      if (sendButton) {
            sendButton.classList.remove('visible'); // Fade out the button
      }
}

export default HideSendMessageButton;
