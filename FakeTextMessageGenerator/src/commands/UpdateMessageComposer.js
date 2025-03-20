import Wait from "./Wait"
async function UpdateMessageComposer(key, add=true, deletionWaitTime){
    const messageComposerContent = document.querySelector('.message-composer-content')
    if (add===true){
        messageComposerContent.value = messageComposerContent.value + key
    }
    else{
        messageComposerContent.value = messageComposerContent.value.slice(0, -1)
        await Wait(deletionWaitTime)
    }

    const textArea = messageComposerContent
    textArea.style.height = '50px';
    textArea.style.height = `${textArea.scrollHeight}px`;
      

    messageComposerContent.focus()
}

export default UpdateMessageComposer;
