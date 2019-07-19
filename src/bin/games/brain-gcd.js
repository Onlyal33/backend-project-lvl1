#!/usr/bin/env node
import {
  getUserName, startGame, getRandomNum, getPairQA,
} from '../..';

const gCDGame = () => {
  const a = getRandomNum();
  const b = getRandomNum();
  const question = `${a} ${b}`;
  let num1 = a;
  let num2 = b;
  if (a < b) {
    num1 = b;
    num2 = a;
  }
  if (num1 % num2 === 0) {
    return getPairQA(question, String(num2));
  }
  let divisor = 2;
  let gCD = 1;
  while (divisor <= Math.sqrt(num2)) {
    if (num2 % divisor === 0) {
      if (num1 % divisor === 0) {
        gCD *= divisor;
        num1 /= divisor;
      }
      num2 /= divisor;
    } else {
      divisor += 1;
    }
  }
  return getPairQA(question, String(gCD));
};
console.log('Welcome to the Brain Games!');
console.log('Find the greatest common divisor of given numbers.\n');
startGame(getUserName(), gCDGame);
