/* Imports */
const express = require('express');
const handler = require('../ex2/ex2_fs');
// import {Container} from 'ex2_fs.js'; ** Type Module Model

/* Controllers */
const app = express();
const PORT = 8080;
let foo = new handler('./products.txt');

/* Server messages */
const server = app.listen(PORT, () => {
    console.log(`Server issue by Express.js ready, listen on port ${server.address().port}.`);
});

/* Error handler */
server.on('error', error => console.log(`Error: ${error}`));

let cover = {
    institute: 'Coderhouse.',
    module: 'Backend.',
    professor: 'De Ritis, Kevin.',
    tutor: 'Gil Amoedo, Tomás.',
    student: 'Romero, Lucas José Gabriel.',
    mainStyle: 'width: 550px; border: 1px solid greenyellow; border-radius:20px; margin-left: 450px; margin-top: 100px',
    style: 'color:darkgreen; font-size:25px; padding: 5px'
}

/* Petitions Handlers */
app.get('/', (req, res) => {
    res.send(`
            <div style="${cover.mainStyle}">
                <h1 style="${cover.style}; text-align: center">Challenge 3</h1>

                <p style="${cover.style}">Institute: ${cover.institute}</p>
                <p style="${cover.style}">Module: ${cover.module}</p>
                <p style="${cover.style}">Professor: ${cover.professor}</p>
                <p style="${cover.style}">Tutor: ${cover.tutor}</p>
                <p style="${cover.style}">Student: ${cover.student}</p>
            </div>
        `);
});
app.get('/products', (req, res) => {
    foo.getAll().then( (data) => {
        console.log(data);
        res.send(data);
    })
});
app.get('/randomProduct', (req, res) => {
    res.send();
});