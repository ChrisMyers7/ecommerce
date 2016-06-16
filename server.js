var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
// var mongojs = require('mongojs');
// var ObjectId = mongojs.ObjectId
var mongoose = require('mongoose');


var app = express();
mongoose.connect('mongodb://localhost/mongoose-ecommerce');

var ProductModel = require('./product')


var corsOptions = {
  origin: 'http://localhost:3000'
}



// var db = mongojs('ecommerce');

// var productsColl = db.collection('productsColl')


// app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(express.static(__dirname + '/public'))
app.post('/api/products', function(req, res, next) {
    // productsColl.insert(req.body, function(err, product) {
    //     if (!err) {
    //       res.json(product)
    //     } else {
    //       res.status(500).json(err)
    //     }
    // })
    req.body.price = Number(req.body.price)
    ProductModel.create(req.body, function(err, savedProduct) {

      if (err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(savedProduct);
      }
    })
})

app.get('/api/products', function(req, res, next) {
  // productsColl.find(req.query, function(err, products) {
  //   if (!err) {
  //     res.json(products)
  //   } else {
  //     res.status(500).json(err)
  //   }
  // })
  ProductModel.find(function(err, products) {
    if (err) {
      res.status(500)
    } else {
      res.status(200).json(products);
    }
  })
})

app.get('/api/products/:title', function(req, res, next) {
  // var idObj = {
	// 	_id: ObjectId(req.params.id)
	// };
  // console.log(req.params.id)
  // productsColl.findOne(idObj, function(err, product) {
  //   if (!err) {
  //     res.json(product)
  //   } else {
  //     res.status(500).json(err)
  //   }
  // })
  ProductModel.find({ title: req.params.title }, function(err, product) {
    if (err) {
      res.status(500)
    } else {
      res.status(200).json(product)
    }
  })
})

app.put('/api/products/:title', function(req, res, next) {
  // var idObj = {
	// 	_id: ObjectId(req.params.id)
	// };
  // console.log(req.params.id)
  // productsColl.update(idObj, {$set: {name: req.body.name}}, function(err, product) {
  //   if (!err) {
  //     res.json(product)
  //   } else {
  //     res.status(500).json(err)
  //   }
  // })
  req.body.price = Number(req.body.price)
  ProductModel.update({title: req.params.title}, req.body, function(err, product) {
    if (err) {
      res.status(500)
    } else {
      res.status(200).json(product)
    }
  })
})

app.delete('/api/products/:title', function(req, res, next) {
  // var idObj = {
	// 	_id: ObjectId(req.params.id)
	// };
  // console.log(req.params.id)
  // productsColl.remove(idObj, function(err, product) {
  //   if (!err) {
  //     res.json(product)
  //   } else {
  //     res.status(500).json(err)
  //   }
  // })
  ProductModel.remove({title: req.params.title}, function(err, product) {
    console.log(req.params.title);
    if (err) {
      res.status(500)
    } else {
      res.status(200).json(product)
    }
  })
})




var port = 3000
app.listen(port, function() {
  console.log('Hey!! Listening... port: ' + port)
})
