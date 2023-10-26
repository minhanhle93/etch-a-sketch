const board = document.getElementById("board");
const boardReset = document.getElementById("reset");
const container = document.getElementById("container");
const newBoardSize = document.getElementById("changeBoardSize");
const colorMode = document.getElementById("color");
const blackMode = document.getElementById("black");
let boardSize = 16;
let changeMode = 0;

function createBoard(boardSize) {
    board.innerHTML = '';

    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `${board.clientWidth / boardSize}px`;
            square.style.height = `${board.clientHeight / boardSize}px`;
            board.appendChild(square);
        }
    }
}

function setSquareColor(square) {
    if (changeMode === 0) {
        square.style.backgroundColor = "black";
    } else {
        square.style.backgroundColor = randomColor();
    }
}

board.addEventListener("mouseover", function (e) {
    if (e.target.matches(".square")) {
        setSquareColor(e.target);
    }
});

blackMode.addEventListener("click", () => {
    changeMode = 0;
});

colorMode.addEventListener("click", () => {
    changeMode = 1;
});

boardReset.addEventListener("click", () => {
    createBoard(boardSize);
});

newBoardSize.addEventListener("click", () => {
    const newSize = parseInt(prompt("Enter a value between 10-100"));
    if (newSize >= 10 && newSize <= 100) {
        boardSize = newSize;
        createBoard(boardSize);
    } else {
        alert("Invalid input, try again");
    }
});

function randomColor() {
    const red = Math.floor(Math.random() * 256); 
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}

createBoard(boardSize);