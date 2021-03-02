// Game Choices
const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

// Winner
const TIE = '';
const PLAYER_A = 'A';
const PLAYER_B = 'B';

function checkWinner(playerAChoice, playerBChoice) {
  /*

  | Player A | Player B |  Winner  |
  |----------|----------|----------|
  | ROCK     | ROCK     | TIE      |
  | ROCK     | PAPER    | PLAYER_B |
  | ROCK     | SCISSORS | PLAYER_A |
  |----------|----------|----------|
  | PAPER    | ROCK     | PLAYER_A |
  | PAPER    | PAPER    | TIE      |
  | PAPER    | SCISSORS | PLAYER_B |
  |----------|----------|----------|
  | SCISSORS | ROCK     | PLAYER_B |
  | SCISSORS | PAPER    | PLAYER_A |
  | SCISSORS | SCISSORS | TIE      |
  |----------|----------|----------|

  Write your logic below based on above given rules.
  */
}

/* DO NOT EDIT ANYTHING BELOW THIS LINE */
module.exports = {
  ROCK,
  PAPER,
  SCISSORS,

  TIE,
  PLAYER_A,
  PLAYER_B,

  checkWinner,
};
