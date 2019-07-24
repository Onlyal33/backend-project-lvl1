import { cons } from '@hexlet/pairs';
import { getRandomNum, playGame } from '..';

const getGreatestCommonDivisor = (a, b) => {
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

const gameGoal = 'Find the greatest common divisor of given numbers.';

const getQuestionAnswerForGame = () => {
  const a = getRandomNum();
  const b = getRandomNum();
  const question = `${a} ${b}`;
  return cons(question, String(getGreatestCommonDivisor(a, b)));
};

export default () => playGame(getQuestionAnswerForGame, gameGoal);
