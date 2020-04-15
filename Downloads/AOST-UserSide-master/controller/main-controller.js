const express = require('express');
const mongoose = require('mongoose');
var AracBilgi=mongoose.model("AracBilgi");
var KullaniciIstek=mongoose.model("KullaniciIstek");
var router = express.Router();

router.get('/', function (req, res) {
    for (const key in req.query) {
        console.log(key, req.query[key])
      }
    res.render("get-user-input", {
        viewTitle: "Kameralar"
    });
})
/*
AracBilgi.find({},    { 
        "time" : 1.0
    },(error,data)=>{
    if(error){
        throw error;
    }
    console.log(data)
})
*/

router.get('/list', (req, res) => {
   
        console.log( req.query.plaka+"---")
      
        KullaniciIstek.find((err, data) => {
        if (!err) {
            res.render("list-result", {
                list: data
               
            } );console.log(data)
        }
        else {
            console.log('Error in camera list :' + err);
        }
    }
);
});

router.get('/plist', (req, res) => {
    KullaniciIstek
    .find({plate: req.query.plaka}, { 
        
    }, (err, doc) => {
        res.render("list-result", {
            list: doc
            
        });console.log(req.params.plaka+"**********");
    }).sort({time: -1});

});




module.exports = router;