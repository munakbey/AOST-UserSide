const express = require('express');
const mongoose = require('mongoose');
var KullaniciIstek=mongoose.model("KullaniciIstek")

var router = express.Router();
var topHız=0;

router.post('/', (req, res) => {
    insertRecord(req,res);
 });

function insertRecord(req,res){
    var data = new KullaniciIstek();
    data.plaka = req.body.plaka;
    data.hız = "";
    data.mesafe = "";
    data.lat1 = "";
    data.long1 = "";
    data.lat2 = "";
    data.long2 = "";
    data.adres = "";
    data.adres2 = "";
    data.tarih = "";
    data.save((err,doc) => {
        if (!err)
        //    res.redirect('/klnIstek/gg');
            listele(req,res);
    });


}
var i=0;
function listele(req,res){

//sleep(9000);

KullaniciIstek.aggregate([
    {
        $group: {
            _id: null,
            "hız": { $sum: '$hız'  },
            "mesafe":{$sum: '$mesafe'}
        }
    }
]).exec()
.then((mesafe) => {
   
  




KullaniciIstek
.find({plaka: req.body.plaka  }, { 
    
}, (err, doc) => {
    res.render("list-result", {  
        list: doc,
        plaka:doc[0].plaka,
        hız:mesafe[0].hız,
        mesafe:mesafe[0].mesafe    ,
    }); 
 /*   for(var i=0; i<doc.length; i++){
         topHız=topHız+doc[i].mesafe
         console.log(topHız+"-??-");
    }*/
    
  //  console.log(req.body.plaka+"----"+topHız);
}).sort({time: -1});
console.log(mesafe);
})
.catch((err) => {
  throw err;
});
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

router.get('/map/:lat1/:lat2/:long1/:long2', function (req, res) {
    res.render("map", {
         x1: req.params.lat1,
         y1: req.params.long1,
         x2: req.params.lat2,
         y2: req.params.long2
    });
    console.log(req.params.lat1+"-"+req.params.long1+"-"+req.params.lat2+"-"+req.params.long2 )
})


 module.exports = router;