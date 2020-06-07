import React, { useState } from "react";
import testgrid from "./vars";
import Grid from "./Grid";

function Solver() {
    const [gridArr, updateArr] = useState(testgrid);

    function handleSquare(value, rowInd, colInd) {
        updateArr((arr) => {
            console.log("value before changing", arr[rowInd][colInd]);
            const data = arr;
            data[rowInd][colInd].value = value;
            console.log("value after changing", arr[rowInd][colInd]);

            return data;
        });
    }

    return (
        <div style={{ textAlign: "center" }}>
            <Grid data={gridArr} function={handleSquare} />
        </div>
    );
}

export default Solver;
