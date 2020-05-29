'use strict';

const process = require('process')
const express = require('express');
var os = require('os');
var fs = require('fs');


// Constants
const PORT = 8585;
const HOST = '0.0.0.0';

var content = 'Namaste - Bangalore ' + ' ' + os.hostname();

// App
const app = express();
app.get('/', (req, res) => {
  res.send(content);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
