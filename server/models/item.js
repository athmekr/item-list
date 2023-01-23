const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
        description: String
})

module.exports = mongoose.model('Item', ItemSchema);