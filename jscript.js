const board = (() => {
    let boardArray = ["","","","","","","","",""];

    function setCell(index, sign) {
        boardArray[index] = sign;
    }

    function getCell(index) {
        return boardArray[index]
    }

    function reset() {
        for (let index of boardArray) {
            boardArray[index] = "";
        }
    }

    return {setCell, getCell, reset}
})();

const displayControl = (() => {
    const gameboard = document.querySelector(".gameboard");
    const cell = document.querySelectorAll("[data-index]");

    cell.forEach(element => {
        let chosenCell = element.dataset.index;
        element.addEventListener("click", () => {
            if(gameFlow.checkIsValid(chosenCell)) {
                element.textContent = gameFlow.getTurn();
            }
        });
    });

    return {
        
    }
})();

const gameFlow = (() => {
    let playerTurn = true;

    function checkIsValid(index) {
        if(board.getCell(index) === "") {
            board.setCell(index, playerTurn);
            return true
        } else {
            return false
        }
    }

    function swapTurn() {
        playerTurn = !playerTurn;
    }

    function getTurn() {
        if (playerTurn) {
            swapTurn();
            return "x"
        } else {
            swapTurn();
            return "o"
        }
    }

    return {checkIsValid, getTurn}

})();