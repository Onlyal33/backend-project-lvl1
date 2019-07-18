#!/usr/bin/env node
import {
  getUserName, startGame, getRandomNum, getPairQA,
} from '..';

const calcGame = () => {
  const a = getRandomNum();
  const b = getRandomNum();
  const numberOfOperator = getRandomNum(1, 3);
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
  return getPairQA(question, String(answer));
};
console.log('Welcome to the Brain Games!');
console.log('What is the result of the expression?\n');
startGame(getUserName(), calcGame);
