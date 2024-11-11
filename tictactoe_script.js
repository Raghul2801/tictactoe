let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function cellClicked(index) {
    if (board[index] === '' && !checkWinner()) {
        board[index] = currentPlayer;
        document.getElementById('cell' + index).innerText = currentPlayer;
        if (checkWinner()) {
            document.getElementById('result').innerText = `Player ${currentPlayer} wins!`;
            disableCells();
        } else if (board.every(cell => cell !== '')) {
            document.getElementById('result').innerText = `It's a tie!`;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWinner() {
    return winningCombos.some(combo => {
        return combo.every(index => board[index] === currentPlayer);
    });
}

function resetGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    document.getElementById('result').innerText = '';
    for (let i = 0; i < 9; i++) {
        document.getElementById('cell' + i).innerText = '';
    }
    enableCells();
}

function disableCells() {
    for (let i = 0; i < 9; i++) {
        document.getElementById('cell' + i).removeAttribute('onclick');
    }
}

function enableCells() {
    for (let i = 0; i < 9; i++) {
        document.getElementById('cell' + i).setAttribute('onclick', 'cellClicked(' + i + ')');
    }
}
