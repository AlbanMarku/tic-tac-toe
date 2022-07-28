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
                board.setCell(chosenCell, "o");
                element.textContent = "o";
            }
        });
    });

    return {
        
    }
})();

const gameFlow = (() => {
    function checkIsValid(index) {
        if(board.getCell(index) === "") {
            return true
        } else {
            return false
        }
    }

    return {checkIsValid}

})();