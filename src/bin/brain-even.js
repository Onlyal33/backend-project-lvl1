#!/usr/bin/env node
import { playGame } from '..';
import { getQuestionAnswerForGame, gameGoal } from '../games/brain-even';

playGame(getQuestionAnswerForGame, gameGoal);
