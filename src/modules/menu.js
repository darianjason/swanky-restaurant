import * as domUtil from './utils/domUtil';

import '../stylesheets/menu.css';

const loadMenu = () => {
    const content = document.getElementById("content");

    const menu = document.createElement("div");
    menu.id = ("menu");

    const title = domUtil.createText("h2", "Menu");

    menu.append(title);

    const items = [
        {
            id: "sushi",
            name: "Sushi Platter",
            description: "Assortment of mouth-watering Japanese sushi rolls"
        },
        {
            id: "pizza",
            name: "Pepperoni Pizza",
            description: "Fresh Italian wood-fired pizza"
        },
        {
            id: "filet-mignon",
            name: "Filet Mignon",
            description: "Juicy cut of perfectly cooked steak"
        }
    ];

    items.forEach(item => {
        const menuItem = createMenuItem(item.id, item.name, item.description);

        menu.append(menuItem);
    });

    content.append(menu);
};

const createMenuItem = (id, name, description) => {
    const item = document.createElement("div");
    item.id = id;
    item.classList.add("parallax", "item");

    const itemName = domUtil.createText("h3", name);
    itemName.classList.add("name");

    const itemDescription = domUtil.createText("p", description);
    itemDescription.classList.add("description");

    item.append(itemName, itemDescription);

    return item;
};

export default loadMenu;