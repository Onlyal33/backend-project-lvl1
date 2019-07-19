#!/usr/bin/env node
import {
  getUserName, startGame, getRandomNum, getPairQA,
} from '../..';

const evenOddGame = () => {
  const question = getRandomNum();
  const answer = (question % 2 === 0) ? 'yes' : 'no';
  return getPairQA(question, answer);
};
console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".\n');
startGame(getUserName(), evenOddGame);
