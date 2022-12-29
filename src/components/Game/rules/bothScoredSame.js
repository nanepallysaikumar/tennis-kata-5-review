import {
  hasPlayersScoresEqual,
  isPlayerScoresOne,
  isPlayerScoresTwo,
} from "../../../utils/compareScore";
import {
  scoreLookUp,
  applicationConstants,
} from "../../../constants/applicationConstants";

const { ALL, HYPHEN } = applicationConstants;

const isCriteriaMatched = (playerOneScore, playerTwoScore) => {
  return (
    hasPlayersScoresEqual(playerOneScore, playerTwoScore) &&
    (isPlayerScoresOne(playerOneScore) || isPlayerScoresTwo(playerOneScore))
  );
};

const getScore = (playerScore) => {
  return `${scoreLookUp[playerScore]}${HYPHEN}${ALL}`;
};

const bothScoredPointOneOrTwo = {
  isCriteriaMatched,
  getScore,
};

export { bothScoredPointOneOrTwo };
