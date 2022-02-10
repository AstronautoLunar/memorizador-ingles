const HALFASECONDSINMILISECONDS = 500;
let indexRandomItem = 0;
let itemSelected = {};
let valueQuantityAsk = 0;

function randomNumber(max) {
    return Math.floor(Math.random() * max);
} 

function changeVisibleElement({
    element,
    classElement,
    display,
    time
}) {
    element.classList.add(classElement);
    setTimeout(() => {
        element.classList.remove(classElement);
        element.style.display = display;
    }, time);
}

function applyItemSelected({ 
    text, 
    color 
}) {
    wordSelected.innerText = text;
    wordSelected.style.color = color
}

quantityAsk.addEventListener("change", ({ target }) => {
    valueQuantityAsk = Number(target.value);
});

buttonStart.addEventListener("click", () => {
    if(arrayItemsChoose.length <= 1) {
        messageError.innerText = "Selecione mais de uma palavra para começar";
        
        applyModeError(true);
    } else {
        messageError.innerText = "";

        applyModeError(false);

        changeVisibleElement({
            element: panelChooseItems,
            classElement: "hidden-element",
            display: "none",
            time: HALFASECONDSINMILISECONDS
        });
    
        changeVisibleElement({
            element: panelQuiz,
            classElement: "show-element",
            display: "flex",
            time: HALFASECONDSINMILISECONDS
        });
    
        indexRandomItem = randomNumber(arrayItemsChoose.length);
    
        itemSelected = arrayItemsChoose[indexRandomItem];
    
        if(!quantityAsk.value) {
            valueQuantityAsk = 10;
        }
    
        applyItemSelected({
            text: itemSelected.original,
            color: itemSelected.color
        });
    }
})
