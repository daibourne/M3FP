const express = require('express');
const app = express();

const homeRoute = require('./routes/home');
const voteRoute = require('./routes/vote');
const addCharacter = require('./routes/addCharacter');
const rankingRoute = require('./routes/ranking');

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.use('/home', homeRoute);
app.use('/vote', voteRoute);
app.use('/addCharacter', addCharacter);
app.use('/ranking', rankingRoute);

const port = process.env.PORT || 3007;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});




// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html'});

//     res.write('<h1>Hello World</h1>');
//     res.end();
// });

// server.listen(port, () => {
//     console.log(`Node.js HTTP is running on port ${port}`);
// });

