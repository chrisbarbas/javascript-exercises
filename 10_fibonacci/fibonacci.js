const fibonacci = x => {
    let num = parseInt(x);
    if (num < 0) {
        return 'OOPS';
    } else if (num === 1) {
        return 1;
    }
    let n1 = 0,
        n2 = 1,
        next_num, i;
    for (i = 0; i < num - 1; i++) {
        next_num = n1 + n2;
        n1 = n2;
        n2 = next_num;
    }
    return next_num;
}


// Do not edit below this line
module.exports = fibonacci;