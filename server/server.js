const debug = require('debug')('index');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const appRoutes = require('./controllers/routeController')();

const port = process.env.PORT || '1234';
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.static('public'))
app.use('/routes', appRoutes);

app.listen(port, () => {
  debug(`Server listening on port: ${port}`);
})
