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
            className={`square ${styleName[0]} ${styleName[1]} ${styleName[2]}`}
            onKeyDown={(e) => {
                if (e.which !== 8 && (e.which < 97 || e.which > 105)) {
                    e.preventDefault();
                }
            }}
            onChange={(e) => {
                const val = e.target.value;
                if (val.length > 1) {
                    e.target.value = val[0];
                } else if (/[1-9]/g.test(val)) {
                    handleSquare(e.target.value, rowInd, colInd);
                } else {
                    e.target.value = "";
                }
            }}
        />
    );
}

export default Square;
