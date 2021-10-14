const cells = []
const game = document.querySelector('.game')
const width = 21
const gridCellCount = width * width
const lifeElement = document.querySelector('.life-span')
const scoreElement = document.querySelector('.score-span')
const highScoreElement = document.querySelector('#highScores')

const MOVE_UP = -21
const MOVE_RIGHT = 1
const MOVE_DOWN = 21
const MOVE_LEFT = -1

const levelConfigs = {
    'level1': {
        'enemyAmount': 3,
        'enemySpeed': 400,
        'playerStartPosition': 325,
        'enemyStartPosition': 199,
        'grid': [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0],
            [0, 0, 1, 0, 1, 1, 1, 0, 2, 0, 1, 0, 2, 0, 1, 0, 2, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 1, 0, 2, 0, 1, 0, 0, 1, 1, 0, 2, 0, 1, 0, 0],
            [0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0],
            [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
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
    },
    'level2': {
        'enemyAmount': 4,
        'enemySpeed': 300,
        'playerStartPosition': 325,
        'enemyStartPosition': 199,
        'grid': [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0],
            [0, 0, 1, 0, 1, 1, 1, 0, 2, 0, 1, 0, 2, 0, 1, 0, 2, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 1, 0, 2, 0, 1, 0, 0, 1, 1, 0, 2, 0, 1, 0, 0],
            [0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0],
            [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
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
    },
    'level3': {
        'enemyAmount': 7,
        'enemySpeed': 150,
        'playerStartPosition': 325,
        'enemyStartPosition': 199,
        'grid': [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0],
            [0, 0, 1, 0, 1, 1, 1, 0, 2, 0, 1, 0, 2, 0, 1, 0, 2, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 1, 0, 2, 0, 1, 0, 0, 1, 1, 0, 2, 0, 1, 0, 0],
            [0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0],
            [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
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
    }
}

function creatGrid() {
    for(let i = 0; i < gridCellCount; i++) {
        const cell = document.createElement('div')
        cell.setAttribute('id', 'sqm-' + i)
        cells.push(cell)
        game.appendChild(cell)
        if ((i >= 0 && i <= 20) || (i >= 420 && i <= 440) || ((i+1) % 21 === 0) || (i % 21 === 0)) {
            cell.classList.add('sqm-disabled')
        } else {
            cell.classList.add('sqm-enabled')
        }
    }

    const voldySmiling = document.getElementById('voldy')
    voldySmiling.style.display = 'block'
    
    document.getElementById('start-button').onclick = function(event) {
        voldySmiling.style.display = 'none'
    }
}

function play() {
    let highScore = localStorage.getItem('highScore')
    let currentLevel = 0
    let maxLevel = 3
    let score = 0
    let life = 3
    let playerIndex = 0
    let enemyIndex = []
    let enemyInterval = 0
    let movements = [MOVE_UP, MOVE_RIGHT, MOVE_DOWN, MOVE_LEFT]

    if (highScore === null) {
        highScore = 0
    }
    highScoreElement.innerHTML = highScore

    function createLevel() {
        let currentLevelConfig = levelConfigs['level' + currentLevel]
        let level = currentLevelConfig['grid']
        let index = 0
        for (let i = 0; i < level.length; i++) {
            let row = level[i]
            for (let j = 0; j < row.length; j++) {
                let sqm = document.getElementById('sqm-' + index)
                sqm.className = ''
                let style = ''
                switch (row[j]) {
                    case 0: 
                        style = 'sqm-disabled'
                        break
                    case 1:
                        style = 'sqm-enabled'
                        break
                    case 2:
                        style = 'sqm-food-disabled'
                        break
                }
                sqm.classList.add(style)
                index++
            }
        }
    }

    function playerStart() {
        document.getElementById('start-button').disabled = true
        
        // to remove player from the grid
        let player = document.getElementById('sqm-' + playerIndex)
        player.classList.remove('sqm-player')

        //to add player in the grid
        let currentLevelConfig = levelConfigs['level' + currentLevel]
        let playerStartPosition = currentLevelConfig['playerStartPosition']
        player = document.getElementById('sqm-' + playerStartPosition)
        player.classList.add('sqm-player')
        playerIndex = playerStartPosition
        scoreElement.innerHTML = score
        lifeElement.innerHTML = life
        document.addEventListener('keydown', keyDown)
    }

    function arrowUp() {
        let isPlayer = true
        const playerOnTop = (index) => index < 20
        tryMove(playerIndex, MOVE_UP, playerOnTop, isPlayer)
    }
    
    function arrowRight() {
        let isPlayer = true
        const playerOnRight = (index) => (index +1) % 21 === 0
        tryMove(playerIndex, MOVE_RIGHT, playerOnRight, isPlayer)
    }
    
    function arrowDown() {
        let isPlayer = true
        const playerDown = (index) => index > 419
        tryMove(playerIndex, MOVE_DOWN, playerDown, isPlayer)
    }
    
    function arrowLeft() {
        let isPlayer = true
        const playerOnLeft = (index) => index % 21 === 0
        tryMove(playerIndex, MOVE_LEFT, playerOnLeft, isPlayer)
    }
    
    function tryMove(currentIndex, changeIndex, indexAtLimit, isPlayer, enemyPosition = 0) {
        const newIndex = currentIndex + changeIndex
        if (cannotMove(currentIndex, newIndex, indexAtLimit)) {
            return false
        }
        move(currentIndex, newIndex, isPlayer, enemyPosition)
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
    
    function move(currentIndex, newIndex, isPlayer, enemyPosition) {
        if (isPlayer) {
            cells[currentIndex].classList.remove('sqm-player')
            cells[newIndex].classList.add('sqm-player')
            if (cells[newIndex].classList.contains('sqm-food')) {
                cells[newIndex].classList.remove('sqm-food')
                score += 5
                scoreElement.innerHTML = score
                if (document.getElementsByClassName('sqm-food').length === 0) {
                    startNewLevel()
                }
            }
            playerIndex = newIndex
        } else {
            cells[currentIndex].classList.remove('sqm-enemy')
            cells[newIndex].classList.add('sqm-enemy')
            enemyIndex[enemyPosition] = newIndex
        }
        gameOver()
    }

    function gameOver() {
        if (currentLevel > maxLevel) {
            return
        }

        let currentLevelConfig = levelConfigs['level' + currentLevel]
        let enemyAmount = currentLevelConfig['enemyAmount']
        let playerStartPosition = currentLevelConfig['playerStartPosition']
        for (let i = 0; i < enemyAmount; i++) {
            if (playerIndex === enemyIndex[i]) {
                life--
                lifeElement.innerHTML = life
                if (life > 0) {
                    cells[playerIndex].classList.remove('sqm-player')
                    let player = document.getElementById('sqm-' + playerStartPosition)
                    player.classList.add('sqm-player')
                    playerIndex = playerStartPosition
                } else {
                    if (score > highScore) {
                        localStorage.setItem('highScore', score)
                        highScoreElement.innerHTML = score
                        highScore = localStorage.getItem('highScore')
                    }
                    const gameOverMessage = document.getElementById('game-over')
                    gameOverMessage.style.display = 'block'
                    const audioNew = new Audio('../other-resources/avada-kedavra.mp3')
                    audioNew.play()
                    stopGame()
                }
                break
            }
        }
    }

    function startNewLevel() {
        stopGame()

        currentLevel++

        if (currentLevel > maxLevel) {
            if (score > highScore) {
                localStorage.setItem('highScore', score)
                highScoreElement.innerHTML = score
                highScore = localStorage.getItem('highScore')
            }
            const gameDone = document.getElementById('game-done')
            gameDone.style.display = 'block'
            return
        }

        if (currentLevel > 0) {
            const gameLevelMessage = document.getElementById('game-message')
            gameLevelMessage.style.display = 'block'
            setTimeout(() => {
                const gameLevelMessage = document.getElementById('game-message')
                gameLevelMessage.style.display = 'none'
            }, 2000);
        }

        createLevel()
        playerStart()
        enemyStart()
        foodStart()
    
        let currentLevelConfig = levelConfigs['level' + currentLevel]
        let enemySpeed = currentLevelConfig['enemySpeed']
        enemyInterval = setInterval(enemyMove, enemySpeed)
    }
    
    function stopGame() {
        clearInterval(enemyInterval)
        document.removeEventListener('keydown', keyDown)
    }

    function keyDown(event) {
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
    }

    // enemy functions
    function enemyStart() {
        //to remove all enemies from grid
        for (let i = 0; i < enemyIndex.length; i++) {
            let enemy = document.getElementById('sqm-' + enemyIndex[i])
            enemy.classList.remove('sqm-enemy')
        }
        enemyIndex = []

        //to add enemies to grid
        let currentLevelConfig = levelConfigs['level' + currentLevel]
        let enemyAmount = currentLevelConfig['enemyAmount']
        let enemyStartPosition = currentLevelConfig['enemyStartPosition']
        for (let i = 0; i < enemyAmount; i++) {
            let enemy = document.getElementById('sqm-' + enemyStartPosition)
            enemy.classList.add('sqm-enemy')
            enemyIndex.push(enemyStartPosition)
        }
    }

    function enemyMove() {
        let currentLevelConfig = levelConfigs['level' + currentLevel]
        let enemyAmount = currentLevelConfig['enemyAmount']
        for (let i = 0; i < enemyAmount; i++) {
            if (movements.length === 0) {
                movements = [MOVE_UP, MOVE_RIGHT, MOVE_DOWN, MOVE_LEFT]
            }
            
            let randomMovement = movements[Math.floor(Math.random() * movements.length)]
            let isPlayer = false
            const alwaysFalse = (index) => index !== index
            let moved = tryMove(enemyIndex[i], randomMovement, alwaysFalse, isPlayer, i)
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
    }

    // food function
    function foodStart() {
        // let randomBonusFood = []
        // let currentLevelConfig = levelConfigs['level' + currentLevel]
        // let bonusFoodAmount = currentLevelConfig['bonusFoodAmount']
        // for (let i = 0; i < bonusFoodAmount; i++) {
        // }

        for(let i = 0; i < gridCellCount; i++) {
            let sqm = document.getElementById('sqm-' + i)
            if (sqm.classList.contains('sqm-enabled') && !sqm.classList.contains('sqm-player') && !sqm.classList.contains('sqm-enemy') && !sqm.classList.contains('sqm-food-disabled')) {
                sqm.classList.add('sqm-food')
            }
        }
    }

    startNewLevel()
}
creatGrid()

document.getElementById('start-button').addEventListener('click', play)
