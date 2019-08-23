import { cons } from '@hexlet/pairs';
import getRandomNum from '../utils';
import playGame from '..';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  let divisor = 2;
  while (divisor <= Math.sqrt(number)) {
    if (number % divisor === 0) {
      return false;
    }
    divisor += 1;
  }
  return true;
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAnswer = () => {
  const question = getRandomNum();
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => playGame(getQuestionAnswer, gameDescription);
