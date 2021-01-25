/* Using ExpressJS to build our backend and create it */
const express = require('express');
const app = express();

/* Module Morgan to handle middlewares */
const morgan = require('morgan');
app.use(morgan('common'));

/* Module dotenv to load environment variables located on .env file 
and load the variables intor process.env */
const dotenv = require('dotenv');
dotenv.config();

/* Module that parses all the incoming request in a 
middleware before an handler */
const bodyParser = require('body-parser');
/* Parse application/x-www-form-urlencoded */
app.use(bodyParser.urlencoded({ extended: false }));
/* Parse application/json */
app.use(bodyParser.json());

/* Enable CORS on Express Middlewares */
var cors = require('cors');
app.use(cors());

var td;

/* Virtualizer */
app.get("/virtual/:thingType/:virtualThing", async (req, res)=>{

    /* Temperature Things */
    if(req.params.thingType == "temperature_sensor"){
        if(req.params.virtualThing == "temperature_celsius"){
            td = require('./things/temperature_sensor/temperature_celsius');
            res.send(td);
        }
        else if(req.params.virtualThing == "temperature_farenheit"){
            td = require('./things/temperature_sensor/temperature_farenheit');
            res.send(td);
        } 
    }

    /* Capacity Things */
    else if(req.params.thingType == "capacity_sensor"){
        if(req.params.virtualThing == "capacity_classroom"){
            td = require('./things/capacity_sensor/capacity_classroom');
            res.send(td);
        }
        else if(req.params.virtualThing == "capacity_cinema"){
            td = require('./things/capacity_sensor/capacity_cinema');
            res.send(td);
        }
    }
});

/* API Routes */
app.get("/virtual/:thingType/:virtualThing/:type/:interaction", async (req, res) => {
    if(req.params.virtualThing == "temperature-sensor"){
        td = require('./things/temperature-sensor');
        if(req.params.interaction == "temp"){
            res.send({
                "value": randn_bm(td.properties.temp.properties.value.minimum,
                                td.properties.temp.properties.value.maximum,
                                0.5)
            })
        }
    }

    else if(req.params.virtualThing == "capacity-counter"){
        td = require('./things/capacity-counter');
        if(req.params.interaction == "count"){
            if (capacity_value < td.properties.count.properties.value.maximum){
                res.send(
                    {
                        "value": randn_bm(
                            td.properties.count.properties.value.minimum,
                            td.properties.count.properties.value.maximum,
                            0.6)
                    }
                )
            }      
        }
    }
})

/* Generate a random number using an normal distribution
Taked from StackOverflow answer: shorturl.at/btwIN */
function randn_bm(min, max, skew) {
    let u = 0, v = 0;
    while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );

    num = num / 10.0 + 0.5; // Translate to 0 -> 1
    // resample between 0 and 1 if out of range
    if (num > 1 || num < 0) num = randn_bm(min, max, skew);
    num = Math.pow(num, skew); // Skew
    num *= max - min; // Stretch to fill range
    num += min; // offset to min
    return num;
}

// Deploy Back-End
app.listen(process.env.PORT, 
    () => {
        console.debug('App listening on port ' + process.env.PORT);
    }
);