import Debug from 'debug';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import appRoutes from './controllers/routeController';

const port = process.env.PORT || '1234';
const app = express();
const routes = appRoutes();
const debug = Debug('app:server');

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.static('public'))
app.use('/routes', routes);

app.listen(port, () => {
  debug(`Server listening on port: ${port}`);
})
