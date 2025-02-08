const canvas = document.querySelector("#canvas");

const squares = [];

for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    square.addEventListener("mouseover", (e) => {
        square.classList.add("filled")
    });
    squares.push(square);
}

squares.forEach((square) => {
    canvas.appendChild(square);
});