const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 7777;

app.get('/', (res, req) => {
    // res.send('1st experience');
    res.end('1st experience');
});

app.use(express.static('client'));


app.listen(port, () => console.log(`Server running on port ${port}`));