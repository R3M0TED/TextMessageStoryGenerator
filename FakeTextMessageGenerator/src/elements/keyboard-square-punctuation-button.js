import React from 'react';
import KeyboardSquareButtonPopover from './keyboard-square-button-popover';
function KeyboardSquarePunctuationButton({letter}) {
  let isEdgeClassName = ''
  if (letter === "q" || letter === "p"){
    isEdgeClassName = 'keyboard-button-container-edge'
  }


  const keyboardContainerClassName = `keyboard-button-container ${letter} ${isEdgeClassName} keyboard-square-button`
  const keyboardButtonClassName = `keyboard-button ${letter}`



  return (
    <div className={keyboardContainerClassName}>
      <div className={keyboardButtonClassName}>{letter}</div>
      <KeyboardSquareButtonPopover letter={letter} ></KeyboardSquareButtonPopover>
    </div>


  );
}

export default KeyboardSquarePunctuationButton;