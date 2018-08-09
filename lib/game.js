'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _board = require('./board');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game(numberOfRows, numberOfColumns, numberOfBombs) {
    _classCallCheck(this, Game);

    // Creates an instance of a Board
    this._board = new _board.Board(numberOfRows, numberOfColumns, numberOfBombs);
  }

  // Includes all of the functionality needed to play a session of Minesweeper


  _createClass(Game, [{
    key: 'playMove',
    value: function playMove(rowIndex, columnIndex) {
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
  }]);

  return Game;
}();