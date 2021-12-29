let arrayItemsChoose = [];
const HALFASECONDSINMILISECONDS = 500;
let indexRandomItem = 0;

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

buttonStart.addEventListener("click", () => {
    const items = window.document.querySelectorAll(".item");
    
    for(let item of items) {
        let { 
            translate, 
            original, 
            selected 
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
                selected
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
})
