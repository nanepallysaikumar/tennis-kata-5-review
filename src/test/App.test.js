import { render, screen, fireEvent } from "@testing-library/react";
import { testConstants } from "../test/constants/testConstants";
import App from "../App";

const {
  GAME_SCORE_IDENTIFIER,
  LOVE_ALL,
  FIFTEEN_LOVE,
  THIRTY_LOVE,
  FORTY_LOVE,
  PLAYER_ONE,
  ZERO,
  ONE_TIME,
  TWO_TIMES,
  THREE_TIMES,
} = testConstants;

beforeEach(() => {
  render(<App />);
});

const playerOneScores = (times) => {
  for (let count = ZERO; count < times; count++) {
    fireEvent.click(screen.getByTestId(PLAYER_ONE));
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
