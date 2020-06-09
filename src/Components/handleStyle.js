function handleStyle(r, c) {
    const small = [1, 2, 4, 5, 7, 8];
    const big = [3, 6];
    const styleArr = [];

    if (small.includes(c)) {
        styleArr.push("leftsmall");
    } else if (big.includes(c)) {
        styleArr.push("leftbig");
    }

    if (small.includes(r)) {
        styleArr.push("topsmall");
    } else if (big.includes(r)) {
        styleArr.push("topbig");
    }

    if (small.includes(r) && big.includes(c)) {
        styleArr.push("moveup");
    }

    return styleArr;
}

export default handleStyle;
