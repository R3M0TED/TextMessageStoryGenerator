import React from 'react';
import KeyboardLetterButton from './keyboard-letter-button';
import KeyboardCapslockButton from './keyboard-capslock-button';
import KeyboardDeleteButton from './keyboard-delete-button';
import KeyboardNumbersButton from './keyboard-numbers-button';
import KeyboardSpaceButton from './keyboard-space-button';
import KeyboardReturnButton from './keyboard-return-button';
import KeyboardEmojiButton from './keyboard-emoji-button';
import KeyboardMicButton from './keyboard-mic-button';
import KeyboardSquarePunctuationButton from './keyboard-square-punctuation-button';
import KeyboardLettersButton from './keyboard-letters-button';
import KeyboardSymbolsButton from './keyboard-symbols-button';
function KeyboardButtonsPunctuation() {
  return (
    <div className="keyboard-buttons keyboard-buttons-punctuation">
        <div className="keyboard-row">
          <KeyboardLetterButton letter="1"></KeyboardLetterButton>
          <KeyboardLetterButton letter="2"></KeyboardLetterButton>
          <KeyboardLetterButton letter="3"></KeyboardLetterButton>
          <KeyboardLetterButton letter="4"></KeyboardLetterButton>
          <KeyboardLetterButton letter="5"></KeyboardLetterButton>
          <KeyboardLetterButton letter="6"></KeyboardLetterButton>
          <KeyboardLetterButton letter="7"></KeyboardLetterButton>
          <KeyboardLetterButton letter="8"></KeyboardLetterButton>
          <KeyboardLetterButton letter="9"></KeyboardLetterButton>
          <KeyboardLetterButton letter="0"></KeyboardLetterButton>
        </div>
        <div className="keyboard-row">
          <KeyboardLetterButton letter="-"></KeyboardLetterButton>
          <KeyboardLetterButton letter="/"></KeyboardLetterButton>
          <KeyboardLetterButton letter=":"></KeyboardLetterButton>
          <KeyboardLetterButton letter=";"></KeyboardLetterButton>
          <KeyboardLetterButton letter="("></KeyboardLetterButton>
          <KeyboardLetterButton letter=")"></KeyboardLetterButton>
          <KeyboardLetterButton letter="£"></KeyboardLetterButton>
          <KeyboardLetterButton letter="&"></KeyboardLetterButton>
          <KeyboardLetterButton letter="@"></KeyboardLetterButton>
          <KeyboardLetterButton letter='"'></KeyboardLetterButton>
        </div>
        <div className="keyboard-row">
          <KeyboardSymbolsButton></KeyboardSymbolsButton>
          <KeyboardSquarePunctuationButton letter="."></KeyboardSquarePunctuationButton>
          <KeyboardSquarePunctuationButton letter=","></KeyboardSquarePunctuationButton>
          <KeyboardSquarePunctuationButton letter="?"></KeyboardSquarePunctuationButton>
          <KeyboardSquarePunctuationButton letter="!"></KeyboardSquarePunctuationButton>
          <KeyboardSquarePunctuationButton letter='`'></KeyboardSquarePunctuationButton>
          <KeyboardDeleteButton></KeyboardDeleteButton>
        </div>

        <div className="keyboard-row">
          <KeyboardLettersButton></KeyboardLettersButton>
          <KeyboardSpaceButton></KeyboardSpaceButton>
          <KeyboardReturnButton></KeyboardReturnButton>
        </div>

        <div className="keyboard-row" style={{justifyContent:'space-between', width: '100%'}}>
          <KeyboardEmojiButton></KeyboardEmojiButton>
          <KeyboardMicButton></KeyboardMicButton>
        </div>
      </div>  );
}

export default KeyboardButtonsPunctuation;