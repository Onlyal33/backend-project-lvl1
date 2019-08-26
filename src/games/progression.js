import { cons } from '@hexlet/pairs';
import getRandomNum from '../utils';
import playGame from '..';

const progressionLength = 10;

const gameDescription = 'What number is missing in the progression?';

const getQuestionAnswer = () => {
  const firstElement = getRandomNum();
  const commonDifference = getRandomNum();
  const hiddenElementPosition = getRandomNum(0, progressionLength - 1);
  const answer = firstElement + hiddenElementPosition * commonDifference;
  let question = '';
  for (let i = 0; i < progressionLength; i += 1) {
    if (i !== hiddenElementPosition) {
      const currentElement = firstElement + i * commonDifference;
      question = `${question} ${currentElement}`;
    } else {
      question = `${question} ..`;
    }
  }
  return cons(question.slice(1), String(answer));
};

export default () => playGame(getQuestionAnswer, gameDescription);
