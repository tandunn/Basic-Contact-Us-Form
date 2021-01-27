const express = require('express');
const fs = require('fs');
const app = express(); 
const port = 8080;

app.use(express.static('public'));
app.use(express.urlencoded({
    extended: true
}));

app.post('/', function(req, res) {
    let data = "firstName: " + req.body.firstName + 
               "\nlastName: " + req.body.lastName +
               "\nemail: " + req.body.email +
               "\nmessage: " + req.body.message;
    fs.writeFile('response.txt', data, function(err, result) {
        if(err)
            console.log('error', err);
    });
    res.send("Form Submitted!");
});

app.listen(port, () => {
    console.log(`ContactUsForm app listening on port ${port}!`);
});