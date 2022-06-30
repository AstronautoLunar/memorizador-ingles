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
    
    const responseFetch = await fetch("http://localhost:4444/api/addWord", {
        headers,
        method: "POST",
        body: JSON.stringify(data)
    });

    
    inputWordBR.value = "";
    inputWordUS.value = "";

    inputWordUS.focus();

    return {
        status: responseFetch.status,
        reason: await responseFetch.text()
    };
}

function restoreStyleButtonAddWord() {
    const ONESECONDS = 1000;
    
    setTimeout(() => {
        buttonAddWord.innerText = "Salvar";
        buttonAddWord.style.backgroundColor = "";
    }, ONESECONDS);
}

buttonAddWord.addEventListener("click", async () => {
    const data = {
        US: valueInputWordUS,
        BR: valueInputWordBR
    };

    const { status, reason } = await sendAddWord(data);

    if(status === 200) {
        buttonAddWord.innerText = "Salvo com sucesso";
        buttonAddWord.style.backgroundColor = "var(--medium-spring-green)";

        restoreStyleButtonAddWord();
    } else {
        buttonAddWord.innerText = reason;
        buttonAddWord.style.backgroundColor = "var(--bright-yellow-crayola)";

        restoreStyleButtonAddWord();
    }
    
    regenerateElementsOfItems(panelChoose); // File createElements.js
});