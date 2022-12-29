import { render, screen, fireEvent } from "@testing-library/react";
import { testConstants } from "../test/constants/testConstants";
import App from "../App";

const { GAME_SCORE_IDENTIFIER, LOVE_ALL, FIFTEEN_LOVE, PLAYER_ONE } =
  testConstants;

test("When the Game Starts, then the initial score should be Love-All", () => {
  render(<App />);
  expect(screen.getByTestId(GAME_SCORE_IDENTIFIER).textContent).toEqual(
    LOVE_ALL
  );
});

test("When the running point of player one is 1 then the running score should be Fifteen-Love", () => {
  render(<App />);
  fireEvent.click(screen.getByTestId(PLAYER_ONE));

  expect(screen.getByTestId(GAME_SCORE_IDENTIFIER).textContent).toEqual(
    FIFTEEN_LOVE
  );
});
