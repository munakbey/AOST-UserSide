const express = require('express');
const mongoose = require('mongoose');
var KullaniciIstek=mongoose.model("KullaniciIstek")
var Kamera=mongoose.model("Kamera")
var AracBilgi=mongoose.model("AracBilgi")

var router = express.Router();
var topHız=0 ;
var mplaka;
var ortalamaSure;

    router.post('/', (req, res) => {
        insertRecord(req,res);
    });

function insertRecord(req,res){
    var data = new KullaniciIstek();
    data.plaka = req.body.plaka;
    data.hız = 0;
    data.mesafe = 0;
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

router.get('/map/:plaka/:lat1/:lat2/:long1/:long2', function (req, res) {
    res.render("map", {
         x1: req.params.lat1,
         y1: req.params.long1,
         x2: req.params.lat2,
         y2: req.params.long2
    });
    mplaka=req.params.plaka;
    console.log(req.params.lat1+"-"+req.params.long1+"-"+req.params.lat2+"-"+req.params.long2 )
})


router.post('/listt/', (req, res) => {
    kaydetKamera(req,res); 
 });

function kaydetKamera(req,res){

    Kamera
    .find({}, { 
    }, (err, doc) => {
    //  console.log(doc+"####"+res);

    var newCamId=doc;  
    
    console.log(req.body.lat1+" *+*"+req.body.long1+" "+req.body.lat2+" "+req.body.long2+" - "+mplaka);
    var data = new Kamera();

    data.camId = newCamId+1;
    data.lat = req.body.lat1;
    data.long = req.body.long1;

    data.save((err,doc) => {
        if (!err)
            console.log("Kamera Eklendi")
    });

    var data = new AracBilgi();
    data.plate = mplaka;
    data.camId = newCamId+1;
    data.time = "2020-05-05T22:25:13.003+00:00";
    data.save((err,doc) => {
        if (!err)
             console.log("AracBilgi Eklendi")
            //listele(req,res);
    });

    KullaniciIstek
    .find({plaka: mplaka  }, { 
    }, (err, doc) => {
        res.render("list-result", {  
            list: doc,
            
        }); console.log(doc[0].mesafe+"++++++"+mplaka)
        
        ortalamaSure=(2222222)/doc[0].hız // x2=apiden gelmeli

    
            AracBilgi
            .find({plate: mplaka  }, { 
            }, (err, doc) => {
                res.render("list-result", {  
                    list: doc,       
                }); 
                
                var dbDate=doc[0].time;
                var seconds=ortalamaSure*3600; //saniyeye çeviriyoruz
                var parsedDate = new Date(Date.parse(dbDate))
                var newDate = new Date(parsedDate.getTime() + (1000 * seconds))

                console.log(formatDate(newDate)+ "<---")
                console.log(doc+" $$$$"+mplaka)
                
            }).sort({time: 1}).limit(1)
}).sort({mesafe:-1}).limit(1)

}).count();

}

        
    function formatDate(date){
        return ('{0}-{1}-{3} {4}:{5}:{6}').replace('{0}', date.getFullYear()).replace('{1}', date.getMonth() + 1).replace('{3}', date.getDate()).replace('{4}', date.getHours()).replace('{5}', date.getMinutes()).replace('{6}', date.getSeconds())
    }


 module.exports = router;