import './style.css';
import boardScores from './modules/boardScores.js';

const showScores = document.getElementById('scores');

const displayBoard = () => {
  boardScores.forEach((myScore) => {
    const scoreList = document.createElement('li');
    scoreList.innerHTML = `${myScore.name}: ${myScore.score}`;
    showScores.appendChild(scoreList);
  });
};
displayBoard();