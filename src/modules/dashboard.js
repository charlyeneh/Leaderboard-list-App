import { getScores } from './API_call.js';

const display = () => {
  getScores().then((scores) => {
    const showScores = document.getElementById('scores');
    showScores.innerHTML = '';
    scores.result.forEach((el) => {
      const html = `<li>${el.user}: ${el.score}</li>`;
      showScores.insertAdjacentHTML('beforeend', html);
    });
    return scores;
  });
};

export default display;