const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema
const dishSchema = new Schema({
    id_store:{type: mongoose.Schema.ObjectId, ref: 'Store'},
    
    name: {
        type: String,
        trim: true,
        require:true
    },

    images: [{ type: String  }],

    evaluate: {
        salubrious:{type:double},
        setup:{type:Number},
        satisfied:{type:Number},
        price:{type:Number}
    },

    category: [{type: String}],
});

module.exports= mongoose.model('Dish', dishSchema);