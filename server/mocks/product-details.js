module.exports = function(app) {
  var express = require('express');
  var productDetailsRouter = express.Router();

  productDetailsRouter.get('/', function(req, res) {
    res.send({
      'product-details': []
    });
  });

  productDetailsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  productDetailsRouter.get('/:id', function(req, res) {
    var id = req.params.id;

    var details = {
      1: {
        description: 'foo bar baz'
      },
      2: {
        description: 'baz foo bar'
      }
    };

    var productDetails = details[id];

    res.send({
      'product-details': {
        id: req.params.id,
        description: productDetails.description
      }
    });
  });

  productDetailsRouter.put('/:id', function(req, res) {
    res.send({
      'product-details': {
        id: req.params.id
      }
    });
  });

  productDetailsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/product_details', productDetailsRouter);
};
