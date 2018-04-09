module.exports = function arrCheck(arr) {
    return arr.map(num => num * num).filter(num => (num > 20));
};