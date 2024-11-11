Tic-Tac-Toe Game
This is a simple web-based Tic-Tac-Toe game built using JavaScript, HTML, and CSS. The game allows two players to take turns as "X" and "O" on a 3x3 grid, with the objective of aligning three of their symbols in a row, column, or diagonal.

Features:
(i) Two-player gameplay: Players alternate turns as "X" and "O".
(ii) Win detection: Checks for winning combinations after each move and announces the winner.
(iii) Draw detection: Detects if the game ends in a tie.
(iv) Reset option: Players can reset the board to play a new game.

   How to Play ->
1. Clone the repository and open the HTML file in a browser.
2. Players take turns clicking on the cells.
3. The game will declare a winner if a player aligns three symbols, or announce a draw if all cells are filled without a winner.
4. Click the reset button to start a new game.
   
  Code Overview and Functions used:
◙ cellClicked(index): Updates the board based on the current player's move and checks for a win or draw.
◙ checkWinner(): Checks if the current player has achieved a winning combination.
◙ resetGame(): Resets the board and the game state for a new match.
◙ disableCells() and enableCells(): Controls cell interactivity during the game.
