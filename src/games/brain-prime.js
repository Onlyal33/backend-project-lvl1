import { cons } from '@hexlet/pairs';
import { getRandomNum, playGame } from '..';

const isPrime = (number) => {
  if (number === 1) {
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

const gameGoal = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAnswerForGame = () => {
  const question = getRandomNum();
  return cons(question, isPrime(question) ? 'yes' : 'no');
};

export default () => playGame(getQuestionAnswerForGame, gameGoal);
