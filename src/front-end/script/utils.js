function applyModeError(error) {
    if(error) {
        messageError.style.height = "30px";
        buttonStart.setAttribute("disabled", "");
    } else {
        messageError.style.height = "0";
        buttonStart.removeAttribute("disabled");
    }
}
