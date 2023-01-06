import React from 'react';
import Square from '../Square/Square';
import './Board.css';

interface Props {
    squares: number[];
    onClick: (i: number) => void;
}

interface State {
    squares: any[],
    xIsNext: boolean
}

class Board extends React.Component<Props, State> {

    renderSquare(i: number) {
        return (
            <Square 
                value={this.props.squares[i]} 
                onClick={() => this.props.onClick(i)}
            />
        )
    }

    render() {
        return(
            <>
                <div className='board-row'>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </>
        )
    }
}

export default Board;
