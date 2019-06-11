const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const DEFAULT_PORT = 3000;

// Configure app with body parser to handle JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set port

const port = process.env.PORT || DEFAULT_PORT;

