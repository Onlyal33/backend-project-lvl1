import { cons } from '@hexlet/pairs';
import { getRandomNum } from '..';

export const gameGoal = 'Answer "yes" if number even otherwise answer "no".';
export const getQuestionAnswerForGame = () => {
  const question = getRandomNum();
  const answer = (question % 2 === 0) ? 'yes' : 'no';
  return cons(question, answer);
};
