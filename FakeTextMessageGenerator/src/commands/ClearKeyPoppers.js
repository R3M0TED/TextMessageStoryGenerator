function ClearKeyPoppers(){
      const allPopovers = document.querySelectorAll('.keyboard-button-popover')
      allPopovers.forEach(popover => {
        popover.style.visibility = 'hidden';
    });
}

export default ClearKeyPoppers;
