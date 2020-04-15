require('./model/db-connect');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const express = require('express');

const mainController=require('./controller/main-controller');
const klnIstekController=require('./controller/kullanici-istek-controller');

const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
  

var app=express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'main-layout', layoutsDir: __dirname + '/views/' }));
//app.set('view engine', 'hbs');


app.engine('handlebars', expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine', 'hbs');


app.listen(3001,() =>{
        console.log('STARTED...') 
})

app.use('/',mainController);
app.use('/klnIstek',klnIstekController);