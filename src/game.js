import { Board } from './board';

class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    // Creates an instance of a Board
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }

  // Includes all of the functionality needed to play a session of Minesweeper
  playMove(rowIndex, columnIndex) {
    // Flips a specified tile
    this._board.flipTile(rowIndex, columnIndex);
    // If the flipped tile has a bomb, the game is over
    if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
      console.log('Game Over! Final Board:');
      this._board.print();
      // Else, if the board does not have any safe tiles left, the player has won the game
    } else if (!this._board.hasNonBombEmptySpaces()) {
      console.log('Congratulations, you won!');
      // Otherwise, the player should be allowed to continue playing
    } else {
      console.log('Current board:');
      this._board.print();
    }
  }
}