import React from 'react';

interface Props{
    value: number;
    onClick: () => void;
}

interface State{
    value: any;
}

function Square<Props, State>(props) {
        return (
            <button className="square" 
                onClick={props.onClick}>
                {props.value}
            </button>
        )
}

export default Square;