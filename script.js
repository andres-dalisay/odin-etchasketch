const canvas = document.querySelector("#canvas");


for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.style.height = "62.5px";
    square.style.width = "62.5px";
    square.setAttribute("class", "square");
    square.addEventListener("mouseover", (e) => {
        square.classList.add("filled")
    });
    canvas.appendChild(square);
}


function rerenderGrid(squaresPerSide) {
    const squaresAmt = squaresPerSide * squaresPerSide;
    const sizePerSquare = Math.round((1000 / squaresPerSide) * 1000) / 1000;

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
    rerenderGrid(squareAmt);
});