import { cons } from '@hexlet/pairs';
import getRandomNum from '../utils';
import playGame from '..';

const isEven = number => number % 2 === 0;

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const getQuestionAnswer = () => {
  const question = getRandomNum();
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => playGame(getQuestionAnswer, gameDescription);
