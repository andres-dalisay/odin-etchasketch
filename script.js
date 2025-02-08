const DEFAULT_SQUARES = 16;
const CANVAS_SIZE = 720;
const canvas = document.querySelector("#canvas");
const rgbToggle = document.querySelector("#rgb-toggle");
const pdToggle = document.querySelector("#darkening-toggle");

function randomRGBValue() {
    return Math.floor(Math.random() * 256);
}

function renderGrid(squaresPerSide) {
    const squaresAmt = squaresPerSide * squaresPerSide;
    const sizePerSquare = CANVAS_SIZE / squaresPerSide;

    canvas.replaceChildren();
    for (let i = 0; i < squaresAmt; i++) {
        const square = document.createElement("div");
        square.setAttribute("class", "square");
        square.style.height = sizePerSquare + "px";
        square.style.width = sizePerSquare + "px";
        square.addEventListener("mouseover", (e) => {
            if (!square.classList.contains("filled")){
                if (rgbToggle.checked){
                    square.style.backgroundColor = "rgb(" + randomRGBValue() + "," + randomRGBValue() + "," + randomRGBValue() + ")";
                }
                square.classList.add("filled");
                if (pdToggle.checked) {
                    square.style.opacity = 0.1;
                }
                
            } else {
                if (parseFloat(getComputedStyle(square).opacity) < 1 && pdToggle.checked) {
                    square.style.opacity = parseFloat(getComputedStyle(square).opacity) + 0.1;
                } else if (!pdToggle.checked) {
                    square.style.opacity = 1;
                }
            }
        });
        canvas.appendChild(square);
    }
}

const editSquaresBtn = document.querySelector("#edit-squares-btn");
editSquaresBtn.addEventListener("click", (e) => {
    const squareAmt = prompt("Enter number of squares per side");
    renderGrid(squareAmt);
});


canvas.style.width = CANVAS_SIZE + "px";

renderGrid(DEFAULT_SQUARES);