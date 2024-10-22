const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },

    runs : {
        type : Number,
        required : true
    },

    position : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('Player',playerSchema);