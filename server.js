const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const DEFAULT_PORT = 3000;

// Configure app with body parser to handle JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set port

const port = process.env.PORT || DEFAULT_PORT;

// Set router

const router = express.Router();

app.use('/api/v1', router);

router.use((req, res, next) => {
  console.log('FYI... There is some processing currently going down...');
  next();
});

router.get('/', (req, res) => {
  res.json({ message: 'API is Working!' });
})

router.get('/data', (req, res) => {
  res.send({
    status: 'ok',
    statusCode: 200,
    body: {
      name: 'Andreas',
      description: 'API Response'
    }
  })
})

app.listen(port);
console.log('Server listening on port ' + port);
