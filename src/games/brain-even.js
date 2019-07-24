import { cons } from '@hexlet/pairs';
import { getRandomNum, playGame } from '..';

const isEven = number => (number % 2 === 0);

const gameGoal = 'Answer "yes" if number even otherwise answer "no".';

const getQuestionAnswerForGame = () => {
  const question = getRandomNum();
  return cons(question, isEven(question) ? 'yes' : 'no');
};

export default () => playGame(getQuestionAnswerForGame, gameGoal);
