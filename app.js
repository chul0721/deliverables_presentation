const express = require('express');
const app = express();
const http = require('http');
const fs = require('fs');
let port = 5000;

app.use(express.static('public'));
app.get('/', (req, res) => {
    let index = fs.readFile('public/index.html', 'utf8', (err, data) => {
        return data;
    });
    app.send(index);
})
app.get('/favicon.ico', (req, res) => {
    res.writeHead(404);
    res.end("404 Error");
})
app.listen(port, () => {
    console.log(`Server on ${port}`)
})