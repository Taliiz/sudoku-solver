import { removeImpossibles, findImpossibles } from "./solvingFunctions";

function solveOne(s, g, r, c, update) {
    let updated;
    if (!s.value) {
        let possibles = s.possibles;
        let value = s.value;

        const impossibles = findImpossibles(s, g);

        possibles = removeImpossibles(possibles, impossibles);

        if (possibles.length < 2) {
            value = possibles[0];
            possibles = [];
        }

        updated = {
            ...s,
            value: value,
            possibles: possibles,
        };
    } else if (s.possibles) {
        updated = {
            ...s,
            possibles: [],
        };
    }

    const grid = g.map((row) =>
        row.map((square) => {
            if (square.rowInd === r && square.colInd === c) {
                return updated;
            }
            return square;
        })
    );

    update(grid);
}

export default solveOne;
