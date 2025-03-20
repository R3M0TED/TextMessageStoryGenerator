import React from 'react';

function KeyboardSquareButtonPopover({letter}) {

  const keyboardButtonPopoverClassName = `keyboard-button-popover ${letter} keyboard-button-popover-square`


  return (
    <div className={keyboardButtonPopoverClassName}>
      <div className='keyboard-button-popover-text'>{letter}</div>
    </div>

  );
}

export default KeyboardSquareButtonPopover;