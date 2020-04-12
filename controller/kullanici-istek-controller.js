const express = require('express');
const mongoose = require('mongoose');
var KullaniciIstek=mongoose.model("KullaniciIstek")

var router = express.Router();

router.get('/m', (req, res) => {
    KullaniciIstek.find({},    { 
        "tarih" : '1970-01-01T00:00:00.000Z'
    },(error,data)=>{
    if(error){
        throw error;
    }
    console.log(data)
})
  /*  KullaniciIstek.find((err, data) => {
        res.json(data);
       console.log(data)
    }
).sort({time: -1});*/
});


router.get('/list', (req, res) => {  
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


module.exports = router;