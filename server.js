const express = require('express');
const path = require('path');
const Rollbar = require('rollbar');
// post server item access token
let rollbar = new Rollbar({
    accessToken: '01511a28414a4c379888e0ff72bfec30', 
    captureUncaught: true,
    captureUnhandledRejections: true
});
const app = express();
app.use(express.json());

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '/public/index.html'))
    rollbar.info('html file served successfully')
});

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '/public/styles.css'))
    rollbar.info('styling successfully connected')
});

app.use(rollbar.errorHandler());

const port = process.env.PORT || 4545;

app.listen(port, () => console.log(`Take us to ${port}`));

