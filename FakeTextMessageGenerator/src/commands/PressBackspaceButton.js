import Wait from "./Wait";

async function PressBackspaceButton(speed) {
    const backspaceButton = document.querySelector('.keyboard-delete-button');
    backspaceButton.classList.add('keyboard-delete-button-pressed')
    await Wait(speed)
    backspaceButton.classList.remove('keyboard-delete-button-pressed')

}

export default PressBackspaceButton;
