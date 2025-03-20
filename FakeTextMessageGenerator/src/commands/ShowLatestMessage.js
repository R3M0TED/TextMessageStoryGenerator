async function ShowLatestMessage() {
    const scrollToBottom = () => {
        const messageContainer = document.querySelector('.message-container');

        const scrollHeight = messageContainer.scrollHeight;
        const height = messageContainer.clientHeight;
        const maxScrollTop = scrollHeight - height;
        messageContainer.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    };

    const rafAsync = () => new Promise(resolve => requestAnimationFrame(resolve));

    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    const attemptScroll = async (attempts = 5) => {
        if (attempts === 0) {
            return;
        }

        await rafAsync();
        scrollToBottom();
        await delay(150);
        await attemptScroll(attempts - 1);
    };

    await attemptScroll();
}

export default ShowLatestMessage;
