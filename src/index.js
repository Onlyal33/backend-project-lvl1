import readlineSync from 'readline-sync';

export const getPairQA = (a, b) => (value) => {
  switch (value) {
    case 'question':
      return a;
    case 'answer':
      return b;
    default:
      return 'Error';
  }
};
const getQuestion = pair => pair('question');
const getAnswer = pair => pair('answer');

export const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};
export const getRandomNum = (min = 1, max = 1000) => {
  const result = Math.round(min - 0.5 + Math.random() * (max - min + 1));
  return result;
};
export const startGame = (userName, gameType) => {
  for (let numCorrectAnswers = 0; numCorrectAnswers < 3; numCorrectAnswers += 1) {
    const pairQA = gameType();
    console.log('Question: ', getQuestion(pairQA));
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = getAnswer(pairQA);
    if (correctAnswer !== userAnswer) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${userName}!`);
};
