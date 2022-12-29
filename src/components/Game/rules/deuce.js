import {
  hasPlayersScoresEqual,
  hasplayerScoresNotLessThanThree,
} from "../../../utils/compareScore";
import { score } from "../../../constants/applicationConstants";

const { DEUCE } = score;

const isCriteriaMatched = (playerOneScore, playerTwoScore) => {
  return (
    hasPlayersScoresEqual(playerOneScore, playerTwoScore) &&
    hasplayerScoresNotLessThanThree(playerOneScore)
  );
};

const getScore = () => {
  return DEUCE;
};

const deuce = {
  isCriteriaMatched,
  getScore,
};

export { deuce };
