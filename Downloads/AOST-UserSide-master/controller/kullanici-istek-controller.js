const express = require('express');
const mongoose = require('mongoose');
var KullaniciIstek=mongoose.model("KullaniciIstek")

var router = express.Router();

router.post('/', (req, res) => {
    insertRecord(req,res);
     
 
 });

function insertRecord(req,res){
    var data = new KullaniciIstek();
    data.plaka = req.body.plate;
    data.hız = "";
    data.mesafe = "";
    data.tarih = "";
    data.save((err,doc) => {
        if (!err)
            res.redirect('/list');
        
    });


}


 module.exports = router;