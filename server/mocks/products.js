module.exports = function(app) {
  var express = require('express');
  var productsRouter = express.Router();

  productsRouter.get('/', function(req, res) {
    res.send({
      'products': [
      {
        id: 1,
        name: 'LawnMower 1',
        price: 20
      },
      {
        id: 2,
        name: 'LawnMower 2',
        price: 30
      },
      {
        id: 3,
        name: 'LawnMower 3',
        price: 50
      },
      {
        id: 4,
        name: 'LawnMower 54',
        price: 80
      },
      {
        id: 5,
        name: 'LawnMower 33',
        price: 50
      },
      {
        id: 6,
        name: 'LawnMower 63',
        price: 50
      },
      {
        id: 7,
        name: 'LawnMower 73',
        price: 50
      },
      {
        id: 8,
        name: 'LawnMower 13',
        price: 50
      },]
    });
  });

  productsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  productsRouter.get('/:id', function(req, res) {
    res.send({
      'products': {
        id: req.params.id
      }
    });
  });

  productsRouter.put('/:id', function(req, res) {
    res.send({
      'products': {
        id: req.params.id
      }
    });
  });

  productsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/products', productsRouter);
};
