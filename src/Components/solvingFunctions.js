export function removeImpossibles(p, i) {
    const pArr = [];

    for (const n of p) {
        if (!i.includes(n)) {
            pArr.push(n);
        }
    }

    return pArr;
}

export function findImpossibles(s, g) {
    const sq = s.square;
    const row = s.rowInd;
    const col = s.colInd;
    const grid = g;
    const iArr = [];

    for (const r of grid) {
        for (const c of r) {
            if (c.square === sq && !iArr.includes(c.value)) {
                iArr.push(c.value);
            }

            if (c.rowInd === row && !iArr.includes(c.value)) {
                iArr.push(c.value);
            }

            if (c.colInd === col && !iArr.includes(c.value)) {
                iArr.push(c.value);
            }
        }
    }
    return iArr;
}

export function checkPossibles(s, g) {
    const sq = s.square;
    const row = s.rowInd;
    const col = s.colInd;
    const grid = JSON.parse(JSON.stringify(g));
    let possibles = JSON.parse(JSON.stringify(s.possibles));
    const impossibles = [];
    const totalPossibles = [];

    for (const r of grid) {
        for (const sqr of r) {
            if (
                sqr.square === sq &&
                !sqr.value &&
                !(sqr.rowInd === row && sqr.colInd === col)
            ) {
                for (const n of sqr.possibles) {
                    if (!totalPossibles.includes(n)) {
                        totalPossibles.push(n);
                    }
                }
            }
        }
    }

    for (const n of possibles) {
        if (!totalPossibles.includes(n)) {
            possibles = [n];
        }
    }
    return possibles;
}
