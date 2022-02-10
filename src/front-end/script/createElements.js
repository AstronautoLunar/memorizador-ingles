// panel-choose - Painel de escolha das palavras
let arrayItemsChoose = [];

async function generateElementsOfItems(children) {
    const response = await fetch("http://localhost:4444/api/getWords");
    const dataJson = await response.json();
    const data = JSON.parse(dataJson);

    data.words.forEach(({ 
        US,
        BR,
        id
    }) => {
        const { original, alpha } = randomColorRgb();

        return (
            children.innerHTML += `
                <span 
                    class="item"
                    data-id="${id}"
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

    const items = window.document.querySelectorAll(".item");

    function applyStyleHoverMode({
        mode,
        element,
        color
    }) {
        const modeGhostButton = () => {
            element.style.borderColor = color;
            element.style.color = color;
            element.style.backgroundColor = "";
            element.style.transform = "";
        }

        const modeDefaultButton = () => {
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

    items.forEach(item => {
        const color = item.dataset.color;

        const eventMouseEnter = ({ target }) => {
            applyStyleHoverMode({
                mode: "hover",
                element: target,
                color
            });
        }

        const eventMouseLeave = ({ target }) => {
            applyStyleHoverMode({
                mode: "normal",
                element: target,
                color
            });
        }

        item.addEventListener("mouseenter", eventMouseEnter, true);
        
        item.addEventListener("mouseleave", eventMouseLeave, true);

        function applyEvent(mode) {
            switch(mode) {
                default:
                case "on":
                    item.addEventListener("mouseenter", eventMouseEnter, true);
        
                    item.addEventListener("mouseleave", eventMouseLeave), true;
                    break;
                case "off":
                    item.removeEventListener("mouseenter", eventMouseEnter, true);
        
                    item.removeEventListener("mouseleave", eventMouseLeave, true);
                    break;
            }
        } 

        item.addEventListener("click", ({ target }) => {
            const { 
                translate, 
                original, 
                selected,
                color,
                id
            } = target.dataset;
            
            if(selected === "true") {
                target.dataset.selected = "false";

                applyEvent("on");

                applyStyleHoverMode({
                    mode: "no-selected",
                    element: target,
                    color
                });
                
                let oldArrayItemChoose = arrayItemsChoose;

                arrayItemsChoose = oldArrayItemChoose.filter(itemChoose => itemChoose.id !== id);
            } else {
                target.dataset.selected = "true";
                
                applyEvent("off");
                
                applyStyleHoverMode({
                    mode: "selected",
                    element: target,
                    color
                });

                arrayItemsChoose.push({
                    id,
                    translate,
                    original,
                    selected,
                    color
                });
            }

            if(arrayItemsChoose.length >= 1) {
                applyModeError(false);
            }
        });
    });
}

generateElementsOfItems(panelChoose)

function regenerateElementsOfItems(children) {
    children.innerText = "";

    generateElementsOfItems(children);
}