import { removeImpossibles, findImpossibles } from "./solvingFunctions";

function solve(g) {
    let solved = true;

    for (const r of g) {
        for (const s of r) {
            if (!s.value) {
                solved = false;
            }
        }
    }

    const grid = g.map((r) =>
        r.map((s) => {
            if (!s.value) {
                let possibles = s.possibles;
                let value = s.value;

                const impossibles = findImpossibles(s, g);

                possibles = removeImpossibles(possibles, impossibles);

                if (possibles.length < 2) {
                    value = possibles[0];
                }

                const updated = {
                    ...s,
                    value: value,
                    possibles: possibles,
                };
                return updated;
            } else if (s.possibles) {
                const updated = {
                    ...s,
                    possibles: [],
                };
                return updated;
            }
            return s;
        })
    );

    if (!solved) {
        return solve(grid);
    }

    return grid;
}

export default solve;
