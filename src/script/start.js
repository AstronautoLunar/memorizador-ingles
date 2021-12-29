let arrayItemsChoose = [];
const HALFASECONDSINMILISECONDS = 500

buttonStart.addEventListener("click", () => {
    const items = window.document.querySelectorAll(".item");
    
    for(let item of items) {
        let { 
            translate, 
            original, 
            selected 
        } = item.dataset;
    
        if(selected === "true") {
            selected = true;
        } else {
            selected = false;
        }
    
        if(selected) {
            arrayItemsChoose.push({
                translate,
                original,
                selected
            });
        }
    }

    panelChooseItems.classList.add("hidden-element");
    setTimeout(() => {
        panelChooseItems.style.display = "none";
    }, HALFASECONDSINMILISECONDS);

    panelQuiz.classList.add("show-element");
    setTimeout(() => {
        panelQuiz.style.display = "flex";
    }, HALFASECONDSINMILISECONDS);
})
