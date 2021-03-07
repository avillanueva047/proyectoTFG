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
app.disable("x-powered-by");

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

/* Virtual Things API Routes */

var state = false;          // Light switch state
var opened = 0;             // Blind percentage opened
var alarm_state = false;    // Alarm state

app.get("/virtual/:thingType/:virtualThing/:property", async (req, res) => {
    /* Routes for Temperature Things */
    if(req.params.thingType == "temperature_sensor"){
        if(req.params.virtualThing == "temperature_celsius"){
            td = require('./things/temperature_sensor/temperature_celsius');
            if(req.params.property == "temperature"){
                res.send({
                    "value": randn_bm(td.properties.temperature.properties.value.minimum,
                        td.properties.temperature.properties.value.maximum, 0.5)
                })
            }
        }
        else if(req.params.thingType == "temperature_farenheit"){
            td = require('./things/temperature_sensor/temperature_farenheit');
            if(req.params.property == "temperature"){
                res.send({
                    "value": randn_bm(td.properties.temperature.properties.value.minimum,
                        td.properties.temperature.properties.value.maximum, 0.5)
                })
            }
        }
    }

    /* Routes for Capacity Things */
    else if(req.params.thingType == "capacity_sensor"){
        if(req.params.virtualThing == "capacity_cinema"){
            td = require('./things/capacity_sensor/capacity_cinema');
            if(req.params.property == "capacity"){
                res.send({
                    "value": parseInt(randn_bm(td.properties.capacity.properties.value.minimum,
                        td.properties.capacity.properties.value.maximum, 0.5))
                })
            }
        }
        else if(req.params.virtualThing == "capacity_classroom"){
            td = require('./things/capacity_sensor/capacity_classroom');
            if(req.params.property == "capacity"){
                res.send({
                    "value": parseInt(randn_bm(td.properties.capacity.properties.value.minimum,
                        td.properties.capacity.properties.value.maximum, 0.5))
                })
            }
        }
    }

    /* Routes for Light Switch Things  */
    else if(req.params.thingType == "light_switch"){
        if(req.params.virtualThing == "light_switch"){
            if(req.params.property == "state"){
                res.send({
                    "state": state
                })
            }
        }
    }

    /* Routes for Blind Controller Things*/
    else if(req.params.thingType == "blind_controller"){
        if(req.params.virtualThing == "blind_controller"){
            if(req.params.property == "open"){
                res.send({
                    "open": opened
                })
            }
        }
    }

    /* Routes for Alarm Things */
    else if(req.params.thingType == "alarm_controller"){
        if(req.params.virtualThing == "alarm_controller"){
            if(req.params.property == "state"){
                res.send({
                    "state": alarm_state
                })
            }
        }
    }

    /* Routes for Wind Sensor */
    if(req.params.thingType == "wind_sensor"){
        if(req.params.virtualThing == "wind_sensor"){
            td = require('./things/wind_sensor/wind_sensor')
            if(req.params.property == "speed"){
                res.send({
                    "value": parseInt(randn_bm(td.properties.speed.properties.value.minimun,
                        td.properties.speed.properties.value.maximun, 0.90)),
                    "metric": `${td.properties.speed.properties.distance.measure}` + '/' + 
                        `${td.properties.speed.properties.time.measure}`
                })
            }
        }
    }
})

app.post("/virtual/:thingType/:virtualThing/:action", async (req, res) => {

    /* Routes for Light Switch Things  */
    if(req.params.thingType == "light_switch"){
        if(req.params.virtualThing == "light_switch"){
            td = require('./things/light_switch/light_switch');
            if(req.params.action == "on"){
                state = td.properties.state.properties.state.on;
                res.end();
            }
            else if(req.params.action == "off"){
                state == td.properties.state.properties.state.off;
                res.end();
            }
            else{
                res.end();
            }
        }
    }

    /* Routes for Blind Controller Things */
    if(req.params.thingType == "blind_controller"){
        if(req.params.virtualThing == "blind_controller"){
            td = require('./things/blind_controller/blind_controller');
            if(req.params.action == "open" && opened < td.properties.open.properties.percentage.maximum){
                opened = opened + 10;
                res.end();
            }
            else if(req.params.action == "close" && opened > td.properties.open.properties.percentage.minimum){
                opened = opened - 10;
                res.end();
            }
            else{
                res.end();
            }
        }
    }

    /* Routes for Alarm Controller Things */
    if(req.params.thingType == "alarm_controller"){
        if(req.params.virtualThing == "alarm_controller"){
            td = require('./things/alarm_controller/alarm_controller');
            if(req.params.action == "activate"){
                alarm_state = td.properties.state.properties.state.activate;
                res.end();
            }
            else if(req.params.action == "deactivate"){
                alarm_state = td.properties.state.properties.state.deactivate;
                res.end()
            }
            else{
                res.end();
            }
        }
    }
})

/* Generate a random number using an normal distribution
Taked from StackOverflow answer: https://stackoverflow.com/q/25582882/8888135 */
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