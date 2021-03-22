const counter = require('./counter.js');
var express = require('express');
var router = express.Router();

router.post('/api/text', async (req, res) => {
    try {
        if(!req.body) {
            res.send({
                status: false,
                message: "No file uploaded"
            });
        } else {
            let text = req.body.text;   

            theWord = await counter(text);

            console.log("the word: " + theWord);
            wordArray = theWord[0].split("");
            wordArray[0] = wordArray[0].toUpperCase();
            let firstLetterUpper = wordArray.join("");
            let allUpperCase = theWord[0].toUpperCase();

            text = text.split(" " + theWord[0] + " ").join(" foo"+theWord[0]+"bar ");

            text = text.split(firstLetterUpper + " ").join(" foo"+firstLetterUpper+"bar ");

            text = text.split(allUpperCase + " ").join(" foo"+allUpperCase+"bar ");

            text = text.split("\r\n").join("<br>");

            let dataToSend = {text: text};
            //send response
            res.send({
                status: true,
                message: "File is uploaded",
                data: {
                    body: dataToSend
                }
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;