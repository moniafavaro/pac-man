const cells = []
const game = document.querySelector('.game')
const width = 40
const gridCellCount = width * width

function creatGrid() {
    for(let i = 0; i < gridCellCount; i++) {
        const cell = document.createElement('div')
        cell.setAttribute('data-index', 1)
        cells.push(cell)
        game.appendChild(cell)
    }
}

creatGrid()
