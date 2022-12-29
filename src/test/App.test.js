import { render, screen } from "@testing-library/react";
import { testConstants } from "../test/constants/testConstants";
import App from "../App";

const { GAME_SCORE_IDENTIFIER, LOVE_ALL } = testConstants;

test("When the Game Starts, then the initial score should be Love-All", () => {
  render(<App />);
  expect(screen.getByTestId(GAME_SCORE_IDENTIFIER).textContent).toEqual(
    LOVE_ALL
  );
});
