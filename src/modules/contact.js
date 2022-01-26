import * as domUtil from './utils/domUtil';

import '../stylesheets/contact.css'

const loadContact = () => {
    const content = document.getElementById("content");

    const contact = document.createElement("div");
    contact.id = "contact";

    const title = domUtil.createText("h2", "Contact Us");

    contact.append(title);

    const contactItems = [
        {
            iconName: "smartphone",
            content: "+1-123-456-7890",
            href: "tel:+11234567890"
        },
        {
            iconName: "email",
            content: "info@swankyrestaurant.com",
            href: "mailto:info@swankyrestaurant.com"
        }
    ]

    contactItems.forEach(item => {
        const contactItem = createContactItem(item.iconName, item.content, item.href);

        contact.append(contactItem);
    });

    content.append(contact);
};

const createContactItem = (iconName, content, href) => {
    const item = document.createElement("div");
    item.classList.add("contact-item");

    const icon = domUtil.createText("span", iconName);
    icon.classList.add("material-icons");
    
    const info = domUtil.createText("a", content);
    info.setAttribute("href", href);

    item.append(icon, info);

    return item;
};

export default loadContact;