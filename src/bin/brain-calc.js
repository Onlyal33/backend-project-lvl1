#!/usr/bin/env node
import { playGame } from '..';
import { getQuestionAnswerForGame, gameGoal } from '../games/brain-calc';

playGame(getQuestionAnswerForGame, gameGoal);
