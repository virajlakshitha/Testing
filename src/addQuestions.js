var express=require('express');
var app=express();
var fs=require('fs');

app.listen(8002,function (err) {
    console.log('Server is listening to port 8002');
});

app.get('/listQuestions',function (req,res) {
    fs.readFile(__dirname+"/"+"question.json",'utf8',function (err,data) {
        console.log(data);
        res.end();
    });
});