import React from "react";

function Square(props) {
    let handleSquare = props.function;
    const value = props.data.value;
    const rowInd = props.data.rowInd;
    const colInd = props.data.colInd;

    return (
        <input
            type="text"
            className="square"
            value={value}
            onChange={(e) => handleSquare(e.target.value, rowInd, colInd)}
        />
    );
}

export default Square;
