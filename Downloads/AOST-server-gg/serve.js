require('./model/db-connect');
const bodyparser = require('body-parser');
const express = require('express');
const mainController=require('./controller/arac-bilgi-controller');
const camController=require('./controller/cam-controller');
const klnIstekController=require('./controller/kullanici-istek-controller');
var app=express();
app.use(bodyparser.json());
const expressHandlebars = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const Handlebars = require('handlebars')

app.set('view engine', 'handlebars');
app.engine('handlebars', expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));

app.listen(3000,() =>{
        console.log('STARTED...') 
})


app.use('/arac',mainController);
app.use('/cam',camController);
app.use('/klnistek',klnIstekController);

