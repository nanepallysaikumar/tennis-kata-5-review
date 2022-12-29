import {
  isPlayerScoresMoreThanThree,
  isScoreDifferenceGreaterThanOne,
} from "../../../utils/compareScore";
import { score } from "../../../constants/applicationConstants";

const { PLAYER_ONE_WIN } = score;

const isCriteriaMatched = (playerOneScore, playerTwoScore) => {
  return (
    isPlayerScoresMoreThanThree(playerOneScore) &&
    isScoreDifferenceGreaterThanOne(playerOneScore, playerTwoScore)
  );
};

const getScore = () => {
  return PLAYER_ONE_WIN;
};

const playerWins = {
  isCriteriaMatched,
  getScore,
};

export { playerWins };
