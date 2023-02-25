const sumAll = function (x, y) {
    if ((typeof x === 'number' && typeof y === 'number') && (x >= 0 && y >= 0)) {
        let min = x;
        let max = y;
        let sum = 0;

        if (x > y) {
            min = y;
            max = x;
        }
        for (let i = min; i <= max; i++) {
            sum += i;
        }
        return sum;
    }
    return 'ERROR';
};


// Do not edit below this line
module.exports = sumAll;