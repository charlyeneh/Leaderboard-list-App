const postScores = async (name, points) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/NlrHTuV2VXUQfLK9vHpQ/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user: name,
      score: points,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const scores = response.json();
  return scores;
};

const getScores = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/NlrHTuV2VXUQfLK9vHpQ/scores/');
  const scores = response.json();
  return scores;
};

export { postScores, getScores };