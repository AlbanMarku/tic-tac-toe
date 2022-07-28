const board = (() => {
    let boardArray = ["","","","","","","","",""];

    function setCell(index, sign) {
        boardArray[index] = sign;
    }

    function getCell(index) {
        return boardArray[index]
    }

    const reset = () => {
        for (let i = 0; i < boardArray.length; i++) {
          boardArray[i] = "";
        }
      };

    return {setCell, getCell, reset, boardArray}
})();

const displayControl = (() => {
    const gameboard = document.querySelector(".gameboard");
    const cell = document.querySelectorAll("[data-index]");
    const restartBtn = document.querySelector("#restartBtn");

    cell.forEach(element => {
        let chosenCell = element.dataset.index;
        element.addEventListener("click", () => {
            if(gameFlow.checkIsValid(chosenCell)) {
                element.textContent = gameFlow.getTurn();
            }
        });
    });

    restartBtn.addEventListener("click", () => {
        reset();
        board.reset();
    });

    function reset() {
        cell.forEach(element => {
            element.textContent = "";
        });
    }

})();

const gameFlow = (() => {
    let playerTurn = "x";

    function checkIsValid(index) {
        if(board.getCell(index) === "") {
            board.setCell(index, playerTurn);
            return true
        } else {
            return false
        }
    }

    function swapTurn() {
        if (playerTurn === "x") {
            playerTurn = "o";
        } else {
            playerTurn = "x";
        }
    }

    function getTurn() {
        if (playerTurn === "x") {
            swapTurn();
            return "x"
        } else {
            swapTurn();
            return "o"
        }
    }

    return {checkIsValid, getTurn}

})();