import { render, screen, fireEvent } from "@testing-library/react";
import { testConstants } from "../test/constants/testConstants";
import App from "../App";

const {
  GAME_SCORE_IDENTIFIER,
  LOVE_ALL,
  FIFTEEN_LOVE,
  THIRTY_LOVE,
  FORTY_LOVE,
  LOVE_FIFTEEN,
  LOVE_THIRTY,
  LOVE_FORTY,
  PLAYER_ONE,
  PLAYER_TWO,
  ZERO,
  ONE_TIME,
  TWO_TIMES,
  THREE_TIMES,
  FIFTEEN_ALL,
  THIRTY_ALL,
  DEUCE,
} = testConstants;

beforeEach(() => {
  render(<App />);
});

const playerOneScores = (times) => {
  playerScores(times, PLAYER_ONE);
};

const playerTwoScores = (times) => {
  playerScores(times, PLAYER_TWO);
};

const playerScores = (times, playerName) => {
  for (let count = ZERO; count < times; count++) {
    fireEvent.click(screen.getByTestId(playerName));
  }
};

const gameScoreShouldBe = (expected) => {
  expect(screen.getByTestId(GAME_SCORE_IDENTIFIER).textContent).toEqual(
    expected
  );
};

test("When the Game Starts, then the initial score should be Love-All", () => {
  gameScoreShouldBe(LOVE_ALL);
});

test("When the running point of player one is 1 then the running score should be Fifteen-Love", () => {
  playerOneScores(ONE_TIME);

  gameScoreShouldBe(FIFTEEN_LOVE);
});

test("When the running point of player one is 2 then the running score should be Thirty-Love", () => {
  playerOneScores(TWO_TIMES);

  gameScoreShouldBe(THIRTY_LOVE);
});

test("When the running point of player one is 3 then the running score should be Forty-Love", () => {
  playerOneScores(THREE_TIMES);

  gameScoreShouldBe(FORTY_LOVE);
});

test("When the running point of player one is 0 and the running point of player two is 1 then the running score should be Love-Fifteen", () => {
  playerTwoScores(ONE_TIME);

  gameScoreShouldBe(LOVE_FIFTEEN);
});

test("When the running point of player one is 0 and the running point of player two is 2 then the running score should be Love-Thirty", () => {
  playerTwoScores(TWO_TIMES);

  gameScoreShouldBe(LOVE_THIRTY);
});

test("When the running point of player one is 0 and the running point of player two is 3 then the running score should be Love-Forty", () => {
  playerTwoScores(THREE_TIMES);

  gameScoreShouldBe(LOVE_FORTY);
});

test("When the running point of both the players is 1 then the running score should be Fifteen-All", () => {
  playerOneScores(ONE_TIME);
  playerTwoScores(ONE_TIME);

  gameScoreShouldBe(FIFTEEN_ALL);
});

test("When the running point of both the players is 2 then the running score should be Thirty-All", () => {
  playerOneScores(TWO_TIMES);
  playerTwoScores(TWO_TIMES);

  gameScoreShouldBe(THIRTY_ALL);
});

test("When the running point of both the players is 3 then the running score should be Deuce", () => {
  playerOneScores(THREE_TIMES);
  playerTwoScores(THREE_TIMES);

  gameScoreShouldBe(DEUCE);
});
