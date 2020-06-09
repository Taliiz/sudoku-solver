import React, { useState } from "react";
import testgrid from "./vars";
import Grid from "./Grid";

function Solver() {
    const [gridArr, updateArr] = useState(testgrid);

    function handleSquare(value, rowInd, colInd, e) {
        let arr = gridArr.map((el) => {
            if (el.rowInd === rowInd && el.colInd === colInd) {
                console.log(arr[rowInd][colInd]);
            }
            return el;
        });
        updateArr(arr);
    }

    return (
        <div style={{ textAlign: "center" }}>
            <div className="grid">
                <Grid data={gridArr} function={handleSquare} />
            </div>
            <div className="module"></div>
        </div>
    );
}

export default Solver;
