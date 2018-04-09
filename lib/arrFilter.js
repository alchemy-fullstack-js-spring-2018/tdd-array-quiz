module.exports = function arrFilter(arr){
    return arr.map(n => n ** 2).filter(n => n > 20);
};