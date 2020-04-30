const mongoose = require('mongoose');

var kullaniciIstekSchema = new mongoose.Schema({
    plaka: String,
    hız: String,
    mesafe: String,
    lat1: String,
    long1: String,
    lat2:String,
    long2:String,
    adres:String,
    adres2:String,
    tarih: String
});

var KullaniciIstek=mongoose.model('KullaniciIstek', kullaniciIstekSchema);
module.exports=KullaniciIstek;