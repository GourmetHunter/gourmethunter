const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema
const dishEvaluationSchema = new Schema({

    user_id:{type: mongoose.Schema.ObjectId, ref: 'User'},
    
    dish_id:{type: mongoose.Schema.ObjectId, ref: 'Dish'},

    evaluate: {
        salubrious:{type:double},
        setup:{type:Number},
        satisfied:{type:Number},
        price:{type:Number}
    },

    date: {
        type: Date,
        default: Date.now
    }
});

module.exports= mongoose.model('DishEvaluation', dishEvaluationSchema);