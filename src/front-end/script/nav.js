const itemsNav = [
    {
        id: "01",
        name: "home",
        src: "assets/icons/icon-home.svg",
        alt: "icon home"
    },
    {
        id: "02",
        name: "addWord",
        src: "assets/icons/icon-plus.svg",
        alt: "icon plus"
    },
    {
        id: "03",
        name: "modifyWord",
        src: "assets/icons/icon-change.svg",
        alt: "icon change"
    },
    {
        id: "04",
        name: "deleteWord",
        src: "assets/icons/icon-delete.svg",
        alt: "icon delete"
    },
]

const itemNavRendered = itemsNav.map(({ 
    id,
    name,
    src, 
    alt
}) => (
    `
        <li 
            class="item-nav-panel"
            data-id="${id}"
        >
            <img
                id="${name}"
                class="icon-nav-panel"
                src="${src}"
                alt="${alt}"
            />
        </li>
    `
));

const todayElements = itemNavRendered.join("");

listItemsNav.innerHTML = todayElements;

// Elements Navigation
const buttonIconHome = window.document.querySelector("img#home");
const buttonIconAddWord = window.document.querySelector("img#addWord");
const buttonIconModifyWord = window.document.querySelector("img#modifyWord");
const buttonIconDeleteWord = window.document.querySelector("img#deleteWord");

/* 
    Action functions to change the screen slowly for
    each panel 
    
    Funções de ação de mudar a tela lentamente para cada painel
*/
buttonIconHome.addEventListener("click", () => {
    changeVisibleElement({
        element: panelChooseItems,
        classElement: "show-element",
        display: "flex",
        time: HALFASECONDSINMILISECONDS
    });

    changeVisibleElement({
        element: panelAddWord,
        classElement: "hidden-element",
        display: "none",
        time: HALFASECONDSINMILISECONDS
    });

    changeVisibleElement({
        element: panelModifyWord,
        classElement: "hidden-element",
        display: "none",
        time: HALFASECONDSINMILISECONDS
    });

    changeVisibleElement({
        element: panelDeleteWord,
        classElement: "hidden-element",
        display: "none",
        time: HALFASECONDSINMILISECONDS
    });
});

buttonIconAddWord.addEventListener("click", () => {
    changeVisibleElement({
        element: panelChooseItems,
        classElement: "hidden-element",
        display: "none",
        time: HALFASECONDSINMILISECONDS
    });

    changeVisibleElement({
        element: panelAddWord,
        classElement: "show-element",
        display: "flex",
        time: HALFASECONDSINMILISECONDS
    });

    changeVisibleElement({
        element: panelModifyWord,
        classElement: "hidden-element",
        display: "none",
        time: HALFASECONDSINMILISECONDS
    });

    changeVisibleElement({
        element: panelDeleteWord,
        classElement: "hidden-element",
        display: "none",
        time: HALFASECONDSINMILISECONDS
    });
});

buttonIconModifyWord.addEventListener("click", () => {
    changeVisibleElement({
        element: panelChooseItems,
        classElement: "hidden-element",
        display: "none",
        time: HALFASECONDSINMILISECONDS
    });

    changeVisibleElement({
        element: panelAddWord,
        classElement: "hidden-element",
        display: "none",
        time: HALFASECONDSINMILISECONDS
    });

    changeVisibleElement({
        element: panelModifyWord,
        classElement: "show-element",
        display: "flex",
        time: HALFASECONDSINMILISECONDS
    });

    changeVisibleElement({
        element: panelDeleteWord,
        classElement: "hidden-element",
        display: "none",
        time: HALFASECONDSINMILISECONDS
    });
});

buttonIconDeleteWord.addEventListener("click", () => {
    changeVisibleElement({
        element: panelChooseItems,
        classElement: "hidden-element",
        display: "none",
        time: HALFASECONDSINMILISECONDS
    });

    changeVisibleElement({
        element: panelAddWord,
        classElement: "hidden-element",
        display: "none",
        time: HALFASECONDSINMILISECONDS
    });

    changeVisibleElement({
        element: panelModifyWord,
        classElement: "hidden-element",
        display: "none",
        time: HALFASECONDSINMILISECONDS
    });

    changeVisibleElement({
        element: panelDeleteWord,
        classElement: "show-element",
        display: "flex",
        time: HALFASECONDSINMILISECONDS
    });
});