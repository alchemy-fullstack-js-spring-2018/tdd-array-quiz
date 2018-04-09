function BigSquare(array) {

    // returns a new array that contains the square of the input numbers filtered to only contain those squares greater than 20.

    const squares = array.map(n => n * n);
    return squares.filter(n => n > 20);


}

module.exports = BigSquare;