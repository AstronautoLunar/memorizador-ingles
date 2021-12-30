let arrayItemsChoose = [];
const HALFASECONDSINMILISECONDS = 500;
let indexRandomItem = 0;
let itemSelected = {};

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

    applyItemSelected({
        text: itemSelected.original,
        color: itemSelected.color
    });
})
