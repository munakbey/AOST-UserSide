const express = require('express');
const mongoose = require('mongoose');
var KullaniciIstek=mongoose.model("KullaniciIstek")

var router = express.Router();

router.post('/', (req, res) => {
    insertRecord(req,res);
 });

function insertRecord(req,res){
    var data = new KullaniciIstek();
    data.plaka = req.body.plaka;
    data.hız = "";
    data.mesafe = "";
    data.tarih = "";
    data.save((err,doc) => {
        if (!err)
        //    res.redirect('/klnIstek/gg');
            listele(req,res);
    });


}
function listele(req,res){

//   sleep(9000);
KullaniciIstek
.find({plaka: req.body.plaka}, { 
    
}, (err, doc) => {
    res.render("list-result", {
        list: doc
        
    });console.log(req.body.plaka+"**********");
}).sort({time: -1});


}
router.get('/list', (req, res) => {
       listele(req,res);
});


function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

 module.exports = router;
