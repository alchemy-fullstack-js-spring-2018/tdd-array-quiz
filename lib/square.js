module.exports = function square(arr) {
    const squaredArray = arr.map(x => x * x);
    const filteredSquaredArray = squaredArray.filter(x => x > 20);
    
    return filteredSquaredArray;
};