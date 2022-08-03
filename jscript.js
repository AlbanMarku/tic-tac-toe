//TODO: Check if draw.
//Check display ending.

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

    return {setCell, getCell, reset}
})();

const displayControl = (() => {
    const gameboard = document.querySelector(".gameboard");
    const cell = document.querySelectorAll("[data-index]");
    const restartBtn = document.querySelector("#restartBtn");
    const playerDisplay = document.querySelector(".playerArea");
    const turnInfo = document.querySelector("#turnText");
    const winnerArea = document.querySelector(".winnerArea");
    const winnerText = document.querySelector("#winnerText");

    function showTurn() {
        turnInfo.textContent = "";
        turnInfo.textContent = `${gameFlow.getTurn()} turn`;
        playerDisplay.appendChild(turnInfo);
    }

    function displayWinner() {
        winnerText.textContent = `${gameFlow.getTurn()} wins!`;
        winnerArea.appendChild(winnerText);
    }

    cell.forEach(element => {
        let chosenCell = element.dataset.index;
        element.addEventListener("click", () => {
            if(gameFlow.checkIsValid(chosenCell)) {
                element.textContent = gameFlow.getTurn();
                if (gameFlow.checkWinner(chosenCell)) {
                    displayWinner();
                } else {
                    gameFlow.swapTurn();
                    showTurn();
                }

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
        winnerText.textContent = "";
    }

})();

const gameFlow = (() => {
    let playerTurn = "x";

    const winningCombo = {
        0: [[1,2],[3,6],[4,8]],
        1: [[0,2],[4,7]],
        2: [[0,1],[5,8],[4,6]],
        3: [[0,6],[4,5]],
        4: [[2,6],[3,5],[1,7],[0,8]],
        5: [[3,4],[2,8]],
        6: [[7,8],[0,3],[2,4]],
        7: [[6,8],[1,4]],
        8: [[6,7],[2,5],[0,4]]
    }

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
        return playerTurn
    }

    function checkWinner(cell) {
        const selectedRange = winningCombo[cell];

        for (let i = 0; i < selectedRange.length; i++) {
            const currentCell = board.getCell(cell);
            const firstOption = board.getCell(selectedRange[i][0]);
            const secondOption = board.getCell(selectedRange[i][1]);

            if(currentCell === firstOption && firstOption === secondOption) {
                console.log("win");
                return true
            }           
        }
        return false
    }

    return {checkIsValid, getTurn, swapTurn, checkWinner}

})();