function solve(g, solveOne, update) {
    const gridArr = g;

    for (const r of gridArr) {
        for (const c of r) {
            const row = c.rowInd;
            const col = c.colInd;
            solveOne(gridArr[row][col], gridArr, row, col, update);
        }
    }
}

export default solve;
