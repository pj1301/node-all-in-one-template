import express from 'express';

const routes = express.Router();

const router = () => {
  routes.route('/test')
    .get((req, res) => {
      res.status(200).send({ message: 'Successfully reached the routes controller'  });
    });

  return routes;
}

module.exports = router;
