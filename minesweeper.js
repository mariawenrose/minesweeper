document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells : [
    {
      row: 0,
      col: 0,
      isMine: false,
      isMarked: false,
      hidden: true,
    },
    {
      row: 0,
      col: 1,
      isMine: false,
      isMarked: false,
      hidden: true,
    },
    {
      row: 0,
      col: 2,
      isMine: true,
      isMarked: false,
      hidden: true,
    },
    {
      row: 0,
      col: 3,
      isMine: false,
      isMarked: false,
      hidden: true,
    },
    {
      row: 1,
      col: 0,
      isMine: true,
      isMarked: false,
      hidden: true,
    },
    {
      row: 1,
      col: 1,
      isMine: false,
      isMarked: false,
      hidden: true,
    },
    {
      row: 1,
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true,
    },
    {
      row: 1,
      col: 3,
      isMine: true,
      isMarked: false,
      hidden: true,
    },
    {
      row: 2,
      col: 0,
      isMine: false,
      isMarked: false,
      hidden: true,
    },
    {
      row: 2,
      col: 1,
      isMine: false,
      isMarked: false,
      hidden: true,
    },
    {
      row: 2,
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true,
    },
    {
      row: 2,
      col: 3,
      isMine: false,
      isMarked: false,
      hidden: true,
    },
    {
      row: 3,
      col: 0,
      isMine: true,
      isMarked: false,
      hidden: true,
    },
    {
      row: 3,
      col: 1,
      isMine: false,
      isMarked: false,
      hidden: true,
    },
    {
      row: 3,
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true,
    },
    {
      row: 3,
      col: 3,
      isMine: false,
      isMarked: false,
      hidden: true,
    },

    ]

}


function startGame () {

  for (var i = 0; i < board.cells.length; i++ ) {
    console.log(board.cells[i])
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);

  }
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?



document.addEventListener("contextmenu", checkForWin)

function checkForWin () {
var hasWon = true;

  for (var i = 0; i < board.cells.length; i++ ) {
    if(board.cells[i].isMine && board.cells[i].isMarked == false) {
      hasWon = false;
    }
  }
  if (hasWon) {
    lib.displayMessage('You win!')
  }
}



// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 

function countSurroundingMines (cell) {
  var surroundingCells = lib.getSurroundingCells(cell.row, cell.col)
  var count = 0;

  for (i = 0; i < surroundingCells.length; i++) {
    if (surroundingCells[i].isMine == true) {
      count += 1
    }
  }
return count;
}


