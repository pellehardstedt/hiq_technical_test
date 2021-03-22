const counter = require("./counter.js");
var express = require("express");
var router = express.Router();

router.post("/api/text", async (req, res) => {
    try {
        if(!req.body) {
            res.send({
                status: false,
                message: "No file uploaded"
            });
        } else {
            let text = req.body.text;   

            wordAlterations = [];

            //the counter function returns the most used word in lower case letters
            theWord = await counter(text);

            //save lower case version of the word
            wordAlterations.push(theWord)

            //create the word with first letter uppercase
            wordArray = theWord.split("");
            wordArray[0] = wordArray[0].toUpperCase();
            //save the version with the first letter uppercase
            wordAlterations.push(wordArray.join(""));

            //save the all upper case version of the word
            wordAlterations.push(theWord.toUpperCase());

            //loop thru the 3 alterations
            for(let i = 0; i<wordAlterations.length; i++){
                text = splitting(text, wordAlterations[i])
            }

            //translate \n to html for line breaks
            text = text.split("\r\n").join("<br>");

            let dataToSend = {text: text};

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

function splitting(text, wordVersion){
    text = text.split(" " + wordVersion + " ").join(" foo"+wordVersion+"bar ");
    text = text.split(wordVersion + " ").join("foo"+wordVersion+"bar ");
    text = text.split(" " + wordVersion).join(" foo"+wordVersion+"bar");
    return text;
}

module.exports = router;