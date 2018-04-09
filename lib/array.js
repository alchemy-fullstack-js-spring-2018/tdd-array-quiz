module.exports = {
    map(array, callback){
        let results = [];
        results.length = array.length;
        for(let i = 0; i < array.length; i++) {

            results[i] = callback(array[i]);
        }
        return results ;
    },
};


