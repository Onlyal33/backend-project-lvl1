import readlineSync from 'readline-sync';
import { car as getQuestion, cdr as getAnswer } from '@hexlet/pairs';

const turnsCount = 3;

const playGame = (getQuestionAnswer, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameDescription}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let i = 0; i < turnsCount; i += 1) {
    const questionAndAnswer = getQuestionAnswer();
    console.log('Question:', getQuestion(questionAndAnswer));
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = getAnswer(questionAndAnswer);
    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
