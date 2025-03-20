function ShowSendMessageButton(){
      document.querySelector('.voice-note').style.visibility = "hidden"
      const sendButton = document.querySelector('.send-button');
      if (sendButton) {
        sendButton.classList.add('visible'); 
      }
}

export default ShowSendMessageButton;
