function SetUnreadMessageCount(count){
    const unreadContainer = document.querySelector('.return-unread-container')

        unreadContainer.classList.remove('return-unread-container-hidden')
        unreadContainer.innerHTML = count
        
    if (count === 0){
        unreadContainer.classList.add('return-unread-container-hidden')
    } 
    
}

export default SetUnreadMessageCount;
