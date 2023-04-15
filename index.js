const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('my second server it is')
})

app.listen(port, () => {
    console.log(`My phones server is running on port: ${port}`);
})