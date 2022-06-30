let oldIndex = 0;
let count = 0;

function applyAnimationPress(target) {
    target.classList.add("press-element");
    let time;
    clearTimeout(time);
    time = setTimeout(() => {
        target.classList.remove("press-element");
    }, HALFASECONDSINMILISECONDS);
}

verifyButton.addEventListener("click", ({ target }) => {
    applyAnimationPress(target);

    changeVisibleElement({
        element: wordResponse,
        classElement: "show-element",
        display: "block",
        time: HALFASECONDSINMILISECONDS
    });

    const answerValue = inputAnswer.value.toUpperCase();
    let translateValue;

    translateValue = itemSelected.translate.split(",").map(word => word.toUpperCase());

    if(answerValue) {
        if(translateValue.includes(answerValue)) {
            wordResponse.classList.add("hit-word");
            wordResponse.classList.remove("miss-word");
            
        } else {
            wordResponse.classList.add("miss-word");
            wordResponse.classList.remove("hit-word");
        }
    }

    wordResponse.innerText = inputAnswer.value;
});

nextButton.addEventListener("click", ({ target }) => {
    applyAnimationPress(target);

    inputAnswer.value = "";
    inputAnswer.focus();

    changeVisibleElement({
        element: wordResponse,
        classElement: "hidden-element",
        display: "none",
        time: HALFASECONDSINMILISECONDS
    });

    while(oldIndex === indexRandomItem) {
        indexRandomItem = randomNumber(arrayItemsChoose.length);
    }

    itemSelected = arrayItemsChoose[indexRandomItem];

    wordSelected.innerText = itemSelected.original;

    applyItemSelected({
        text: itemSelected.original,
        color: itemSelected.color
    });

    oldIndex = indexRandomItem;

    count += 1;

    const isCountQuantity = count === valueQuantityAsk;

    if(isCountQuantity) {
        changeVisibleElement({
            element: panelQuiz,
            classElement: "hidden-element",
            display: "none",
            time: HALFASECONDSINMILISECONDS
        });

        changeVisibleElement({
            element: panelChooseItems,
            classElement: "show-element",
            display: "flex",
            time: HALFASECONDSINMILISECONDS
        });
    

        count = 0;

        arrayItemsChoose = [];

        changeVisibleElement({
            element: wordResponse,
            classElement: "hidden-element",
            display: "none",
            time: HALFASECONDSINMILISECONDS
        });
    }
});

showWordButton.addEventListener("click", ({ target }) => {
    applyAnimationPress(target);
    const { mode } = target.dataset;

    if(mode === "hidden") {
        wordSelected.innerText = itemSelected.translate;
        showWordButton.innerText = "Esconder";
        
        target.dataset.mode = "show"
    } else {
        wordSelected.innerText = itemSelected.original;
        showWordButton.innerText = "Mostrar";

        target.dataset.mode = "hidden"
    }
});

buttonOut.addEventListener("click", () => {
    changeVisibleElement({
        element: panelQuiz,
        classElement: "hidden-element",
        display: "none",
        time: HALFASECONDSINMILISECONDS
    });
    
    changeVisibleElement({
        element: panelChooseItems,
        classElement: "show-element",
        display: "flex",
        time: HALFASECONDSINMILISECONDS
    });

    changeVisibleElement({
        element: listItemsNav,
        classElement: "show-element",
        display: "flex",
        time: HALFASECONDSINMILISECONDS
    });
});