import { cons } from '@hexlet/pairs';
import { getRandomNum, getGreatestCommonDivisor } from '..';

export const gameGoal = 'Find the greatest common divisor of given numbers.';
export const getQuestionAnswerForGame = () => {
  const a = getRandomNum();
  const b = getRandomNum();
  const question = `${a} ${b}`;
  return cons(question, String(getGreatestCommonDivisor(a, b)));
};
