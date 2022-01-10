let arrayItemsChoose = [];
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
    const items = window.document.querySelectorAll(".item");
    
    for(let item of items) {
        let { 
            translate, 
            original, 
            selected,
            color
        } = item.dataset;
    
        if(selected === "true") {
            selected = true;
        } else {
            selected = false;
        }
    
        if(selected) {
            arrayItemsChoose.push({
                translate,
                original,
                selected,
                color
            });
        }
    }

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
})
