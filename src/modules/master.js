import * as domUtil from './utils/domUtil';

const loadPage = () => {
    const content = document.getElementById("content");

    loadHeader(content);
};

const loadHeader = content => {
    const header = document.createElement("header");

    const h1 = domUtil.createText("h1", "SWANKY");

    const nav = document.createElement("nav");

    const ul = document.createElement("ul");

    const navItems = ["Home", "Menu", "Contact"];

    navItems.forEach(item => {
        const li = domUtil.createText("li", item);
        li.classList.add("nav-item");

        ul.append(li);
    });

    nav.append(ul);
    header.append(h1, nav);
    content.append(header);
};

export default loadPage;