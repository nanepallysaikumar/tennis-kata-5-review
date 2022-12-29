import {
  hasAnyPlayersScoresMoreThanThree,
  isScoreDifferenceGreaterThanOne,
} from "../../../utils/compareScore";
import { score } from "../../../constants/applicationConstants";

const { PLAYER_ONE_WIN, PLAYER_TWO_WIN } = score;

const isCriteriaMatched = (playerOneScore, playerTwoScore) => {
  return (
    hasAnyPlayersScoresMoreThanThree(playerOneScore, playerTwoScore) &&
    isScoreDifferenceGreaterThanOne(playerOneScore, playerTwoScore)
  );
};

const getScore = (playerOneScore, playerTwoScore) => {
  return playerOneScore > playerTwoScore ? PLAYER_ONE_WIN : PLAYER_TWO_WIN;
};

const playerWins = {
  isCriteriaMatched,
  getScore,
};

export { playerWins };
