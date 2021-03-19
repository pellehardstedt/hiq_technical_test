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
            console.log(theWord[0])
            // for(let i = 0; i<theWord[1]+1; i++){
            //     text = text.replace(theWord[0], "lalala")
            // }
            for(let i = 0; i<theWord[1]+1; i++){
                text = text.replace(" " + theWord[0] + " ", "foo"+theWord[0]+"bar")
            }
            //text = text.replace(theWord[0], "lalala")
            console.log("text:")
            console.log(text)

            let dataToSend = {text: text}
            //send response
            res.send({
                status: true,
                message: 'File is uploaded',
                data: {
                    body: JSON.stringify(dataToSend)
                }
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

async function counter(text){
    words = text.split('\r').join(' ')
    words = words.split('\n').join(' ')
    words = words.split(' ')
    //console.log(words)

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
    return sortArray[0]

}