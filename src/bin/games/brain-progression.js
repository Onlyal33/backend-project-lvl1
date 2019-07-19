#!/usr/bin/env node
import {
  getUserName, startGame, getRandomNum, getPairQA,
} from '../..';

const progressionGame = () => {
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
  return getPairQA(question, String(answer));
};
console.log('Welcome to the Brain Games!');
console.log('What number is missing in the progression?\n');
startGame(getUserName(), progressionGame);
