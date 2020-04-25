const mongoose = require('mongoose');
var AracBilgi=require("./aracBilgi")
var Kamera=require("./kamera")
var KullaniciIstek=require("./kullaniciIstek")

mongoose.connect('mongodb+srv://munakbey:admin@cluster0-br351.mongodb.net/test?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true 
    }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

var arac1=new KullaniciIstek({
    plaka: "String",
    hız:"String",
    mesafe: "String",
    tarih: "2018-05-19T16:22:00.000+0000"
})
arac1.save((error)=>{
    if(error){
        throw error;
    }
    console.log("saved!!!!!")
})

/*
Camera.find({},(error,data)=>{
    if(error){
        throw error;
    }
    console.log(data)
})*/


require('./aracBilgi');
require('./kamera');
require('./kullaniciIstek');