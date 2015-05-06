module.exports = function(app) {
  var express = require('express');
  var productsRouter = express.Router();

  productsRouter.get('/', function(req, res) {
    res.send({
      'products': [
      {
        id: 1,
        name: 'Red stapler',
        price: 20
      },
      {
        id: 2,
        name: 'Extra wide Fancypants',
        price: 100
      },
      {
        id: 3,
        name: 'Birkenstock',
        price: 75
      },
      {
        id: 4,
        name: 'Smartwool Socks 3-pack',
        price: 199
      },
      {
        id: 5,
        name: 'HDMI Kabel 20m',
        price: 299
      },
      {
        id: 6,
        name: 'Beard Trimmer',
        price: 499
      },
      {
        id: 7,
        name: 'Sharkbait',
        price: 50
      },
      {
        id: 8,
        name: 'Linkbait Large',
        price: 99
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
