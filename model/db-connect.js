const mongoose = require('mongoose');
var AracBilgi=require("./aracBilgi")
mongoose.connect('mongodb+srv://munakbey:admin@cluster0-br351.mongodb.net/test?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true 
    }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

/*var arac1=new AracBilgi({
    plate:"www06FG536",
    time:"2016-08-18T16:03:00Z",
    camId:888242518120
})

arac1.save((error)=>{
    if(error){
        throw error;
    }
    console.log("saved!!!!!")
})*/
/*
Camera.find({},(error,data)=>{
    if(error){
        throw error;
    }
    console.log(data)
})*/


require('./aracBilgi');
require('./kullaniciIstek');
require('./kameras');