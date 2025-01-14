const canvas = document.querySelector(".canvas");
const inputSize = document.querySelector(".input-size");
const inputColor = document.querySelector(".input-color");
const usedColors = document.querySelector(".used-color");
const buttonSave = document.querySelector(".button-save");
const colResize = document.querySelector(".resize");
const main = document.querySelector("main");

const createElement = (tag, className = "") => {
    const element = document.createElement(tag);
    element.className = className;
    return element;

};

const createPixel = () => {
    const pixel = createElement("div", "pixel");
    return pixel;
};

const loadCanvas = () => {
    const length = inputSize.value;

    for (let i = 0; i < length; i += 1) {
        const row = createElement("div", "row");

        for (let j = 0; j < length; j += 1) {
            row.append(createPixel())
        }

        canvas.append(row)
    }
}

loadCanvas();