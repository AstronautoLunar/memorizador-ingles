// panel-choose - Painel de escolha das palavras

async function generateElementsOfItems(children) {
    const response = await fetch("http://localhost:4444/api/getWords");
    const dataJson = await response.json();
    const data = JSON.parse(dataJson);

    data.words.forEach(({ 
        US,
        BR
    }) => {
        const { original, alpha } = randomColorRgb();

        return (
            children.innerHTML += `
                <span 
                    class="item"
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
                selected
            } = target.dataset;
            
            if(selected === "true") {
                target.dataset.selected = "false";

                applyEvent("on");

                applyStyleHoverMode({
                    mode: "no-selected",
                    element: target,
                    color
                });
            } else {
                target.dataset.selected = "true";
                
                applyEvent("off");
                
                applyStyleHoverMode({
                    mode: "selected",
                    element: target,
                    color
                });
            }
        });
    });
}

generateElementsOfItems(panelChoose)

function regenerateElementsOfItems(children) {
    children.innerText = "";

    generateElementsOfItems(children);
}