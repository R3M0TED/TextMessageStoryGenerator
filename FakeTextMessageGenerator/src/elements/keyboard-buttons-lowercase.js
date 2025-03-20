import React from 'react';
import KeyboardLetterButton from './keyboard-letter-button';
import KeyboardCapslockButton from './keyboard-capslock-button';
import KeyboardDeleteButton from './keyboard-delete-button';
import KeyboardNumbersButton from './keyboard-numbers-button';
import KeyboardSpaceButton from './keyboard-space-button';
import KeyboardReturnButton from './keyboard-return-button';
import KeyboardEmojiButton from './keyboard-emoji-button';
import KeyboardMicButton from './keyboard-mic-button';


function KeyboardButtonsLowercase() {
  return (
    <div className="keyboard-buttons keyboard-buttons-lowercase">
        <div className="keyboard-row">
          <KeyboardLetterButton letter="q"></KeyboardLetterButton>
          <KeyboardLetterButton letter="w"></KeyboardLetterButton>
          <KeyboardLetterButton letter="e"></KeyboardLetterButton>
          <KeyboardLetterButton letter="r"></KeyboardLetterButton>
          <KeyboardLetterButton letter="t"></KeyboardLetterButton>
          <KeyboardLetterButton letter="y"></KeyboardLetterButton>
          <KeyboardLetterButton letter="u"></KeyboardLetterButton>
          <KeyboardLetterButton letter="i"></KeyboardLetterButton>
          <KeyboardLetterButton letter="o"></KeyboardLetterButton>
          <KeyboardLetterButton letter="p"></KeyboardLetterButton>
        </div>
        <div className="keyboard-row">
          <KeyboardLetterButton letter="a"></KeyboardLetterButton>
          <KeyboardLetterButton letter="s"></KeyboardLetterButton>
          <KeyboardLetterButton letter="d"></KeyboardLetterButton>
          <KeyboardLetterButton letter="f"></KeyboardLetterButton>
          <KeyboardLetterButton letter="g"></KeyboardLetterButton>
          <KeyboardLetterButton letter="h"></KeyboardLetterButton>
          <KeyboardLetterButton letter="j"></KeyboardLetterButton>
          <KeyboardLetterButton letter="k"></KeyboardLetterButton>
          <KeyboardLetterButton letter="l"></KeyboardLetterButton>
        </div>
        <div className="keyboard-row">
          <KeyboardCapslockButton></KeyboardCapslockButton>
          <KeyboardLetterButton letter="z"></KeyboardLetterButton>
          <KeyboardLetterButton letter="x"></KeyboardLetterButton>
          <KeyboardLetterButton letter="c"></KeyboardLetterButton>
          <KeyboardLetterButton letter="v"></KeyboardLetterButton>
          <KeyboardLetterButton letter="b"></KeyboardLetterButton>
          <KeyboardLetterButton letter="n"></KeyboardLetterButton>
          <KeyboardLetterButton letter="m"></KeyboardLetterButton>
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

export default KeyboardButtonsLowercase;