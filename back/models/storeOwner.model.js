const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema
const storeOwnerSchema = new Schema({
    id_user:{type: mongoose.Schema.ObjectId, ref: 'User'},
    id_store:{type: mongoose.Schema.ObjectId, ref: 'Store'}
});

module.exports= mongoose.model('storeOwner', storeOwnerSchema);