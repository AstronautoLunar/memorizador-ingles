// panel-choose - Painel de escolha das palavras
const url = "./data/data.json";

async function generateElementsOfItems({ 
    url,
    children 
}) {
    const response = await fetch(url);
    const data = await response.json();
    
    data.words.forEach(({ 
        original,
        translateBr
    }) => (
        children.innerHTML += `
            <span 
                class="item"
                data-translate="${translateBr}"
            >
                ${ original }
            </span>
        `
    ));

    const item = window.document.querySelectorAll(".item");

    item.forEach(item => {
        const value = item.innerText;
        const data = item.dataset.translate;
        
        item.addEventListener("mouseenter", ({ target }) => (
            target.innerText = data
        ));
        
        item.addEventListener("mouseleave", ({ target }) => (
            target.innerText = value
        ));
    });
}

generateElementsOfItems({
    url,
    children: panelChoose
});
