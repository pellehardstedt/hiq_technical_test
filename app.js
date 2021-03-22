const textService = require('./textService.js');
const counter = require('./counter.js');

const express = require('express');
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

app.post('/api/text', textService)