const canvas = document.querySelector("#canvas");
const DEFAULT_SQUARES = 16;
const CANVAS_SIZE = 720;

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
            square.classList.add("filled")
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