let itemsSelectedForDelete = [ ];

function setStatusItem({ 
    type, 
    element 
}) {
    const [ img ] = element.children;

    switch(type) {
        case "selected":
            element.style.backgroundColor = "var(--medium-spring-green)";
            img.src = "assets/icons/icon-check.svg"
            
            break;
        case "no-selected":
            element.style.backgroundColor = "";
            img.src = "assets/icons/icon-delete-black.svg"
                
            break;
        default:
    }
}

function verifyConfirmPanelDelete() {
    if(itemsSelectedForDelete.length) {
        confirmDeleteWords.style.height = "110px";
        confirmDeleteWords.style.padding = "24px 0";
    } else {
        confirmDeleteWords.style.height = "";
        confirmDeleteWords.style.padding = "";
    }
}

async function generateItemsOfDeleteWord() {
    async function renderItems() {
        const response = await fetch("http://localhost:4444/api/getWords");
        const dataJson = await response.json();
        const data = JSON.parse(dataJson);

        areaWordsDelete.innerHTML = "";

        data.words.forEach(({
            id,
            US,
            BR,
            date
        }) => {
            const { original } = randomColorRgb();
    
            return (
                areaWordsDelete.innerHTML += `
                    <div 
                        class="area-item-delete-word"
                        style="
                            color: ${original};
                            border-color: ${original};
                        "
                    >
                        <div class="area-item-text">
                            <span 
                                class="item item-delete-word"
                                data-translate="${BR}"
                                data-original="${US}"
                                data-id="${id}"
                                data-datetime="${date}"
                                data-color="${original}"
                                data-selected="false"
                            >
                                ${ US }
                            </span>
                        </div>
                        <button 
                            class="button-delete-word"
                            data-id="${id}"
                            data-selected="false"
                        >
                            <img
                                class="icon-delete-word"
                                src="assets/icons/icon-delete-black.svg"
                                alt="icon delete word"
                            />
                        </button>
                    </div>
                `
            )
        });
    }

    await renderItems();

    const buttonsDeleteItems = window.document.querySelectorAll(".button-delete-word");

    for(let button of buttonsDeleteItems) {
        button.addEventListener("click", () => {
            const { id, selected } = button.dataset

            if(selected === "false") {
                setStatusItem({
                    element: button,
                    type: "selected"
                });
                
                button.dataset.selected = "true";
                itemsSelectedForDelete.push(id);
            } else {
                setStatusItem({
                    element: button,
                    type: "no-selected"
                });
                
                button.dataset.selected = "false";
                
                const newListItems = itemsSelectedForDelete.filter(item => item !== id);
                
                itemsSelectedForDelete = newListItems;
            }

            // if(itemsSelectedForDelete.length) {
            //     confirmDeleteWords.style.height = "110px";
            //     confirmDeleteWords.style.padding = "24px 0";
            // } else {
            //     confirmDeleteWords.style.height = "";
            //     confirmDeleteWords.style.padding = "";
            // }
            verifyConfirmPanelDelete();
        })
    }
}

generateItemsOfDeleteWord();

buttonDelete.addEventListener("click", () => {
    /**
     * const headers = new Headers({
                    "Content-Type": "Application/json"
                });
    
                await fetch("http://localhost:4444/api/deleteWord", {
                    headers,
                    method: "DELETE",
                    body: JSON.stringify({ id })
                });
    
                setTimeout(async () => {
                    await renderItems();
                }, 2000);
     */
});

buttonDeselect.addEventListener("click", () => {
    itemsSelectedForDelete = [];

    verifyConfirmPanelDelete();

    const buttonsDeleteItems = window.document.querySelectorAll(".button-delete-word");

    for(let button of buttonsDeleteItems) {
        setStatusItem({
            element: button,
            type: "no-selected"
        });
        
        button.dataset.selected = "false";
    }
});