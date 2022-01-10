let valueInputWordUS = "";
let valueInputWordBR = "";

inputWordUS.addEventListener("input", ({ target }) => {
    valueInputWordUS = target.value;
});

inputWordBR.addEventListener("input", ({ target }) => {
    valueInputWordBR = target.value;
});

async function sendAddWord(data) {
    const headers = new Headers({
        "Content-Type": "application/json"
    });
    
    const status = await fetch("http://localhost:4444/api/addWord", {
        headers,
        method: "POST",
        body: JSON.stringify(data)
    });

    return await status.text()
}

buttonAddWord.addEventListener("click", async () => {
    const data = {
        US: valueInputWordUS,
        BR: valueInputWordBR
    };

    const responseText = await sendAddWord(data);

    if(responseText) {
        messageErrorPanelWord.innerText = responseText;
    } else {
        messageErrorPanelWord.innerText = "";
    }

    regenerateElementsOfItems(panelChoose); // File createElements.js
});