// panel-choose - Painel de escolha das palavras
const url = "./data/data.json";

async function generateElementsOfItems({ 
    url,
    children 
}) {
    const response = await fetch(url);
    const data = await response.json();
    
    data.words.forEach(({ 
        US,
        BR
    }) => {
        const { original, alpha } = randomColorRgb();

        return (
            children.innerHTML += `
                <span 
                    class="item"
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

    const item = window.document.querySelectorAll(".item");

    function applyStyleHoverMode({
        mode,
        element,
        color,
        text
    }) {
        const modeGhostButton = () => {
            element.innerText = text;
            element.style.borderColor = color;
            element.style.color = color;
            element.style.backgroundColor = "";
            element.style.transform = "";
        }

        const modeDefaultButton = () => {
            element.innerText = text;
            element.style.borderColor = color;
            element.style.color = "";
            element.style.backgroundColor = color;
            element.style.transform = "scale(1.2)";
        }

        switch(mode) {
            default:
            case "normal":
                modeGhostButton();

                break;
            case "hover":
                modeDefaultButton();

                break;
            case "selected":
                modeDefaultButton();
                element.style.boxShadow = `0 0 12px 5px ${color}`;
                
                break;
            case "no-selected":
                modeGhostButton();
                element.style.boxShadow = "";
                break;
        }
    }

    item.forEach(item => {
        const value = item.innerText;
        const data = item.dataset.translate;
        const color = item.dataset.color;

        const eventMouseEnter = ({ target }) => {
            applyStyleHoverMode({
                mode: "hover",
                element: target,
                color,
                text: data
            });
        }

        const eventMouseLeave = ({ target }) => {
            applyStyleHoverMode({
                mode: "normal",
                element: target,
                color,
                text: value
            });
        }

        item.addEventListener("mouseenter", eventMouseEnter);
        
        item.addEventListener("mouseleave", eventMouseLeave);

        function applyEvent(mode) {
            switch(mode) {
                default:
                case "on":
                    item.addEventListener("mouseenter", eventMouseEnter);
        
                    item.addEventListener("mouseleave", eventMouseLeave);
                    break;
                case "off":
                    item.removeEventListener("mouseenter", eventMouseEnter);
        
                    item.removeEventListener("mouseleave", eventMouseLeave);
                    break;
            }
        } 

        item.addEventListener("click", ({ target }) => {
            const { 
                selected,
                original,
                translate
            } = target.dataset;
            
            if(selected === "true") {
                target.dataset.selected = "false";

                applyEvent("on");

                applyStyleHoverMode({
                    mode: "no-selected",
                    element: target,
                    color,
                    text: translate
                });
            } else {
                target.dataset.selected = "true";
                
                applyEvent("off");
                
                applyStyleHoverMode({
                    mode: "selected",
                    element: target,
                    color,
                    text: original
                });
            }
        });
    });
}

generateElementsOfItems({
    url,
    children: panelChoose
});
