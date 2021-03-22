async function counter(textCount){
    textCount = textCount.toLowerCase()
    words = textCount.split("\r\n").join(" ")
    words = words.split("\r").join(" ")
    words = words.split("\n").join(" ")
    words = words.split("_").join(" ")
    words = words.split(" ")

    let index = {}

    words.forEach(function(word){
        if(word){
            if(!(index.hasOwnProperty(word))){
                index[word] = 0
            }
            index[word]++
        }
    })
    var sortArray = [];
    for (var word in index) {
        sortArray.push([word, index[word]]);
    }
    
    sortArray.sort((a, b) => {
        return b[1] - a[1];
    });
    
    return sortArray[0][0];
}

module.exports = counter