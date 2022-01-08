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
                        color: ${alpha};
                        border-color: ${alpha};
                    "
                    data-color="${original}"
                    data-selected="false"
                >
                    ${ US }
                </span>
            `
        )
    });

    // function applyStyleSelectedItem(target) {

    // }

    const items = window.document.querySelectorAll(".item-modify-word");

    console.log(items);

    // for(let item of items) {
    //     item.addEventListener("click", ({ target }) => {
            
    //     })
    // }

    // Criar uma funcionalidade que retorne todos os elementos irmãos do item selecionado
}

generateItemsOfModifyWord(url)