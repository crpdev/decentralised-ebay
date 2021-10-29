var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    blockchainId: Number,
    name: String,
    category: String,
    ipfsImageHash: String,
    ipfsDescHash: String,
    startTime: Number,
    price: Number,
    condition: String,
    buyer: String
});

var ProductModel = mongoose.model('ProductModel', ProductSchema);
module.exports = ProductModel;