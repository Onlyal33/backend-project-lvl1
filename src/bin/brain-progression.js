#!/usr/bin/env node
import { playGame } from '..';
import { getQuestionAnswerForGame, gameGoal } from '../games/brain-progression';

playGame(getQuestionAnswerForGame, gameGoal);
