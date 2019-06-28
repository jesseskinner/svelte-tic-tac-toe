export function TicTacToe({ onWin, onTie }) {
	const board = [['', '', ''], ['', '', ''], ['', '', '']];

	let turn = 'X';

	return {
		board,

		click(rowIndex, columnIndex) {
			if (!board[rowIndex][columnIndex]) {
				board[rowIndex][columnIndex] = turn;
				turn = turn === 'X' ? 'O' : 'X';

                if (isBoardFull(board)) {
                    const winner = getWinner(board);

                    if (winner) {
                        onWin(winner);
                    } else {
                        onTie();
                    }
                }
			}

			return this;
		}
	};
}

function getWinner(board) {
	for (let row = 0; row < 3; row++) {
		if (
			board[row][0] === board[row][1] &&
			board[row][0] === board[row][2]
		) {
			return board[row][0];
		}
	}

	for (let column = 0; column < 3; column++) {
		if (
			board[0][column] === board[1][column] &&
			board[0][column] === board[2][column]
		) {
			return board[0][column];
		}
	}

	if (board[0][0] === board[1][1] && board[0][0] == board[2][2]) {
		return board[0][0];
	}

	if (board[0][2] === board[1][1] && board[0][2] == board[2][0]) {
		return board[0][2];
	}
}

function isBoardFull(board) {
	for (let row = 0; row < 3; row++) {
		for (let column = 0; column < 3; column++) {
			if (!board[row][column]) {
				return false;
			}
		}
	}

	return true;
}
