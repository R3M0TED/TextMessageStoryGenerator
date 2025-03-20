import React from 'react';
import KeyboardButtonPopver from './keyboard-button-popover';
function KeyboardLetterButton({letter}) {
  let isEdgeClassName = ''
  if (letter === "q" || letter === "p"){
    isEdgeClassName = 'keyboard-button-container-edge'
  }


  const keyboardContainerClassName = `keyboard-button-container ${letter} ${isEdgeClassName}`
  const keyboardButtonClassName = `keyboard-button ${letter}`



  return (
    <div className={keyboardContainerClassName}>
      <div className={keyboardButtonClassName}>{letter}</div>
      <KeyboardButtonPopver letter={letter} ></KeyboardButtonPopver>
    </div>


  );
}

export default KeyboardLetterButton;