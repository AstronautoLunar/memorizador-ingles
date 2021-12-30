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
    const answerValue = inputAnswer.value;
    const translateValue = itemSelected.translate;
    const valueWordSelect = wordSelected.innerText;
    
    if(answerValue) {
        if(answerValue === translateValue) {
            wordResponse.classList.add("hit-word");
            wordResponse.classList.remove("miss-word");
            
            wordSelected.innerText = valueWordSelect + ` - ${translateValue}`;
        } else {
            wordResponse.classList.add("miss-word");
            wordResponse.classList.remove("hit-word");
        }
    }

    wordResponse.innerText = answerValue;

    applyAnimationPress(target);
});

nextButton.addEventListener("click", ({ target }) => {
    for(let i = 0; i <= 5; i++) {
        if(oldIndex === indexRandomItem) {
            indexRandomItem = randomNumber(arrayItemsChoose.length);
            break;
        }
    }

    itemSelected = arrayItemsChoose[indexRandomItem];

    wordSelected.innerText = itemSelected.original;

    applyItemSelected({
        text: itemSelected.original,
        color: itemSelected.color
    });

    oldIndex = indexRandomItem;

    count += 1;
    console.log(count);
    console.log(valueQuantityAsk);

    const isCountQuantity = count === valueQuantityAsk;
    console.log(isCountQuantity);

    if(isCountQuantity) {
        changeVisibleElement({
            element: panelChooseItems,
            classElement: "show-element",
            display: "flex",
            time: HALFASECONDSINMILISECONDS
        });
    
        changeVisibleElement({
            element: panelQuiz,
            classElement: "hidden-element",
            display: "none",
            time: HALFASECONDSINMILISECONDS
        });

        count = 0;
    }

    applyAnimationPress(target);
})