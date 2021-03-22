const express = require('express');
//const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(fileUpload({
    createParentPath: true
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json({limit:"10mb"}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.get('*', (req, res) => {
    res.redirect('/');
});

app.listen(8000, function(){
    console.log("Listening on port 8000")
});

app.post('/upload', async (req, res) => {
    //console.log(req.body)
    try {
        if(!req.body) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            let text = req.body.text;
            //console.log("text:")
            
            theWord = await counter(text)
            console.log("the word: " + theWord)
            wordArray = theWord[0].split("")
            wordArray[0] = wordArray[0].toUpperCase()
            let firstLetterUpper = wordArray.join("")
            let allUpperCase = theWord[0].toUpperCase()

            text = text.split(" " + theWord[0] + " ").join(" foo"+theWord[0]+"bar ") 

            text = text.split(firstLetterUpper + " ").join(" foo"+firstLetterUpper+"bar ") 

            text = text.split(allUpperCase + " ").join(" foo"+allUpperCase+"bar ") 


            text = text.split('\r\n').join('<br>') 

            let dataToSend = {text: text}
            //send response
            res.send({
                status: true,
                message: 'File is uploaded',
                data: {
                    body: dataToSend
                }
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

async function counter(textCount){
    textCount = textCount.toLowerCase()
    words = textCount.split('\r\n').join(' ')
    words = words.split('\r').join(' ')
    words = words.split('\n').join(' ')
    words = words.split('_').join(' ')
    words = words.split(' ')

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
    for(let i = 0; i< 10; i++){
        console.log(sortArray[i])
    }
    return sortArray[0]

}