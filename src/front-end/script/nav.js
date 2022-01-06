const itemsNav = [
    {
        id: "01",
        name: "addWord",
        src: "assets/icon-plus.svg",
        alt: "icon plus"
    },
    {
        id: "02",
        name: "modifyWord",
        src: "assets/icon-change.svg",
        alt: "icon change"
    },
    {
        id: "03",
        name: "deleteWord",
        src: "assets/icon-delete.svg",
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

listItemsNav.innerHTML = todayElements