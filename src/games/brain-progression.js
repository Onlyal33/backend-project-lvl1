import { cons } from '@hexlet/pairs';
import { getRandomNum, playGame } from '..';

const progressionLength = 10;

const gameGoal = 'What number is missing in the progression?';

const getQuestionAnswerForGame = () => {
  let a = getRandomNum();
  const commDiff = getRandomNum();
  const hiddenPosition = getRandomNum(1, progressionLength);
  let question = '';
  let answer = 0;
  for (let i = 1; i <= progressionLength; i += 1) {
    if (i !== hiddenPosition) {
      question += `${a} `;
    } else {
      question += '.. ';
      answer = a;
    }
    a += commDiff;
  }
  return cons(question, String(answer));
};

export default () => playGame(getQuestionAnswerForGame, gameGoal);
