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

module.exports = router;