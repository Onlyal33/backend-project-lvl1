import { cons } from '@hexlet/pairs';
import { getRandomNum } from '..';

export const gameGoal = 'What is the result of the expression?';
export const getQuestionAnswerForGame = () => {
  const a = getRandomNum();
  const b = getRandomNum();
  const quantityOfOperations = 3;
  const numberOfOperator = getRandomNum(1, quantityOfOperations);
  let answer = 0;
  let operator = '';
  switch (numberOfOperator) {
    case 1:
      answer = a + b;
      operator = '+';
      break;
    case 2:
      answer = a - b;
      operator = '-';
      break;
    default:
      answer = a * b;
      operator = '*';
  }
  const question = `${a} ${operator} ${b}`;
  return cons(question, String(answer));
};
