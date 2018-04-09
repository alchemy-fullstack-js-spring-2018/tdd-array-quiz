function squares(array){
    return array.map(n => n * n).filter(n => n >= 20);
}

module.exports = squares;