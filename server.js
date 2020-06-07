const express = require('express');
const app = express();

const fs = require('fs');
const cupweights = JSON.parse(fs.readFileSync('./cupweights.json', 'utf8'));


app.get('/', function (req, res) {
  res.redirect("/static/convert")
});

app.get("/api/cupweights", function (req, res) {
  return res.send(cupweights)
})

app.get("/api/cupweights/:ingredient", function (req, res) {
  let density = cupweights[req.params["ingredient"]]
  let ingredient = req.params["ingredient"]
  let response = {
    ingredient:density
  }
  return res.send(response)
})

app.listen(process.env.PORT || 8080);

app.use('/static', express.static('public')) 
