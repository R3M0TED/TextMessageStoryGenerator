async function Wait(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

export default Wait;