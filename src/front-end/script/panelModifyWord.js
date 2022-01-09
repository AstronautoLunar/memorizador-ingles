async function generateItemsOfModifyWord(url) {
    const response = await fetch(url);
    const dataJson = await response.json();
    const data = JSON.parse(dataJson);

    data.words.forEach(({ 
        US,
        BR
    }) => {
        const { original, alpha } = randomColorRgb();

        return (
            listItemsForModify.innerHTML += `
                <span 
                    class="item item-modify-word"
                    data-translate="${BR}"
                    data-original="${US}"
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
        });
    }
}

generateItemsOfModifyWord(url);

buttonIconOut.addEventListener("click", () => {
    areaModify.style.height = "0";
});