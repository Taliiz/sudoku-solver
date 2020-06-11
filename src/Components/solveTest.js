import { removeImpossibles, findImpossibles } from "./solvingFunctions";

function solveTest(s, g) {
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
        console.log(updated);
    } else if (s.possibles) {
        const updated = {
            ...s,
            possibles: [],
        };
        console.log(updated);
    }
}

export default solveTest;
