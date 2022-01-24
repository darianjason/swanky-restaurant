const createSection = classNames => {
    const section = document.createElement("div");
    section.classList.add("section", classNames);

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

export {
    createSection,
    createText,
    createImage
};