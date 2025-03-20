function ShowkeyPopper(key) {
  try {
    const escapedKey = CSS.escape(key);
    const selector = `.keyboard-button-popover.${escapedKey}`;
    const buttonPopover = document.querySelector(selector);

    if (buttonPopover) {
      buttonPopover.style.visibility = "visible";

      setTimeout(() => {
        buttonPopover.style.visibility = "hidden";
      }, 500);
    } else {
      //console.log(`Popover not found for key: ${key}`);
    }
  } catch (error) {
    console.log('Error showing key popper:', error);
  }
}

export default ShowkeyPopper;
