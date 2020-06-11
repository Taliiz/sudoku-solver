import { removeImpossibles, findImpossibles } from "./solvingFunctions";

function solve(g) {
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
            }
            return s;
        })
    );
    return grid;
}

export default solve;
