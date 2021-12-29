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

let error = false;

function applyStyleForModeError(error) {
    if(error) {
        messageError.style.height = "30px";
        buttonStart.setAttribute("disabled", "");
    } else {
        messageError.style.height = "0";
        buttonStart.removeAttribute("disabled");
    }
}

quantityAsk.addEventListener("input", ({ target }) => {
    const valueQuantityInput = target.value;
    const lettersInput = valueQuantityInput.split("");

    for(let letterInput of lettersInput) {
        for(let letterAlphabet of lettersAlphabet) {
            if(letterInput === letterAlphabet) {
                error = true;

                applyStyleForModeError(error);
                break;
            } else {
                error = false;

                applyStyleForModeError(error);
            }
        }
    }
})