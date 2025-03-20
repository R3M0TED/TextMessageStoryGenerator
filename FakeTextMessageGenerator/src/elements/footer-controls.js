import React, { useState, useRef, useEffect } from 'react';

function FooterControls() {
  const [textAreaHeight, setTextAreaHeight] = useState('auto');
  const [parentHeight, setParentHeight] = useState('auto');
  const textAreaRef = useRef(null);

  const adjustTextareaHeight = () => {
    const textArea = textAreaRef.current;
    textArea.style.height = '50px';
    textArea.style.height = `${textArea.scrollHeight}px`;
    setParentHeight(`${textArea.scrollHeight}px`);
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, []);



  return (
    <div className="footer-controls">
      <div className="add-button"></div>
      <div className="message-composer">
        <textarea
          ref={textAreaRef}
          className="message-composer-content"
        ></textarea>
        <div className="default-message-composer-content">iMessage</div>
        <div className="message-composer-buttons">
          <div className="send-button"></div>
          <div className="voice-note"></div>
        </div>
      </div>
    </div>
  );
}

export default FooterControls;
