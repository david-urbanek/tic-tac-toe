const GameBoard = function () {
  let gameBoard = [];

  const fillGameBoard = function () {
    for (let i = 0; i < 9; i++) {
      gameBoard.push("-");
    }
  };

  const showGameBoard = function () {
    let index = 0;

    for (let row = 0; row < 3; row++) {
      let rowString = "";
      for (let column = 0; column < 3; column++) {
        rowString += `${gameBoard[index]} `;
        index += 1;
      }
      console.log(rowString);
    }
  };

  return { gameBoard, showGameBoard, fillGameBoard };
};

const Player = function (name) {};

const Game = function () {
  let newGameBoard = GameBoard();

  let player = "";
  let marker = "";
  let userPlacement;

  const gameLogic = function () {
    newGameBoard.fillGameBoard();

    for (let turn = 0; turn < newGameBoard.gameBoard.length; turn++) {
      if (turn % 2 == 1 || turn == 1) {
        userPlacement = prompt(`where do you wanna place our mark Player 1`);
        marker = "X";
      } else {
        userPlacement = prompt(`where do you wanna place our mark Player 2`);
        marker = "O";
      }

      newGameBoard.gameBoard[userPlacement] = marker;
      newGameBoard.showGameBoard();
    }
  };

  gameLogic();
};

let game = Game();