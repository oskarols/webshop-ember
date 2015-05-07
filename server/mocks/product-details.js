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

    var PLACEHOLDER_DESCRIPTION = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    var details = {
      1: {
        description: PLACEHOLDER_DESCRIPTION
      },
      2: {
        description: PLACEHOLDER_DESCRIPTION
      },
      3: {
        description: PLACEHOLDER_DESCRIPTION
      },
      4: {
        description: PLACEHOLDER_DESCRIPTION
      },
      5: {
        description: PLACEHOLDER_DESCRIPTION
      },
      6: {
        description: PLACEHOLDER_DESCRIPTION
      },
      7: {
        description: PLACEHOLDER_DESCRIPTION
      },
      8: {
        description: PLACEHOLDER_DESCRIPTION
      },
      9: {
        description: PLACEHOLDER_DESCRIPTION
      },
      10: {
        description: PLACEHOLDER_DESCRIPTION
      },
      11: {
        description: PLACEHOLDER_DESCRIPTION
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
