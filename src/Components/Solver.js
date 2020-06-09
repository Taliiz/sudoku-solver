import React, { useState } from "react";
import testgrid from "./vars";
import Grid from "./Grid";

function Solver() {
    const [gridArr, updateArr] = useState(testgrid);

    function handleSquare(value, rowInd, colInd, e) {
        let arr = gridArr.map((el) => {
            return el.map((o) => {
                if (o.rowInd === rowInd && o.colInd === colInd) {
                    const updatedValue = { ...o, value: value };
                    return updatedValue;
                }
                return o;
            });
        });
        updateArr(arr);
    }

    return (
        <div style={{ textAlign: "center" }}>
            <div className="grid">
                <Grid data={gridArr} function={handleSquare} />
            </div>
        </div>
    );
}

export default Solver;
