import {
  isPlayerOneScoresMoreThanThree,
  isScoreDifferenceIsOne,
} from "../../../utils/compareScore";
import { score } from "../../../constants/applicationConstants";

const { PLAYER_ONE_ADVANTAGE } = score;

const isCriteriaMatched = (playerOneScore, playerTwoScore) => {
  return (
    isPlayerOneScoresMoreThanThree(playerOneScore) &&
    isScoreDifferenceIsOne(playerOneScore, playerTwoScore)
  );
};

const getScore = () => {
  return PLAYER_ONE_ADVANTAGE;
};

const advantange = {
  isCriteriaMatched,
  getScore,
};

export { advantange };
