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

const hasAnyPlayersScored = (playerOneScore, playerTwoScore) => {
  return isPlayerScored(playerOneScore) || isPlayerScored(playerTwoScore);
};

const hasBothPlayersScored = (playerOneScore, playerTwoScore) => {
  return isPlayerScored(playerOneScore) && isPlayerScored(playerTwoScore);
};

const isPlayerScored = (playerScore) => {
  return playerScore > POINT_ZERO;
};

const isPlayerScoresMoreThanThree = (playerScore) => {
  return playerScore > POINT_THREE;
};

const hasAnyPlayersScoresMoreThanThree = (playerOneScore, playerTwoScore) => {
  return (
    isPlayerScoresMoreThanThree(playerOneScore) ||
    isPlayerScoresMoreThanThree(playerTwoScore)
  );
};

const isScoreDifferenceIsOne = (playerOneScore, playerTwoScore) => {
  return Math.abs(playerOneScore - playerTwoScore) === POINT_ONE;
};

const hasplayerScoresNotLessThanThree = (playerScore) => {
  return playerScore >= POINT_THREE;
};

const isScoreDifferenceGreaterThanOne = (playerOneScore, playerTwoScore) => {
  return playerOneScore - playerTwoScore > POINT_ONE;
};

export {
  hasPlayersScoresEqual,
  isPlayerScoresOne,
  isPlayerScoresTwo,
  hasplayerScoresNotLessThanThree,
  hasPlayersScoresDifferent,
  hasplayersScoresNotMoreThanThree,
  hasBothPlayersScored,
  hasAnyPlayersScored,
  hasAnyPlayersScoresMoreThanThree,
  isScoreDifferenceIsOne,
  isPlayerScoresMoreThanThree,
  isScoreDifferenceGreaterThanOne,
};
