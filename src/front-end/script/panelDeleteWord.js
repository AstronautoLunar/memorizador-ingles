async function generateItemsOfDeleteWord() {
    async function renderItems() {
        const response = await fetch("http://localhost:4444/api/getWords");
        const dataJson = await response.json();
        const data = JSON.parse(dataJson);

        panelDeleteWord.innerHTML = "";

        data.words.forEach(({
            id,
            US,
            BR,
            date
        }) => {
            const { original } = randomColorRgb();
    
            return (
                panelDeleteWord.innerHTML += `
                    <div 
                        class="area-item-delete-word"
                        style="
                            color: ${original};
                            border-color: ${original};
                        "
                    >
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
                        <button 
                            class="button-delete-word"
                            data-id="${id}"
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
        button.addEventListener("click", async () => {
            const { id } = button.dataset;

            const headers = new Headers({
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
        })
    }
}

generateItemsOfDeleteWord();