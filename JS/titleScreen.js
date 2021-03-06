const startGameBtn = document.getElementById('startGameBtn');
const continueGameBtn = document.getElementById('continueGameBtn');
const gameInfoBtn = document.getElementById('gameInfoBtn');
let savedInfo = {};
const titleScreenAudio = document.getElementById('titleScreenAudio');
menuSound = new Audio();
menuSound.src = 'Audio/beep.wav';

/*
Start new game button sends user to level 1. If user has a save file already, prompts if they want to delete it to start a new game.
*/
startGameBtn.addEventListener('click', function() {
    menuSound.play();
    if(localStorage.getItem('playerInfo') != null) { 
        if(window.confirm('You have save data for this game, if you start a new game your previous save file will be deleted. Are you sure you want to delete your save file and start a new game?')) {
        localStorage.clear();
        location.href = './intro.html';
        }
    } else {
    location.href = './intro.html';
    }
});

/*
Continue game button accesses saved player info if it is present in local storage, sets player object values to match saved info and sends user to correct level
*/
continueGameBtn.addEventListener('click', function() {
    menuSound.play();
if(localStorage.getItem('playerInfo') != null) { 
    savedInfo = JSON.parse(localStorage.getItem('playerInfo'));
    if(savedInfo.gameLevel === 1) {
        location.href = './landingSite.html';
    } else if(savedInfo.gameLevel === 2) {
        location.href = './colonyDelta.html';
    } else if(savedInfo.gameLevel === 3) {
        alert('The level you have reached is not yet available. Please start a new game or come back when the game is finished to continue.');
    }
} else {
    alert('No save data found, please start a new game.');
}
});

document.addEventListener('mousemove', function() {
    titleScreenAudio.play();
});

document.addEventListener('keydown', function() {
    titleScreenAudio.play();
});

gameInfoBtn.addEventListener('click', function() {
    menuSound.play();
});
