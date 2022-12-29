import { render, screen, fireEvent } from "@testing-library/react";
import { testConstants } from "../test/constants/testConstants";
import App from "../App";

const {
  GAME_SCORE_IDENTIFIER,
  LOVE_ALL,
  FIFTEEN_LOVE,
  THIRTY_LOVE,
  PLAYER_ONE,
} = testConstants;

beforeEach(() => {
  render(<App />);
});

const gameScoreShouldBe = (expected) => {
  expect(screen.getByTestId(GAME_SCORE_IDENTIFIER).textContent).toEqual(
    expected
  );
};

test("When the Game Starts, then the initial score should be Love-All", () => {
  gameScoreShouldBe(LOVE_ALL);
});

test("When the running point of player one is 1 then the running score should be Fifteen-Love", () => {
  fireEvent.click(screen.getByTestId(PLAYER_ONE));

  gameScoreShouldBe(FIFTEEN_LOVE);
});

test("When the running point of player one is 2 then the running score should be Thirty-Love", () => {
  fireEvent.click(screen.getByTestId(PLAYER_ONE));
  fireEvent.click(screen.getByTestId(PLAYER_ONE));

  gameScoreShouldBe(THIRTY_LOVE);
});
