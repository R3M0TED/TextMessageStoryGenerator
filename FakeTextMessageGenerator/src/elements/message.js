import React from 'react';
import DelieveredMessage from './delievered-message';

function Message({content, isSent, isLatest, isNewMessageGroup}) {
    const classNameIsLast = isLatest ? 'last-message' : '';
    const classNameIsSent = isSent ? 'message-sent' : 'message-recieved';
    const classNameIsNewMessageGroup = isNewMessageGroup ? 'new-message-group' : '';

    return (
    <div className={`message ${classNameIsSent} ${classNameIsLast} ${classNameIsNewMessageGroup}`}>
        <div className="message-content">
            <div className="content">{content}</div>
            <div className="bubble"></div>
        </div>
        {isSent && isLatest && <DelieveredMessage/>} 
    </div>
  );
}



export default Message;