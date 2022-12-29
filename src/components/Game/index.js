import React, { useState, useEffect } from "react";
import {
  applicationConstants,
  score,
} from "../../constants/applicationConstants";
import { bothScoredPointOneOrTwo } from "./rules/bothScoredSame";
import { deuce } from "./rules/deuce";
import { differentScoresBetweenOneAndThree } from "./rules/differentScore";
import "./index.css";

const { GAME_SCORE, POINT_ZERO, POINT_ONE, PLAYER_ONE, PLAYER_TWO, TITLE } =
  applicationConstants;
const { LOVE_ALL } = score;
const rules = [
  deuce,
  bothScoredPointOneOrTwo,
  differentScoresBetweenOneAndThree,
];

const Game = () => {
  const [gameScore, setGameScore] = useState(LOVE_ALL);
  const [playerOneScore, setPlayerOneScore] = useState(POINT_ZERO);
  const [playerTwoScore, setPlayerTwoScore] = useState(POINT_ZERO);

  const incrementScore = (player) => {
    player === PLAYER_ONE
      ? setPlayerOneScore(playerOneScore + POINT_ONE)
      : setPlayerTwoScore(playerTwoScore + POINT_ONE);
  };

  const calculateGameScore = () => {
    for (const rule of rules) {
      if (rule.isCriteriaMatched(playerOneScore, playerTwoScore)) {
        return rule.getScore(playerOneScore, playerTwoScore);
      }
    }
  };

  const updateScore = () => {
    setGameScore(calculateGameScore());
  };

  const hasPlayersStartedScoring = () => {
    return playerOneScore > POINT_ZERO || playerTwoScore > POINT_ZERO;
  };

  useEffect(() => {
    if (hasPlayersStartedScoring()) {
      updateScore();
    }
  }, [playerOneScore, playerTwoScore]);

  return (
    <React.Fragment>
      <h1>{TITLE}</h1>
      <p data-testid={GAME_SCORE}>{gameScore}</p>
      <button
        data-testid={PLAYER_ONE}
        onClick={() => incrementScore(PLAYER_ONE)}
      >
        {PLAYER_ONE}
      </button>
      <button
        data-testid={PLAYER_TWO}
        onClick={() => incrementScore(PLAYER_TWO)}
      >
        {PLAYER_TWO}
      </button>
    </React.Fragment>
  );
};

export { Game };
