module.exports = {
    squaresTest(array) {
        let squareArray = array.filter(number => Math.pow(number, 2) > 20);
        return squareArray.map(number => Math.pow(number, 2));
    }
};