

async function RemoveDelieveredMessageTag() {
    const deliveredMessage = document.querySelector('.delievered-message');
    if (deliveredMessage) {
        deliveredMessage.remove();
    }

}

export default RemoveDelieveredMessageTag;