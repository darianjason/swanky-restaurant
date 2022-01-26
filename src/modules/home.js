import * as domUtil from './utils/domUtil';

import '../stylesheets/home.css';

import PhotoChef1 from '../assets/images/chef-1.jpg';
import PhotoChef2 from '../assets/images/chef-2.jpg';
import PhotoChef3 from '../assets/images/chef-3.jpg';

const loadHome = () => {
    const content = document.getElementById("content");

    const sectionFineDining = createFineDiningSection();
    const sectionParallax = createParallaxSection();
    const sectionChefs = createChefsSection();

    content.append(sectionFineDining, sectionParallax, sectionChefs);
};

const createFineDiningSection = () => {
    const sectionFineDining = domUtil.createSection();

    const headingFineDining = domUtil.createText("h2", "Redefining fine dining.");
    const descriptionFineDining = domUtil.createText("p", "Lorem ipsum");

    sectionFineDining.append(headingFineDining, descriptionFineDining);

    return sectionFineDining;
};

const createParallaxSection = () => {
    const sectionParallax = domUtil.createSection("parallax");
    sectionParallax.id = "fine-dining";

    return sectionParallax;
};

const createChefsSection = () => {
    const sectionChefs = domUtil.createSection();

    const headingChefs = domUtil.createText("h2", "Home to the best chefs.");

    const chefImages = document.createElement("div");
    chefImages.id = "chef-images";

    const chefImageSources = [PhotoChef1, PhotoChef2, PhotoChef3];

    chefImageSources.forEach(src => {
        const image = domUtil.createImage(src);

        chefImages.append(image);
    });

    const descriptionChefs = domUtil.createText("p", "Lorem ipsum");

    sectionChefs.append(headingChefs, chefImages, descriptionChefs);

    return sectionChefs;
};

export default loadHome;