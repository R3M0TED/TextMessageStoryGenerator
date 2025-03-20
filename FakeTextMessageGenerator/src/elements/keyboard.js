import React from 'react';
import KeyboardAutocorrectSection from './keyboard-autocorrect-section';
import KeyboardButtons from './keyboard-buttons';
function Keyboard() {
  return (
    <div className="keyboard">
        <KeyboardAutocorrectSection></KeyboardAutocorrectSection>
        <KeyboardButtons></KeyboardButtons>
  </div>
  );
}

export default Keyboard;