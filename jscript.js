const displayControl = (() => {
    const gameboard = document.querySelector(".gameboard");
    const cell = document.querySelectorAll("[data-index]");

    cell.forEach(element => {
        element.addEventListener("click", () => {
            
        });
    });

    return {
        
    }
})();

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