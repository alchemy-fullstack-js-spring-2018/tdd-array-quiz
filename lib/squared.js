function squared(array, callback) {
    const result = [];

    for(let i = 0; i < array.length; i++){
        result.push(callback(squared[i] * squared[i]));
    }
    return result;
}

module.exports = squared;