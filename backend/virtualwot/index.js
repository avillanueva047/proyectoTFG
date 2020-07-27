const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const Ajv = require('ajv')
var cors = require('cors');

var td;
const td_schema = require('./things/td_schema');

/* var ajv = new Ajv();
var valid = ajv.validate(td_schema, td);
if (!valid) {
    console.log(ajv.errors);
    console.log("La Thing no cumple el equema de la Thing Description");
} else {
    console.log("TD validada")
} */

// loads env variables into process.env
dotenv.config();


// Creates Web Server
const app = express();

//Cors
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(morgan('common'));

app.get("/virtual/:virtualThing", async (req, res)=>{
    if(req.params.virtualThing == "temperature-sensor"){
        td = require('./things/temperature-sensor');
        res.send(td);
    }
   
});

app.get("/virtual/:virtualThing/:type/:interaction", async (req, res)=>{

    if(req.params.virtualThing == "temperature-sensor"){
        td = require('./things/temperature-sensor');
        if(req.params.interaction == "temp"){
            res.send({"value":randn_bm(td.properties.temp.properties.value.minimum,td.properties.temp.properties.value.maximum,0.5)})
        }
    }

})

function randn_bm(min, max, skew) {
    let u = 0, v = 0;
    while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );

    num = num / 10.0 + 0.5; // Translate to 0 -> 1
    if (num > 1 || num < 0) num = randn_bm(min, max, skew); // resample between 0 and 1 if out of range
    num = Math.pow(num, skew); // Skew
    num *= max - min; // Stretch to fill range
    num += min; // offset to min
    return num;
}

app.listen(process.env.PORT, () => {
    console.debug('App listening on port ' + process.env.PORT);
});