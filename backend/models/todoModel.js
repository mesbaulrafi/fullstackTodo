const mongoose = require('mongoose');
const {Schema} = mongoose


const todoSchema = new Schema({

    task:
    {
        type: String,
        required : true
    },
    status: {
        type: String,
        enum:['pending','active','block'],
        default : 'pending'
    },
    priority:{
        type:String,
        enum: ['low','medium','high'],
        required : true
    },

    path:{
        type:String,
        
    }

})



module.exports = mongoose.model('Todo',todoSchema)