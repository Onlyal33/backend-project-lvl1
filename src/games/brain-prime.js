import { cons } from '@hexlet/pairs';
import { getRandomNum } from '..';

export const gameGoal = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export const getQuestionAnswerForGame = () => {
  const question = getRandomNum();
  if (question === 1) {
    return cons(question, 'no');
  }
  let divisor = 2;
  while (divisor <= Math.sqrt(question)) {
    if (question % divisor === 0) {
      return cons(question, 'no');
    }
    divisor += 1;
  }
  return cons(question, 'yes');
};
