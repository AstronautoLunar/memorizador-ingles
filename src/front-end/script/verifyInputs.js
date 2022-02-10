const lettersAlphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "k",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "ç"
]

quantityAsk.addEventListener("input", ({ target }) => {
    const valueQuantityInput = target.value;
    const lettersInput = valueQuantityInput.split("");

    for(let letterInput of lettersInput) {
        for(let letterAlphabet of lettersAlphabet) {
            if(letterInput === letterAlphabet) {
                applyModeError(true);
                break;
            } else {
                applyModeError(false);
            }
        }
    }
})