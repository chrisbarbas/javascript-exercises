const removeFromArray = function (array, ...args) {
    for (const element of args) {
        let index = array.indexOf(element);
        if (index >= 0) {
            array.splice(index, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;