import {
    removeImpossibles,
    findImpossibles,
    checkPossibles,
} from "./solvingFunctions";

function solve(g, update) {
    let solved = true;

    let grid = JSON.parse(JSON.stringify(g));

    for (const r of grid) {
        for (const s of r) {
            if (s.style) {
                delete grid[s.rowInd][s.colInd].style;
            }
        }
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let s = grid[i][j];

            if (!s.value) {
                solved = false;
                s.impossibles = findImpossibles(s, grid);
                s.possibles = removeImpossibles(s.possibles, s.impossibles);

                grid[i][j] = { ...s };

                if (s.possibles && s.possibles.length === 1) {
                    grid[i][j] = {
                        ...grid[i][j],
                        value: s.possibles[0],
                        style: "solved",
                    };
                    return grid;
                } else {
                    grid[i][j].possibles = checkPossibles(grid[i][j], grid);
                }
            }
        }
    }

    if (!solved) {
        return solve(grid);
    } else {
        return grid;
    }
}

export default solve;
