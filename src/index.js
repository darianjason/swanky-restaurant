import { emptyContent } from './modules/utils/domUtil';

import './stylesheets/reset.css';
import './stylesheets/main.css';

import loadPage from './modules/master';
import loadHome from './modules/home';
import loadMenu from './modules/menu';
import loadContact from './modules/contact';

loadPage();
loadHome();

let currentSection = "Home";

const navItems = Array.from(document.getElementsByClassName("nav-item"));

navItems.forEach(item => {
    item.addEventListener("click", e => {
        if (item.textContent === currentSection) 
            return;

        emptyContent("content");
        
        currentSection = item.textContent;

        if (item.textContent === "Home")
            loadHome();

        if (item.textContent === "Menu")
            loadMenu();

        if (item.textContent === "Contact")
            loadContact();
    });
});