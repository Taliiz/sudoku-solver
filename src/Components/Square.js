import React from "react";
import handleStyle from "./handleStyle";

function Square(props) {
    let handleSquare = props.function;
    const value = props.data.value;
    const rowInd = props.data.rowInd;
    const colInd = props.data.colInd;

    const styleName = handleStyle(rowInd, colInd);

    return (
        <input
            type="number"
            value={value}
            className={`square ${styleName[0]} ${styleName[1]} ${styleName[2]}`}
            maxLength="1"
            onChange={(e) => {
                const val = e.target.value;
                if (/[1-9]/g.test(val) || e.target.value === "") {
                    handleSquare(e.target.value, rowInd, colInd);
                } else {
                    e.target.value = "";
                }
            }}
        />
    );
}

export default Square;
