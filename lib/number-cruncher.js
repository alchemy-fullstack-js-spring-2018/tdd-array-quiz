module.exports = function numberCruncher(array) {
    // either line below should work
    // return array.filter(x => x < -4 || x > 4).map(x => x * x);
    return array.map(x => x * x).filter(xSquared => xSquared > 20);
};