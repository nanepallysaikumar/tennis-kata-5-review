import React, { useState, useEffect } from "react";
import {
  applicationConstants,
  score,
  scoreLookUp,
} from "../../constants/applicationConstants";
import "./index.css";

const {
  GAME_SCORE,
  POINT_ZERO,
  POINT_ONE,
  PLAYER_ONE,
  PLAYER_TWO,
  POINT_THREE,
  TITLE,
} = applicationConstants;
const { LOVE_ALL } = score;

const Game = () => {
  const [gameScore, setGameScore] = useState(LOVE_ALL);
  const [playerOneScore, setPlayerOneScore] = useState(POINT_ZERO);

  const incrementScore = () => {
    setPlayerOneScore(playerOneScore + POINT_ONE);
  };

  const isPlayerOneScoreBetweenOneAndThree = () => {
    return playerOneScore >= POINT_ONE && playerOneScore <= POINT_THREE;
  };

  const calculateGameScore = () => {
    if (isPlayerOneScoreBetweenOneAndThree()) {
      return `${scoreLookUp[playerOneScore]}-Love`;
    }
  };

  const updateScore = () => {
    setGameScore(calculateGameScore());
  };

  const isPlayerStartedScoring = () => {
    return playerOneScore > POINT_ZERO;
  };

  useEffect(() => {
    if (isPlayerStartedScoring()) {
      updateScore();
    }
  }, [playerOneScore]);

  return (
    <React.Fragment>
      <h1>{TITLE}</h1>
      <p data-testid={GAME_SCORE}>{gameScore}</p>
      <button data-testid={PLAYER_ONE} onClick={incrementScore}>
        {PLAYER_ONE}
      </button>
      <button>{PLAYER_TWO}</button>
    </React.Fragment>
  );
};

export { Game };
