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
    const navBarListItems = ["home", "restaurant_menu", "info"];

    navBarListItems.forEach(item => {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.classList.add("material-icons");
        span.textContent = item;

        li.append(span);
        ul.append(li);
    });

    nav.append(ul);
    header.append(h1, nav);
    content.append(header);
};

export default loadPage;