const createSection = classNames => {
    const section = document.createElement("div");

    if (classNames)
        section.classList.add("section", classNames);
    else
        section.classList.add("section");

    return section;
};

const createText = (tag, content) => {
    const element = document.createElement(tag);
    element.textContent = content;

    return element;
};

const createImage = src => {
    const image = new Image();
    image.src = src;

    return image;
};

const emptyContent = id => {
    const div = document.getElementById(id);
    
    while (div.hasChildNodes()) {
        if (div.lastChild.nodeName === "HEADER")
            break;

        div.removeChild(div.lastChild);
    };
};

export {
    createSection,
    createText,
    createImage,
    emptyContent
};