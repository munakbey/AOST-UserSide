const express = require('express');
const mongoose = require('mongoose');
var AracBilgi=mongoose.model("AracBilgi")
var Kamera=mongoose.model("Kamera")

var router = express.Router();

router.get('/list', (req, res) => {
    Kamera.find((err, data) => {
        res.json(data);
       console.log(data)
    }
).sort({time: -1});
});

router.get('/list/id/:camId', (req, res) => {
    Kamera
    .find({camId: req.params.camId}, { 
        
    }, (err, doc) => {
        res.json(doc);
      console.log(doc+"####"+res);
    }).sort({time: -1});

});

router.post("/", function(req, res, next){
 
    Kamera({
        camId: req.body.camId,
        lat: req.body.lat,
        long: req.body.long,
    }).save().then(() => {
        res.json("Kaydetme İşlemi Başarılı.");
    }).catch((err) => {
        res.json("Kaydetme İşleminde Hata Oluştu.");
    });
});

module.exports = router;