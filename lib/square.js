module.exports = function square(arr, callback) {
    const newArray = [];

    function isBigEnough(value) {
        return value >= 20;
    }
    
    for(let i = 0; i < arr.length; i++) {
        const squared = callback(arr[i]); 
        newArray.push(squared);
    }
    const filtered = newArray.filter(isBigEnough); 
    return filtered;
};