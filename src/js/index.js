// hero
const hero = {
    top: 700,
    left: 500
}

// move hero
document.onkeydown = function(e) {
    if (e.keyCode === 37) {
        console.log('left')
        // want to move it from wherever it is
        hero.left = hero.left - 10;
        moveHero('left')
    }
    if (e.keyCode === 39) {
        console.log('right')
        hero.left = hero.left + 10;
        moveHero('right')
    }
}

const moveHero = (args) => {
    if (args === 'left'){
        document.getElementById('hero').style.left = hero.left + 'px';
    } else if (args === 'right') {
        document.getElementById('hero').style.left = hero.left + 'px';
        console.log(args)
    }
    
}
moveHero();