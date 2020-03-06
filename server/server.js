const debug = require('debug')('index');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const port = process.env.PORT || '1234';
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.static('public'))

app.listen(port, () => {
  debug(`Server listening on port: ${port}`);
})