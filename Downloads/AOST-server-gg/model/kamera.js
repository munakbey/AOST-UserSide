const mongoose = require('mongoose');

var kameraSchema = new mongoose.Schema({
    camId: Number,
    lat: String,
    long:String
});

var Kamera=mongoose.model('Kamera', kameraSchema);
module.exports=Kamera;