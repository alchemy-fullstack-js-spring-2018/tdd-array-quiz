module.exports = {
    squaresTest(array) {
        return array.filter(number => Math.pow(number, 2) > 20).map(number => Math.pow(number, 2));
    }
};