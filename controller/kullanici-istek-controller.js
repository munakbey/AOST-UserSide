const express = require('express');
const mongoose = require('mongoose');
var KullaniciIstek=mongoose.model("KullaniciIstek")
var Kamera=mongoose.model("Kamera")
var AracBilgi=mongoose.model("AracBilgi")

var router = express.Router();
var topHız=0 ;
var mplaka;
var ortalamaSure;
var ortalamaHiz;
var Distance = require('geo-distance');
var store = require('store')
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

    x1= req.params.lat1;
    y1= req.params.long1;
    x2= req.params.lat2;
    y2= req.params.long2;
   /* mplaka=req.params.plaka;
    console.log(req.params.lat1+"-"+req.params.long1+"-"+req.params.lat2+"-"+req.params.long2 )*/
})

router.get('/ekle/:plaka/', function (req, res) {
    res.render("add-cam", {
        plaka:req.params.plaka
    });
     mplaka=req.params.plaka;
    console.log(req.body.plaka+" +++ "+ mplaka)
})

router.post('/listt/', (req, res) => {
 // kameraKaydetme(req,res,req.body.lat1,req.body.long1);
  //kameraKaydetme(req,res,req.body.lat2,req.body.long2); 
 ortalamaHızIslem(req,res); 

 });

function ortalamaHızIslem(req,res){

    Kamera
    .find({}, { 
    }, (err, doc) => {
        if(!err){
    //  console.log(doc+"####"+res);

    var newCamId=doc;  
    
    var data = new Kamera();

    data.camId = newCamId+1;
    data.lat =req.body.lat1;
    data.long =req.body.long1;

    data.save((err,doc) => {
        if (!err)
            console.log("Kamera Eklendi")
        else{
            console.log("Hata!!");
        }
    });

    var mdata = new AracBilgi();
    console.log(mplaka+"%%%%%%%%%%%5 "+req.params.plaka)
    mdata.plate = mplaka
    mdata.time ="2020-05-12T22:44:53.378+00:00"
    mdata.camId =newCamId+1

    mdata.save((err,doc) => {
        if (!err)
            console.log("Kamera Eklendi")
        else{
            console.log("Hata!!");
        }
    });


   /* KullaniciIstek
    .find({plaka: mplaka  }, { 
    }, (err, doc) => {
        if(!err){
        res.render("list-result", {  
            list: doc,
            
          }); console.log(doc[0].mesafe+"++++++"+mplaka)
        
        console.log(req.body.lat1+" *+*"+req.body.long1+" "+req.body.lat2+" "+req.body.long2+" - "+mplaka);
        //console.log('' + Distance('50 km').human_readable('customary'));

        // https://www.latlong.net/place/oslo-norway-14195.html: Oslo, Norway, Latitude and longitude coordinates are: 59.911491, 10.757933
        var loc1 = {   
          lat: req.body.lat1,
          lon: req.body.long1
        };
        var loc2 = {
          lat: req.body.lat2,
          lon: req.body.long2
        };
        var loc1Toloc2 = Distance.between(loc1, loc2);

        
        ortalamaSure=( parseFloat(loc1Toloc2.human_readable()))/parseFloat(doc[0].hız); // x2=apiden gelmeli = t2
        ortalamaHiz=parseFloat(loc1Toloc2.human_readable())/ortalamaSure;
      
        console.log(doc[0].hız + '->' +  " -> " + parseFloat(ortalamaSure) + " -> " + parseInt(loc1Toloc2.human_readable()));
        console.log("################### mesafe:"+parseFloat(loc1Toloc2.human_readable())/ortalamaSure + " ******* " + parseFloat(loc1Toloc2.human_readable()) + " t2:"+ortalamaSure +" v1: "+parseFloat(doc[0].hız));
        sleep(3000)
        console.log(mplaka+" < ##")
        
        router.get('http://localhost:3001/', function (req, res) {
            console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%5");
        })

    }
}).sort({mesafe:-1}).limit(1)*/

}
}).count();  

}
    


function kameraKaydetme(req,res,prm1,prm2){
    Kamera
    .find({}, { 
    }, (err, doc) => {
        if(!err){
    //  console.log(doc+"####"+res);

    var newCamId=doc;  
    
    var data = new Kamera();

    data.camId = newCamId+1;
    data.lat =prm1 //req.body.lat1;
    data.long =prm2 //req.body.long1;

    data.save((err,doc) => {
        if (!err)
            console.log("Kamera Eklendi")
        else{
            console.log("Hata!!");
        }
    });

        }
 }).count();  
}

function formatDate(date){
     return ('{0}-{1}-{3} {4}:{5}:{6}').replace('{0}', date.getFullYear()).replace('{1}', date.getMonth() + 1).replace('{3}', date.getDate()).replace('{4}', date.getHours()).replace('{5}', date.getMinutes()).replace('{6}', date.getSeconds())
}

 module.exports = router;