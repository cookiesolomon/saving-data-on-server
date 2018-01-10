var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static('node_modules'));
app.use(express.static('public'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false }));  

var data = { name: "Hadas", job: "queen" };

fs.writeFile('test.txt', JSON.stringify(data), function (err) {
  if (err) throw err;
  else console.log('Data saved to file!');
});


app.get("/file", function(req, res){
    fs.readFile("test.txt", 'utf8', function(err, data){
      if (err) throw err;
      res.send(data);
    });
  });

app.post("/file", function(req, res){

    
    console.log(req.body);
    fs.writeFile('test.txt', JSON.stringify(req.body), function(err){
        if(err) throw err;
        else console.log('data saved to file');
    });

});

app.use(express.static('node_modules'));
app.listen(3000);  