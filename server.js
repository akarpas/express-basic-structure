const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Configure app with body parser to handle JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
