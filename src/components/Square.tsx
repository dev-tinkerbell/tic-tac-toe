import React from 'react';

type Props = {
    value: string | null;
    onSquareClick: () => void;
};

export default function Square({ value, onSquareClick }: Props) {
    return (
        <button className='square' onClick={onSquareClick}>
            {value}
        </button>
    );
}
