const cells = []
const game = document.querySelector('.game')
const width = 21
const gridCellCount = width * width
const playerStartPosition = 325
const enemyStartPosition = 241
let playerIndex = 0
let enemyIndex = 0
let life = 3
let score = 0
let highScore = 0

const MOVE_UP = -21
const MOVE_RIGHT = 1
const MOVE_DOWN = 21
const MOVE_LEFT = -1

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
    [0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0],
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
    let movements = [MOVE_UP, MOVE_RIGHT, MOVE_DOWN, MOVE_LEFT]

    function playerStart() {
        let player = document.getElementById('sqm-' + playerStartPosition)
        player.classList.add('sqm-player')
        playerIndex = playerStartPosition
    }

    const arrowUp = () => {
        let isPlayer = true
        const playerOnTop = (index) => index < 20
        tryMove(playerIndex, MOVE_UP, playerOnTop, isPlayer)
    }
    
    const arrowRight = () => {
        let isPlayer = true
        const playerOnRight = (index) => (index +1) % 21 ===     0
        tryMove(playerIndex, MOVE_RIGHT, playerOnRight, isPlayer)
    }
    
    const arrowDown = () => {
        let isPlayer = true
        const playerDown = (index) => index > 419
        tryMove(playerIndex, MOVE_DOWN, playerDown, isPlayer)
    }
    
    const arrowLeft = () => {
        let isPlayer = true
        const playerOnLeft = (index) => index % 21 === 0
        tryMove(playerIndex, MOVE_LEFT, playerOnLeft, isPlayer)
    }
    
    const tryMove = (currentIndex, changeIndex, indexAtLimit, isPlayer) => {
        const newIndex = currentIndex + changeIndex
        if (cannotMove(currentIndex, newIndex, indexAtLimit)) {
            return false
        }
        move(currentIndex, newIndex, isPlayer)
        return true
    }
    
    function cannotMove(currentIndex, newIndex, indexAtLimit) {
        if (indexAtLimit(currentIndex)) {
            return true
        }

        let element = document.getElementById('sqm-' + newIndex)
        if (element.classList.contains('sqm-disabled')) {
            return true
        }
        return false
    }
    
    function move(currentIndex, newIndex, isPlayer) {
        if (isPlayer) {
            cells[currentIndex].classList.remove('sqm-player')
            cells[newIndex].classList.add('sqm-player')
            cells[newIndex].classList.remove('sqm-food')
            playerIndex = newIndex
        } else {
            cells[currentIndex].classList.remove('sqm-enemy')
            cells[currentIndex].classList.add('sqm-food')
            cells[newIndex].classList.add('sqm-enemy')
            cells[newIndex].classList.remove('sqm-food')
            enemyIndex = newIndex
        }
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
        enemyIndex = enemyStartPosition
    }

    function enemyMove() {
        if (movements.length === 0) {
            movements = [MOVE_UP, MOVE_RIGHT, MOVE_DOWN, MOVE_LEFT]
        }

        let randomMovement = movements[Math.floor(Math.random() * movements.length)]
        
        let isPlayer = false
        const alwaysFalse = (index) => index !== index
        let moved = tryMove(enemyIndex, randomMovement, alwaysFalse, isPlayer)
        if (!moved) {
            const index = movements.indexOf(randomMovement)
            if (index >= 0) {
                movements.splice(index, 1)
            }
        } else {
            let oldPosition = 0
            switch(randomMovement) {
                case MOVE_UP:
                    oldPosition = MOVE_DOWN
                    break
                case MOVE_RIGHT:
                    oldPosition = MOVE_LEFT
                    break
                case MOVE_DOWN:
                    oldPosition = MOVE_UP
                    break
                case MOVE_LEFT:
                    oldPosition = MOVE_RIGHT
                    break
            }
            movements = [MOVE_UP, MOVE_RIGHT, MOVE_DOWN, MOVE_LEFT]
            const index = movements.indexOf(oldPosition)
            if (index >= 0) {
                movements.splice(index, 1)
            }
        }
    }

    function foodStart() {
        for(let i = 0; i < gridCellCount; i++) {
            let sqm = document.getElementById('sqm-' + i)
            if (sqm.classList.contains('sqm-enabled') && !sqm.classList.contains('sqm-player') && !sqm.classList.contains('sqm-enemy')) {
                sqm.classList.add('sqm-food')
            }
        }
    }

    playerStart()
    enemyStart()
    foodStart()

    setInterval(enemyMove, 400)
}


creatGrid()
createLevel()
document.getElementById('start-button').addEventListener('click', play)