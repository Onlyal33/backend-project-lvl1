#!/usr/bin/env node
import {
  getUserName, startGame, getRandomNum, getPairQA,
} from '..';

const primeGame = () => {
  const question = getRandomNum();
  if (question === 1) {
    return getPairQA(question, 'no');
  }
  let divisor = 2;
  while (divisor <= Math.sqrt(question)) {
    if (question % divisor === 0) {
      return getPairQA(question, 'no');
    }
    divisor += 1;
  }
  return getPairQA(question, 'yes');
};
console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if given number is prime. Otherwise answer "no".\n');
startGame(getUserName(), primeGame);
