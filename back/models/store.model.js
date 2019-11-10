const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema
const storeSchema = new Schema({
  name: {
    type: String,
    trim: true,
    require:true
  },
  
  address: { type: String, require:true },

  dishes:[{type: mongoose.Schema.ObjectId, ref: 'Dish'}],

  images: [{ type: String  }],

  evaluate: {
    clean:{type:Number},
    serve:{type:Number},
    food_quanlity:{type:Number},
    comfortable:{type:Number}
  },

  style: [{type: String}],
});

module.exports= mongoose.model('Store', storeSchema);