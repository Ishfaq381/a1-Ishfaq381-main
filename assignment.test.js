const assignment = require('./assignment');

describe('rock', () => {
  it('test rock', () => {
    expect.assertions(1);
    expect(assignment.checkWinner(assignment.ROCK, assignment.ROCK)).toBe(assignment.TIE);
  });

  it('test paper', () => {
    expect.assertions(1);
    expect(assignment.checkWinner(assignment.ROCK, assignment.PAPER)).toBe(assignment.PLAYER_B);
  });

  it('test scissors', () => {
    expect.assertions(1);
    expect(assignment.checkWinner(assignment.ROCK, assignment.SCISSORS)).toBe(assignment.PLAYER_A);
  });
});

describe('paper', () => {
  it('test rock', () => {
    expect.assertions(1);
    expect(assignment.checkWinner(assignment.PAPER, assignment.ROCK)).toBe(assignment.PLAYER_A);
  });

  it('test paper', () => {
    expect.assertions(1);
    expect(assignment.checkWinner(assignment.PAPER, assignment.PAPER)).toBe(assignment.TIE);
  });

  it('test scissors', () => {
    expect.assertions(1);
    expect(assignment.checkWinner(assignment.PAPER, assignment.SCISSORS)).toBe(assignment.PLAYER_B);
  });
});

describe('scissors', () => {
  it('test rock', () => {
    expect.assertions(1);
    expect(assignment.checkWinner(assignment.SCISSORS, assignment.ROCK)).toBe(assignment.PLAYER_B);
  });

  it('test paper', () => {
    expect.assertions(1);
    expect(assignment.checkWinner(assignment.SCISSORS, assignment.PAPER)).toBe(assignment.PLAYER_A);
  });

  it('test scissors', () => {
    expect.assertions(1);
    expect(assignment.checkWinner(assignment.SCISSORS, assignment.SCISSORS)).toBe(assignment.TIE);
  });
});
