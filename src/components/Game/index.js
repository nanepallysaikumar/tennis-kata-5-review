import React, { useState, useEffect } from "react";
import {
  applicationConstants,
  score,
} from "../../constants/applicationConstants";
import "./index.css";

const {
  GAME_SCORE,
  POINT_ZERO,
  POINT_ONE,
  POINT_TWO,
  PLAYER_ONE,
  PLAYER_TWO,
  TITLE,
} = applicationConstants;
const { LOVE_ALL, FIFTEEN_LOVE, THIRTY_LOVE } = score;

const Game = () => {
  const [gameScore, setGameScore] = useState(LOVE_ALL);
  const [playerOneScore, setPlayerOneScore] = useState(POINT_ZERO);

  const incrementScore = () => {
    setPlayerOneScore(playerOneScore + POINT_ONE);
  };

  const calculateGameScore = () => {
    if (playerOneScore === POINT_ONE) {
      return FIFTEEN_LOVE;
    } else if (playerOneScore === POINT_TWO) {
      return THIRTY_LOVE;
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
