import React, { useState } from "react";
import testgrid from "./vars";
import Grid from "./Grid";
import solve from "./solve";
import solveTest from "./solveTest";

function Solver() {
    const [gridArr, updateArr] = useState(testgrid);
    const [row, setRow] = useState("");
    const [col, setCol] = useState("");

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
        const solvedGrid = solve(gridArr);
        updateArr(solvedGrid);
    }

    function getInfo() {
        solveTest(gridArr[row][col], gridArr);
    }

    return (
        <div style={{ textAlign: "center" }}>
            <div className="grid">
                <Grid data={gridArr} function={handleSquare} />
            </div>
            <button className="solveButton" onClick={handleSolve}>
                Solve
            </button>
            <div>
                <input
                    onChange={(e) => setRow(parseInt(e.target.value))}
                ></input>
                <input
                    onChange={(e) => setCol(parseInt(e.target.value))}
                ></input>
                <button onClick={getInfo}>get info</button>
            </div>
        </div>
    );
}

export default Solver;
