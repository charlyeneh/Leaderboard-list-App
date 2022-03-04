import { postScores } from './modules/API_call.js';
import display from './modules/dashboard.js';
import './style.css';

const addBtn = document.getElementById('add-btn');
const refresh = document.getElementById('refresh-btn');

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const nameInput = document.getElementById('name').value;
  const scoreInput = document.getElementById('score').value;
  if (nameInput && scoreInput >= 0) {
    postScores(nameInput, scoreInput);
    display();
    document.getElementById('name').value = '';
    document.getElementById('score').value = '';
  }
});

refresh.addEventListener('click', () => {
  display();
});

window.addEventListener('DOMContentLoaded', () => {
  display();
});