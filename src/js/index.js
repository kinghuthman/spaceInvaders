// hero
const hero = {
    top: 700,
    left: 550
}
// stores the position of the missile starting from where the hero is, using an object
let missiles = [];

let enemies = [
    { top: 100, left: 200},
    { top: 100, left: 300},
    { top: 100, left: 400},
    { top: 100, left: 500},
    { top: 100, left: 600},
    { top: 100, left: 700},
    { top: 100, left: 800},
    { top: 100, left: 900},
    { top: 175, left: 200},
    { top: 175, left: 300},
    { top: 175, left: 400},
    { top: 175, left: 500},
    { top: 175, left: 600},
    { top: 175, left: 700},
    { top: 175, left: 800},
    { top: 175, left: 900}
];
// move hero
document.onkeydown = function(e) {
    if (e.keyCode === 37) {
        
        // want to move it from wherever it is
        hero.left = hero.left - 10;
        moveHero('left')
    } else if (e.keyCode === 39) {
        
        hero.left = hero.left + 10;
        moveHero('right')
    } else if (e.keyCode === 32) {
        console.log('pew pew');
        // first missile that is fired, position is added to array
        missiles.push({
            left: hero.left + 20,
            top: hero.top - 15
        })
        drawMissiles();
    }
}

const moveHero = (args) => {
    if (args === 'left'){
        document.getElementById('hero').style.left = hero.left + 'px';
    } else if (args === 'right') {
        document.getElementById('hero').style.left = hero.left + 'px';
        
    }
}
const drawMissiles = () => {
    document.querySelector('#missiles').innerHTML = "";
    // loops through array of fired missiles
    for (let missile = 0; missile < missiles.length; missile = missile + 1){
        /* for every missile, a missile element will be added to the missles element with the position based off of where the hero was */ 
        document.querySelector('#missiles').innerHTML += `<div class='missile' style='left:${missiles[missile].left}px; top:${missiles[missile].top}px;'></div>`;  
    }
}

const moveMissiles = () => {
    for (let i = 0; i < missiles.length; i++){
        missiles[i].top -= 5;
    }
}

const drawEnemies = () => {
    document.querySelector('#enemies').innerHTML = "";
    // loops through array of fired missiles
    for (let enemy = 0; enemy < enemies.length; enemy++){
        /* for every missile, a missile element will be added to the missles element with the position based off of where the hero was */ 
        document.querySelector('#enemies').innerHTML += `<div class='enemy' style='left:${enemies[enemy].left}px; top:${enemies[enemy].top}px;'></div>`;  
    }
}

const moveEnemies = () => {
    for (let i = 0; i < enemies.length; i++){
        enemies[i].top += 2;
    }
}

const collisionDetection = () => {
    // 
    for (let enemy = 0; enemy < enemies.length; enemy++){
       for (let missile = 0; missile < missiles.length; missile++){
        // top of the enemy plus its height to see if the missile has breached the enemy
        if ((missiles[missile].top <= enemies[enemy].top + 50) && (missiles[missile].top > enemies[enemy].top) &&
        (missiles[missile].left >= enemies[enemy].left) &&
        (missiles[missile].left <= enemies[enemy].left + 50)
        ){
            enemies.splice(enemy, 1)
            missiles.splice(missiles, 1)
            console.log("move bitch")
        } 
        
       }
    }
}

const gameLoop = () => {
    
    setTimeout(gameLoop , 50)
    moveMissiles();
    // redraw the location of the missiles
    drawMissiles();
    moveEnemies();
    drawEnemies();
    collisionDetection();
    
}

// move hero up and down
// move enemies left right as they move down
// keep score
// use different missiles
// enemies hitpoints

gameLoop()