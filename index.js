const express = require('express');
const mongoose = require('mongoose');
const app = express();


require("dotenv").config();
const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI;

mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('connected to mongo: ' + MONGO_URI);
    })
    .catch((err) => {
        console.log('Error connecting to mongo: ' + err);
    });

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

app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
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

