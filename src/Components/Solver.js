import React, { useState } from "react";
import testgrid from "./vars";
import Grid from "./Grid";
import solve from "./solve";
import solveTest from "./solveTest";

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

    function handleSolve() {
        const solvedGrid = solve(gridArr, update);
        updateArr(solvedGrid);
    }

    function getInfo() {
        solveTest();
    }

    function update(g) {
        const grid = JSON.parse(JSON.stringify(g));
        updateArr(grid);
    }

    return (
        <div style={{ textAlign: "center" }}>
            <div className="grid">
                <Grid data={gridArr} function={handleSquare} />
            </div>
            <button className="solveButton" onClick={handleSolve}>
                Solve
            </button>
        </div>
    );
}

export default Solver;
