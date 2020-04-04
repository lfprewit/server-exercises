const express = require('express');//is this needed here?
const app = express();
let counter = 100;

app.get('/value', function(req, res, next) {
    res.send(`The current value of the counter is: ${counter}`);
})

app.post('/increment', (req, res) => {
    counter ++;
    res.send(`You incremented the counter by 1. The counter value is now ${counter}`);
})

app.post('/decrement', (req, res) => {
    counter --;
    res.send(`You decremented the counter by 1. The counter value is now ${counter}`);
})

app.listen('3000', function() {
    console.log('Hello from our server');
})

