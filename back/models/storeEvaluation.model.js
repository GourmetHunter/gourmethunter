const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema
const storeEvaluationSchema = new Schema({

    user_id:{type: mongoose.Schema.ObjectId, ref: 'User'},
    
    store_id:{type: mongoose.Schema.ObjectId, ref: 'Store'},

    evaluate: {
        clean:{type:Number},
        serve:{type:Number},
        food_quality:{type:Number},
        comfortable:{type:Number}
    },

    date: {
        type: Date,
        default: Date.now
    }
});

module.exports= mongoose.model('StoreEvaluation', storeEvaluationSchema);