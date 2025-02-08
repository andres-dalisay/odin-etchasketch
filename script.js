console.log("Hello World");

const canvas = document.querySelector("#canvas");

const squares = [];

for (let i = 0; i < 16; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    squares.push(square);
}

console.log(squares);

squares.forEach((square) => {
    canvas.appendChild(square);
});