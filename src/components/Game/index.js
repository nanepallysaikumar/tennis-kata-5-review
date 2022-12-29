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
  POINT_TWO,
  PLAYER_ONE,
  PLAYER_TWO,
  POINT_THREE,
  TITLE,
} = applicationConstants;
const {
  LOVE_ALL,
  LOVE_FIFTEEN,
  LOVE_THIRTY,
  LOVE_FORTY,
  FIFTEEN_ALL,
  THIRTY_ALL,
} = score;

const Game = () => {
  const [gameScore, setGameScore] = useState(LOVE_ALL);
  const [playerOneScore, setPlayerOneScore] = useState(POINT_ZERO);
  const [playerTwoScore, setPlayerTwoScore] = useState(POINT_ZERO);

  const incrementScore = (player) => {
    player === PLAYER_ONE
      ? setPlayerOneScore(playerOneScore + POINT_ONE)
      : setPlayerTwoScore(playerTwoScore + POINT_ONE);
  };

  const isPlayersScoresNotMoreThanThreePoints = () => {
    return playerOneScore <= POINT_THREE && playerTwoScore <= POINT_THREE;
  };

  const hasBothPlayersScoresOnePoint = () => {
    return playerOneScore === POINT_ONE && playerTwoScore === POINT_ONE;
  };

  const hasBothPlayerScoresTwoPoints = () => {
    return playerOneScore === POINT_TWO && playerTwoScore === POINT_TWO;
  };

  const calculateGameScore = () => {
    if (hasBothPlayersScoresOnePoint()) {
      return FIFTEEN_ALL;
    }

    if (hasBothPlayerScoresTwoPoints()) {
      return THIRTY_ALL;
    }

    if (isPlayersScoresNotMoreThanThreePoints()) {
      return `${scoreLookUp[playerOneScore]}-${scoreLookUp[playerTwoScore]}`;
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
