import {
  hasAnyPlayersScoresMoreThanThree,
  isScoreDifferenceIsOne,
} from "../../../utils/compareScore";
import { score } from "../../../constants/applicationConstants";

const { PLAYER_ONE_ADVANTAGE, PLAYER_TWO_ADVANTAGE } = score;

const isCriteriaMatched = (playerOneScore, playerTwoScore) => {
  return (
    hasAnyPlayersScoresMoreThanThree(playerOneScore, playerTwoScore) &&
    isScoreDifferenceIsOne(playerOneScore, playerTwoScore)
  );
};

const getScore = (playerOneScore, playerTwoScore) => {
  return playerOneScore > playerTwoScore
    ? PLAYER_ONE_ADVANTAGE
    : PLAYER_TWO_ADVANTAGE;
};

const advantange = {
  isCriteriaMatched,
  getScore,
};

export { advantange };
