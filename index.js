'use strict';
const express = require('express');
const app = express();

const debug = (res, resp, next) => {
    console.log(`Debug information:${res.method} ${res.url} ${resp.statusCode}`);
    next();
};

app.use(debug);

app.get('/', (req, res) => {
    console.log(`Debug infor: ${req.url}`);
    res.send('<h1>URL: / , Hello Node.js (AppService V1)</h1>');
});

app.get('/json', (req, res) => {
    console.log(`Debug infor: ${req.url}`);
    res.json({
        message: 'Hello Node.js (AppService V1)',
        status: 'success'
    });
});

const port = process.env.PORT || 3000;
app.listen(port, (err) => {
    if (err) {
        console.error(err);
    }
    console.log(`Server is running on port ${port}`);
});