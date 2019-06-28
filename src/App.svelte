<script>
  import Board from "./Board.svelte";
  import { TicTacToe } from "./board";

  let message;
  let game = createGame();

  function createGame() {
    message = null;

    return new TicTacToe({
      onWin(winner) {
        message = `${winner} wins!`;
      },

      onTie() {
        message = `Tie game!`;
      }
    });
  }

  function newGame() {
    game = createGame();
  }
</script>

<style>
  h2 {
    display: inline;
  }
</style>

<svelte:head>
	<title>Tic Tac Toe</title>
</svelte:head>

<h1>Tic Tac Toe</h1>

<button on:click={newGame}>New Game</button>

{#if message}
  <h2>{message}</h2>
{/if}

<Board {game} />
