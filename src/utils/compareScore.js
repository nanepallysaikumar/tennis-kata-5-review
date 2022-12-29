import { applicationConstants } from "../constants/applicationConstants";

const { POINT_ZERO, POINT_ONE, POINT_TWO, POINT_THREE } = applicationConstants;

const hasPlayersScoresEqual = (playerOneScore, playerTwoScore) => {
  return playerOneScore === playerTwoScore;
};

const hasPlayersScoresDifferent = (playerOneScore, playerTwoScore) => {
  return playerOneScore !== playerTwoScore;
};

const hasplayersScoresNotMoreThanThree = (playerOneScore, playerTwoScore) => {
  return (
    isplayerScoresNotMoreThanThree(playerOneScore) &&
    isplayerScoresNotMoreThanThree(playerTwoScore)
  );
};

const isplayerScoresNotMoreThanThree = (playerScore) => {
  return playerScore <= POINT_THREE;
};

const isPlayerScoresOne = (playerScore) => {
  return playerScore === POINT_ONE;
};

const isPlayerScoresTwo = (playerScore) => {
  return playerScore === POINT_TWO;
};

const isPlayerScoresThree = (playerScore) => {
  return playerScore === POINT_THREE;
};

const hasAnyPlayersScored = (playerOneScore, playerTwoScore) => {
  return isPlayerScored(playerOneScore) || isPlayerScored(playerTwoScore);
};

const hasBothPlayersScored = (playerOneScore, playerTwoScore) => {
  return isPlayerScored(playerOneScore) && isPlayerScored(playerTwoScore);
};

const isPlayerScored = (playerScore) => {
  return playerScore > POINT_ZERO;
};

const isPlayerOneScoresMoreThanThree = (playerScore) => {
  return playerScore > POINT_THREE;
};

const isScoreDifferenceIsOne = (playerOneScore, playerTwoScore) => {
  return playerOneScore - playerTwoScore === POINT_ONE;
};

export {
  hasPlayersScoresEqual,
  isPlayerScoresOne,
  isPlayerScoresTwo,
  isPlayerScoresThree,
  hasPlayersScoresDifferent,
  hasplayersScoresNotMoreThanThree,
  hasBothPlayersScored,
  hasAnyPlayersScored,
  isPlayerOneScoresMoreThanThree,
  isScoreDifferenceIsOne,
};
