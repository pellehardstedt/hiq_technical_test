async function counter(textCount){
    //make all words lower case
    textCount = textCount.toLowerCase()

    //split to separate words in the right places into an array
    words = textCount.split("\r\n").join(" ")
    words = words.split("\r").join(" ")
    words = words.split("\n").join(" ")
    words = words.split("_").join(" ")
    words = words.split(" ")

    let index = {}

    //loop over the array and input new words into the index object, and then up the count
    words.forEach(function(word){
        if(word){
            if(!(index.hasOwnProperty(word))){
                index[word] = 0
            }
            index[word]++
        }
    })
    //make the object into an array which we can sort
    var sortArray = [];
    for (var word in index) {
        sortArray.push([word, index[word]]);
    }
    //sort the array
    sortArray.sort((a, b) => {
        return b[1] - a[1];
    });
    //return the first element (the word, the count is the second) in the first element in the array (the first is the one with the highest count)
    return sortArray[0][0];
}

module.exports = counter