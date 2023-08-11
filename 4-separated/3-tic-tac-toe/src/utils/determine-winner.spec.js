import { determineWinner } from './determine-winner.js';

describe('determines who won a game of tictactoe', () => {
  it('should return null for an empty board', () => {
    const board = [null, null, null, null, null, null, null, null, null];
    const winner = determineWinner(board);
    expect(winner).toBeNull();
  });

  it('should return "X" as the winner for a winning row', () => {
    const board = ["X", "X", "X", null, null, null, null, null, null];
    const winner = determineWinner(board);
    expect(winner).toBe("X");
  });

  it('should return "O" as the winner for a winning column', () => {
    const board = ["O", null, null, "O", null, null, "O", null, null];
    const winner = determineWinner(board);
    expect(winner).toBe("O");
  });

  it('should return "X" as the winner for a winning diagonal', () => {
    const board = ["X", null, null, null, "X", null, null, null, "X"];
    const winner = determineWinner(board);
    expect(winner).toBe("X");
  });

  it('should return null when there is no winner', () => {
    const board = ["X", "O", "X", "O", "X", "X", "O", "X", "O"];
    const winner = determineWinner(board);
    expect(winner).toBeNull();
  });
});
