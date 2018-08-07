const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  const board = [];

  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    const row = [];
    for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      // Adds columns to one row
      row.push(' ');
    }
    // Adds rows to the board
    board.push(row);
  }
  return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  const board = [];

  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    const row = [];
    for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      row.push(null);
    }
    board.push(row);
  }

  let numberOfBombsPlaced = 0;

  // Adds bombs randomly to the board
  while (numberOfBombsPlaced < numberOfBombs) {
    const randomRowIndex = Math.floor(Math.random() * numberOfRows);
    const randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    if (board[randomRowIndex][randomColumnIndex] !== 'B') {
      board[randomRowIndex][randomColumnIndex] = 'B';
      numberOfBombsPlaced++;
    }
  }

  return board;
};

const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
  // Array of possible neighbors
  const neighborOffsets = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
  ];
  const numberOfRows = bombBoard.length;
  const numberOfColumns = bombBoard[0].length;

  let numberOfBombs = 0;

  // Number of adjacent bombs
  neighborOffsets.forEach(offset => {
    const neighborRowIndex = rowIndex + offset[0];
    const neighborColumnIndex = columnIndex + offset[1];
    if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows &&
        neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
      if (bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
        numberOfBombs++;
      }
    }
  });
  return numberOfBombs;
};

// Allows the player to flip a tile to update that tile accordingly
const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {
  // Checks if tile already has a number
  if (playerBoard[rowIndex][columnIndex] !== ' ') {
    console.log('Already flipped that tile!');
    return;
  } else if (bombBoard[rowIndex][columnIndex] === 'B') {
    // Checks if tile has a bomb
    playerBoard[rowIndex][columnIndex] = 'B';
  } else {
    // Flip tile and assign it number based on number of neighboring bombs
    playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);
  }
};

const printBoard = board => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

let playerBoard = generatePlayerBoard(3, 3);
let bombBoard = generateBombBoard(3, 3, 3);
printBoard(playerBoard);
printBoard(bombBoard);
flipTile(playerBoard, bombBoard, 0, 0); // Flip different tiles based on bombBoard to see if neighbors work.
console.log('Updated Player Board:\n');
printBoard(playerBoard);
