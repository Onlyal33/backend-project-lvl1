import { cons } from '@hexlet/pairs';
import { getRandomNum } from '..';

export const gameGoal = 'What number is missing in the progression?';
export const getQuestionAnswerForGame = () => {
  let a = getRandomNum();
  const commDiff = getRandomNum();
  const hiddenPos = getRandomNum(1, 10);
  let question = '';
  let answer = 0;
  for (let i = 1; i <= 10; i += 1) {
    if (i !== hiddenPos) {
      question += `${a} `;
    } else {
      question += '.. ';
      answer = a;
    }
    a += commDiff;
  }
  return cons(question, String(answer));
};
