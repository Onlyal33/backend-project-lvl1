import { cons } from '@hexlet/pairs';
import getRandomNum from '../utils';
import playGame from '..';

const progressionLength = 10;

const gameDescription = 'What number is missing in the progression?';

const getQuestionAnswer = () => {
  let currentElement = getRandomNum();
  const commonDifference = getRandomNum();
  const hiddenElementPosition = getRandomNum(1, progressionLength);
  let question = '';
  let answer = 0;
  for (let i = 1; i <= progressionLength; i += 1) {
    if (i !== hiddenElementPosition) {
      question = `${question} ${currentElement}`;
    } else {
      question = `${question} ..`;
      answer = currentElement;
    }
    currentElement += commonDifference;
  }
  return cons(question, String(answer));
};

export default () => playGame(getQuestionAnswer, gameDescription);
