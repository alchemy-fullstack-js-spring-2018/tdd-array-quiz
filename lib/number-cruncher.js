module.exports = function numberCruncher(array) {
    return array.filter(x => x < -4 || x > 4).map(x => x * x);
};