const hitWord = window.document.querySelector("#hit-word");

let oldIndex = 0;
hitWord.addEventListener("click", ({ target }) => {
    for(let i = 0; i <= 5; i++) {
        if(oldIndex === indexRandomItem) {
            indexRandomItem = randomNumber(arrayItemsChoose.length);
            break;
        }
    }

    oldIndex = indexRandomItem;

    target.classList.add("press-element");
    let time;
    clearTimeout(time);
    time = setTimeout(() => {
        target.classList.remove("press-element");
    }, HALFASECONDSINMILISECONDS);
});