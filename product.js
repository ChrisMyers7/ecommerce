var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
  title: {
    type: String,
    required: true,
    index: true,
    unique: true

  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  }
})

var Product = mongoose.model('Product', productSchema);

module.exports = Product
