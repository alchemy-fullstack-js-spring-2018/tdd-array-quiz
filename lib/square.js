module.exports = function square(arr) {
    const newArr = arr.map(num => num * num)
        .filter(num => num >= 25); 
    return newArr;
};