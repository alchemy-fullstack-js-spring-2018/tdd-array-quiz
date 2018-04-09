const highSquares = array => {
    
    return array.map(n => n * n).filter(n => n > 20);
};

module.exports = highSquares;