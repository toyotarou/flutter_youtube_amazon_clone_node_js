console.log('node starting!!');

const express = require('express');

const port = 3000;

const app = express();

app.listen(port, "0.0.0.0", () => {
    console.log('index.js display');

    console.log(`using port ${port}`);
});
