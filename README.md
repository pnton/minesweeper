To play Minesweeper, create instances of the Minesweeper game in the command line.
For example:
In the command line, navigate to the lib directory and run `node`.
Run `.load game.js` to load a game of Minesweeper.
Then create a Game instance and run commands like so:
let game = new Game(3, 3, 3);
game.playMove(0, 1);
game.playMove(1, 2);
When done run `.exit`.