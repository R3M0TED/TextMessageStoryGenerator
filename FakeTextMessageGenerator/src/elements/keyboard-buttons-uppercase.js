import React from 'react';
import KeyboardLetterButton from './keyboard-letter-button';
import KeyboardCapslockButton from './keyboard-capslock-button';
import KeyboardDeleteButton from './keyboard-delete-button';
import KeyboardNumbersButton from './keyboard-numbers-button';
import KeyboardSpaceButton from './keyboard-space-button';
import KeyboardReturnButton from './keyboard-return-button';
import KeyboardEmojiButton from './keyboard-emoji-button';
import KeyboardMicButton from './keyboard-mic-button';


function KeyboardButtonsUppercase() {
  return (
    <div className="keyboard-buttons keyboard-buttons-uppercase">
        <div className="keyboard-row">
          <KeyboardLetterButton letter="Q"></KeyboardLetterButton>
          <KeyboardLetterButton letter="W"></KeyboardLetterButton>
          <KeyboardLetterButton letter="E"></KeyboardLetterButton>
          <KeyboardLetterButton letter="R"></KeyboardLetterButton>
          <KeyboardLetterButton letter="T"></KeyboardLetterButton>
          <KeyboardLetterButton letter="Y"></KeyboardLetterButton>
          <KeyboardLetterButton letter="U"></KeyboardLetterButton>
          <KeyboardLetterButton letter="I"></KeyboardLetterButton>
          <KeyboardLetterButton letter="O"></KeyboardLetterButton>
          <KeyboardLetterButton letter="P"></KeyboardLetterButton>
        </div>
        <div className="keyboard-row">
          <KeyboardLetterButton letter="A"></KeyboardLetterButton>
          <KeyboardLetterButton letter="S"></KeyboardLetterButton>
          <KeyboardLetterButton letter="D"></KeyboardLetterButton>
          <KeyboardLetterButton letter="F"></KeyboardLetterButton>
          <KeyboardLetterButton letter="G"></KeyboardLetterButton>
          <KeyboardLetterButton letter="H"></KeyboardLetterButton>
          <KeyboardLetterButton letter="J"></KeyboardLetterButton>
          <KeyboardLetterButton letter="K"></KeyboardLetterButton>
          <KeyboardLetterButton letter="L"></KeyboardLetterButton>
        </div>
        <div className="keyboard-row">
          <KeyboardCapslockButton pressed={true}></KeyboardCapslockButton>
          <KeyboardLetterButton letter="Z"></KeyboardLetterButton>
          <KeyboardLetterButton letter="X"></KeyboardLetterButton>
          <KeyboardLetterButton letter="C"></KeyboardLetterButton>
          <KeyboardLetterButton letter="V"></KeyboardLetterButton>
          <KeyboardLetterButton letter="B"></KeyboardLetterButton>
          <KeyboardLetterButton letter="N"></KeyboardLetterButton>
          <KeyboardLetterButton letter="M"></KeyboardLetterButton>
          <KeyboardDeleteButton></KeyboardDeleteButton>
        </div>

        <div className="keyboard-row">
          <KeyboardNumbersButton></KeyboardNumbersButton>
          <KeyboardSpaceButton></KeyboardSpaceButton>
          <KeyboardReturnButton></KeyboardReturnButton>
        </div>

        <div className="keyboard-row" style={{justifyContent:'space-between', width: '100%'}}>
          <KeyboardEmojiButton></KeyboardEmojiButton>
          <KeyboardMicButton></KeyboardMicButton>
        </div>
      </div>  );
}

export default KeyboardButtonsUppercase;