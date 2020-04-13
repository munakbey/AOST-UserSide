const mongoose = require('mongoose');

var aracBilgiSchema = new mongoose.Schema({
    plate: String,
    time: Date,
    camId:Number
});

var AracBilgi=mongoose.model('AracBilgi', aracBilgiSchema);
module.exports=AracBilgi;

