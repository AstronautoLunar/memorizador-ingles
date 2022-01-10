let newWord = {};

async function generateItemsOfModifyWord() {
    const response = await fetch("http://localhost:4444/api/getWords");
    const dataJson = await response.json();
    const data = JSON.parse(dataJson);

    listItemsForModify.innerHTML = "";

    data.words.forEach(({
        id,
        US,
        BR,
        date
    }) => {
        const { original } = randomColorRgb();

        return (
            listItemsForModify.innerHTML += `
                <span 
                    class="item item-modify-word"
                    data-translate="${BR}"
                    data-original="${US}"
                    data-id="${id}"
                    data-datetime="${date}"
                    style="
                        color: ${original};
                        border-color: ${original};
                    "
                    data-color="${original}"
                    data-selected="false"
                >
                    ${ US }
                </span>
            `
        )
    });

    const items = window.document.querySelectorAll(".item-modify-word");

    for(let item of items) {
        item.addEventListener("click", ({ target }) => {
            areaModify.style.height = "200px";

            const { 
                id, 
                original, 
                translate,
                datetime
            } = target.dataset;

            textIdentifierWord.innerText = id;
            dateModifyWord.innerText = datetime;
            inputEnglishModifyWord.value = original;
            inputPortugueseModifyWord.value = translate;

            newWord = {
                id: textIdentifierWord.innerText,
                US: original,
                BR: translate,
                date: dateModifyWord.innerText
            }
        });
    }
}

generateItemsOfModifyWord();

buttonIconOut.addEventListener("click", () => {
    areaModify.style.height = "0";
});

inputPortugueseModifyWord.addEventListener("input", ({ target }) => {
    newWord.BR = target.value;
});

inputEnglishModifyWord.addEventListener("input", ({ target }) => {
    newWord.US = target.value;
});

buttonModifyWord.addEventListener("click", async ({ target }) => {
    const headers = new Headers({
        "Content-Type": "Application/json"
    });

    await fetch("http://localhost:4444/api/modifyWord", {
        headers,
        method: "PUT",
        body: JSON.stringify(newWord)
    });

    target.innerText = "Modificado";

    setTimeout(() => {
        target.innerText = "Modificar";

        generateItemsOfModifyWord();
    }, 1500);
});