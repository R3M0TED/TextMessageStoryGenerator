import React from 'react';

function KeyboardButtonPopver({letter}) {
  let isEdgeClassName = ''
  if (letter === "q"){
    isEdgeClassName = 'keyboard-button-popover-edge-left'
  }
  if (letter === "p"){
    isEdgeClassName = 'keyboard-button-popover-edge-right'
  }
  const keyboardButtonPopoverClassName = `keyboard-button-popover ${isEdgeClassName} ${letter}`


  return (
    <div className={keyboardButtonPopoverClassName}>
      <div className='keyboard-button-popover-text'>{letter}</div>
    </div>

  );
}

export default KeyboardButtonPopver;