import { cons } from '@hexlet/pairs';
import getRandomNum from '../utils';
import playGame from '..';

const getGreatestCommonDivisor = (a, b) => {
  let number1 = a;
  let number2 = b;
  if (a < b) {
    number1 = b;
    number2 = a;
  }
  const iterEuсlid = (greaterNumber, lowerNumber) => {
    const modulo = greaterNumber % lowerNumber;
    if (modulo === 0) {
      return lowerNumber;
    }
    return iterEuсlid(lowerNumber, modulo);
  };
  return iterEuсlid(number1, number2);
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getQuestionAnswer = () => {
  const number1 = getRandomNum();
  const number2 = getRandomNum();
  const question = `${number1} ${number2}`;
  const answer = getGreatestCommonDivisor(number1, number2);
  return cons(question, String(answer));
};

export default () => playGame(getQuestionAnswer, gameDescription);
