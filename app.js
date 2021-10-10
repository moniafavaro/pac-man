const cells = []
const game = document.querySelector('.game')
const width = 21
const gridCellCount = width * width
const playerStartPosition = 325
const enemyStartPosition = 241
let playerIndex = 0

const level = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0],
    [0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0],
    [0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0],
    [0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

function creatGrid() {
    for(let i = 0; i < gridCellCount; i++) {
        const cell = document.createElement('div')
        //cell.setAttribute('data-index', 1)
        cell.setAttribute('id', 'sqm-' + i)
        cells.push(cell)
        game.appendChild(cell)
    }
}

function createLevel() {
    let index = 0
    for (let i = 0; i < level.length; i++) {
        let row = level[i]
        for (let j = 0; j < row.length; j++) {
            let style = 'sqm-enabled'
            if (row[j] === 0) {
                style = 'sqm-disabled'
            }
            let sqm = document.getElementById('sqm-' + index)
            sqm.classList.add(style)
            index++
        }
    }
}

function play() {
    function playerStart() {
        let player = document.getElementById('sqm-' + playerStartPosition)
        player.classList.add('sqm-player')
        playerIndex = playerStartPosition
    }

    const arrowUp = () => {
        const playerOnTop = (playerIndex) => playerIndex < 20
        tryMove(-21, playerOnTop)
    }
    
    const arrowRight = () => {
        const playerOnRight = (playerIndex) => (playerIndex +1) % 21 === 0
        tryMove(1, playerOnRight)
    }
    
    const arrowDown = () => {
        const playerDown = (playerIndex) => playerIndex > 419
        tryMove(21, playerDown)
    }
    
    const arrowLeft = () => {
        const playerOnLeft = (playerIndex) => playerIndex % 21 === 0
        tryMove(-1, playerOnLeft)
    }
    
    const tryMove = (changeIndex, indexAtLimit) => {
        const newIndex = playerIndex + changeIndex
        if (cannotMove(newIndex, indexAtLimit)) {
            return
        }
        move(newIndex)
    }
    
    function cannotMove(newIndex, indexAtLimit) {
        if (indexAtLimit(playerIndex)) {
            return true
        }

        let player = document.getElementById('sqm-' + newIndex)
        if (player.classList.contains('sqm-disabled')) {
            return true
        }
        return false
    }
    
    function move(newIndex) {
        cells[playerIndex].classList.remove('sqm-player')
        cells[newIndex].classList.add('sqm-player')
        playerIndex = newIndex
    }
    
    document.addEventListener('keydown', function (event) {
        switch (event.key) {
            case 'ArrowUp':
                arrowUp()
                break
            case 'ArrowRight':
                arrowRight()
                break
            case 'ArrowDown':
                arrowDown()
                break
            case 'ArrowLeft':
                arrowLeft()
                break
        }
    })

    // enemy functions
    function enemyStart() {
        let enemy = document.getElementById('sqm-' + enemyStartPosition)
        enemy.classList.add('sqm-enemy')
    }

    function enemyMove() {
        console.log('coisa')
    }

    playerStart()
    enemyStart()

    setInterval(enemyMove, 1000)
}


creatGrid()
createLevel()
document.getElementById('start-button').addEventListener('click', play)