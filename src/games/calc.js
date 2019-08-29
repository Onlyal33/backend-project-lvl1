import { cons } from '@hexlet/pairs';
import { l, random } from '@hexlet/pairs-data';
import getRandomNum from '../utils';
import playGame from '..';

const operators = l('+', '-', '*');

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return null;
  }
};

const gameDescription = 'What is the result of the expression?';

const getQuestionAnswer = () => {
  const number1 = getRandomNum();
  const number2 = getRandomNum();
  const operator = random(operators);
  const question = `${number1} ${operator} ${number2}`;
  const answer = calculate(number1, number2, operator);
  return cons(question, String(answer));
};

export default () => playGame(getQuestionAnswer, gameDescription);
