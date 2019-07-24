import { cons } from '@hexlet/pairs';
import { l, random } from '@hexlet/pairs-data';
import { getRandomNum, playGame } from '..';

// список операторов и выбор из списка реализовал с помощью @hexlet/pairs-data
const listOfOperators = l('+', '-', '*');

const getResultOfOperation = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    default:
      return a * b;
  }
};

const gameGoal = 'What is the result of the expression?';

const getQuestionAnswerForGame = () => {
  const a = getRandomNum();
  const b = getRandomNum();
  const operator = random(listOfOperators);
  const question = `${a} ${operator} ${b}`;
  const answer = getResultOfOperation(a, b, operator);
  return cons(question, String(answer));
};

export default () => playGame(getQuestionAnswerForGame, gameGoal);
