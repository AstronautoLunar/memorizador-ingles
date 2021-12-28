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
}

generateElementsOfItems({
    url,
    children: panelChoose
});
