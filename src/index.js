import readlineSync from 'readline-sync';
import { car as getQuestion, cdr as getAnswer } from '@hexlet/pairs';

export const getRandomNum = (min = 1, max = 1000) => {
  const result = Math.round(min - 0.5 + Math.random() * (max - min + 1));
  return result;
};
export const getGreatestCommonDivisor = (a, b) => {
  let num1 = a;
  let num2 = b;
  if (a < b) {
    num1 = b;
    num2 = a;
  }
  if (num1 % num2 === 0) {
    return num2;
  }
  let divisor = 2;
  let greatestCommonDivisor = 1;
  while (divisor <= Math.sqrt(num2)) {
    if (num2 % divisor === 0) {
      if (num1 % divisor === 0) {
        greatestCommonDivisor *= divisor;
        num1 /= divisor;
      }
      num2 /= divisor;
    } else {
      divisor += 1;
    }
  }
  return greatestCommonDivisor;
};

export const playGame = (getQuestionAnswer, gameGoal) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameGoal}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const numberOfTurns = 3;
  for (let numCorrectAnswers = 0; numCorrectAnswers < numberOfTurns; numCorrectAnswers += 1) {
    const questionAndAnswer = getQuestionAnswer();
    console.log('Question: ', getQuestion(questionAndAnswer));
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
