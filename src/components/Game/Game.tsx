import React from "react";
import Board from "../Board/Board";

class Game extends React.Component {
    render() {
        const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={numArr} />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

export default Game;