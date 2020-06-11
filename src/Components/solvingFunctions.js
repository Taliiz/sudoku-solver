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
    const srow = s.srow;
    const scol = s.scol;

    for (const r of grid) {
        for (const c of r) {
            if (
                (c.rowInd === row || c.square === sq || c.colInd === col) &&
                !iArr.includes(c.value)
            ) {
                iArr.push(c.value);
            }

            if (c.srow === srow || c.scol === scol) {
            }
        }
    }
    iArr.splice(0, 1);
    return iArr;
}
