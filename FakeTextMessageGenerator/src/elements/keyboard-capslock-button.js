import React from 'react';
function KeyboardCapslockButton({pressed = false} ) {
  const className = pressed ? 'keyboard-capslock-button-pressed' : 'keyboard-capslock-button';
  return (
    <div className={'keyboard-button-container keyboard-capslock-button-container '}>
      <div className={`keyboard-button ${className}`}></div>
    </div>


  );
}

export default KeyboardCapslockButton;