const randomNum = () => Math.round(Math.random() * 100);
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setScore = function (scr) {
  document.querySelector('.score').textContent = scr;
};

const setHighScore = function (scr) {
  document.querySelector('.highscore').textContent = scr;
};

let score = 20;
let highScore = 0;
let num = randomNum();
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess && guess !== 0) {
    displayMessage('Please enter a number');
  } else if (guess === 0) {
    displayMessage('Only a number between 1 and 100 is allowed!');
  } else if (guess === num) {
    displayMessage('Correct Number!');
    if (highScore < score) {
      highScore = score;
      setHighScore(highScore);
    }
  } else if (guess !== num) {
    displayMessage(guess > num ? 'That is Too High!' : 'That is Too Low!');
    if (score > 0) {
      score--;
      setScore(score);
    } else {
      displayMessage('You have lost the game!');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  setScore(score);
  num = randomNum();
  displayMessage('Start Guessing...');
});
