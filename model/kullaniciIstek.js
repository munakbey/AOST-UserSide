const mongoose = require('mongoose');

var kullaniciIstekSchema = new mongoose.Schema({
    plaka: String,
    hız: String,
    mesafe: String,
    tarih: String
});

var KullaniciIstek=mongoose.model('KullaniciIstek', kullaniciIstekSchema);
module.exports=KullaniciIstek;