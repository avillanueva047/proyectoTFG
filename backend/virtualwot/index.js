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

var currentCapacityCinema = 0;      // Capacity Cinema
var currentCapacityClassroom = 0;   // Capacity Classroom


var status = false;         // Light switch status
var opened = 0;             // Blind percentage opened
var alarm_status = false;   // Alarm status
var dimmer_status = false;  // Dimmer status
var dimmer_brightness = 0;  // Dimmer brightness percentage

var rgb_status = false;     // RGB Light status
var rgb_red = 0;            // RGB Red value
var rgb_green = 0;          // RGB Blue value
var rgb_blue = 0;           // RGB Green value

var light_hub = new Array(4).fill(false);   // Light Hub status

var door_lock = false;      // Door Lock Status
var door_status = false;    // Door Status

const d = new Date();       // Clock Thing

var dispenserActivation = false     // Gel Dispenser

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
        else if(req.params.virtualThing == "temperature_farenheit"){
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
                    "value": currentCapacityCinema
                })
            }
        }
        else if(req.params.virtualThing == "capacity_classroom"){
            td = require('./things/capacity_sensor/capacity_classroom');
            if(req.params.property == "capacity"){
                res.send({
                    "value": currentCapacityClassroom
                })
            }
        }
    }

    /* Routes for Light Switch Things  */
    else if(req.params.thingType == "light_switch"){
        if(req.params.virtualThing == "light_switch"){
            if(req.params.property == "status"){
                res.send({
                    "status": status
                })
            }
        }
    }

    /* Routes for Blind Controller Things*/
    else if(req.params.thingType == "blind_controller"){
        if(req.params.virtualThing == "blind_controller"){
            if(req.params.property == "opening"){
                res.send({
                    "open": opened
                })
            }
        }
    }

    /* Routes for Alarm Things */
    else if(req.params.thingType == "alarm_controller"){
        if(req.params.virtualThing == "alarm_controller"){
            if(req.params.property == "status"){
                res.send({
                    "activated": alarm_status
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
                        td.properties.speed.properties.value.maximun, 0.95)),
                    "metric": `${td.properties.speed.properties.distance.unit}` + '/' + 
                        `${td.properties.speed.properties.time.unit}`
                })
            }
        }
    }

    /* Routes for Ocean Waves */
    if(req.params.thingType == "wave_measurer"){
        if(req.params.virtualThing == "wave_measurer"){
            td = require('./things/wave_measurer/wave_measurer')
            if(req.params.property == "grade"){
                res.send({
                    "grade": parseInt(randn_bm(td.properties.scale.properties.grade.minimum,
                        td.properties.scale.properties.grade.maximum, 0.95))
                })
            }
        }
    }

    /* Routes for Humidity Sensor */
    if(req.params.thingType == "humidity_sensor"){
        if(req.params.virtualThing == "humidity_sensor"){
            td = require('./things/humidity_sensor/humidity_sensor')
            if(req.params.property == "percentage"){
                res.send({
                    "percentage": parseInt(randn_bm(td.properties.percentage.properties.percentage.minimum,
                        td.properties.percentage.properties.percentage.maximum, 0.95)) + " %"
                })
            }
        }
    }

    /* Routes for Dimmer Controller */
    if(req.params.thingType == "dimmer_controller"){
        if(req.params.virtualThing == "dimmer_controller"){
            td = require('./things/dimmer_controller/dimmer_controller')
            if(req.params.property == "status"){
                res.send({
                    "status": dimmer_status
                })
            }
            else if(req.params.property == "brightness"){
                res.send({
                    "brightness": dimmer_brightness + " %"
                })
            }
        }
    }

    /* Routes for RGB Light */
    if(req.params.thingType == "rgb_controller"){
        if(req.params.virtualThing == "rgb_controller"){
            td = require('./things/rgb_controller/rgb_controller')
            if(req.params.property == "status"){
                res.send({
                    "status": rgb_status
                })
            }
            else if(req.params.property == "values"){
                res.send({
                    "R": rgb_red,
                    "G": rgb_green,
                    "B": rgb_blue
                })
            }
        }
    }

    /* Routes for Hub Light */
    if(req.params.thingType == "light_hub"){
        if(req.params.virtualThing == "light_hub"){
            td = require('./things/light_hub/light_hub')
            if(req.params.property == "status"){
                res.send({
                    "1": light_hub[0],
                    "2": light_hub[1],
                    "3": light_hub[2],
                    "4": light_hub[3]
                })
            }
            else{
                res.send({
                    message: "Wrong GET link request"
                })
            }
        }
    }

    /* Routes for Door Controller */
    if(req.params.thingType == "door_controller"){
        if(req.params.virtualThing == "door_controller"){
            td = require('./things/door_controller/door_controller')
            if(req.params.property == "lock_status"){
                res.send({
                    "status": door_lock ? "unlocked" : "locked"
                })
            }
            else if(req.params.property == "open_status"){
                res.send({
                    "status": door_status ? "opened" : "closed"
                })
            }
            else{
                res.send({
                    message: "Wrong GET link request"
                })
            }
        }
    }

    /* Routes for Heart Rate */
    if(req.params.thingType == "heart_rate"){
        if(req.params.virtualThing == "heart_rate"){
            td = require('./things/heart_rate/heart_rate')
            if(req.params.property == "lecture"){
                res.send({
                    "lecture": parseInt(randn_bm(td.properties.lecture.properties.reading.minimum,
                        td.properties.lecture.properties.reading.maximum, 0.75))
                })
            }
            else{
                res.send({
                    message: "Wrong GET link request"
                })
            }
        }
    }

    /* Routes for Clock */
    if(req.params.thingType == "clock"){
        if(req.params.virtualThing == "clock"){
            td = require('./things/clock/clock')
            if(req.params.property == "time"){
                res.send({
                    "hour": d.getHours().toLocaleString('en-US', {
                        minimumIntegerDigits: 2,
                        useGrouping: false
                    }),
                    "minute": d.getMinutes().toLocaleString('en-US', {
                        minimumIntegerDigits: 2,
                        useGrouping: false
                    }),
                })
            }
            else{
                res.send({
                    message: "Wrong GET link request"
                })
            }
        }
    }
})

app.post("/virtual/:thingType/:virtualThing/:action", async (req, res) => {
    /* Routes for Capacity Things */
    if(req.params.thingType == "capacity_sensor"){
        if(req.params.virtualThing == "capacity_cinema"){
            td = require('./things/capacity_sensor/capacity_cinema');
            var maximum = td.properties.capacity.properties.value.maximum;
            var minimum = td.properties.capacity.properties.value.minimum;
            if(req.params.action == "increase" && currentCapacityCinema < maximum){
                currentCapacityCinema += td.action.increase.input.properties.increment.const;
                res.end();
            }
            else if(req.params.action == "decrease" && currentCapacityCinema > minimum){
                currentCapacityCinema += td.action.decrease.input.properties.decrement.const;
                res.end();
            }
            else{
                res.end();
            }
        }

        if(req.params.virtualThing == "capacity_classroom"){
            td = require('./things/capacity_sensor/capacity_classroom');
            var maximum = td.properties.capacity.properties.value.maximum;
            var minimum = td.properties.capacity.properties.value.minimum;
            if(req.params.action == "increase" && currentCapacityClassroom < maximum){
                currentCapacityClassroom += td.action.increase.input.properties.increment.const;
                res.end();
            }
            else if(req.params.action == "decrease" && currentCapacityClassroom > minimum){
                currentCapacityClassroom += td.action.decrease.input.properties.decrement.const;
                res.end();
            }
            else{
                res.end();
            }
        }
    }

    /* Routes for Light Switch Things  */
    if(req.params.thingType == "light_switch"){
        if(req.params.virtualThing == "light_switch"){
            td = require('./things/light_switch/light_switch');
            if(req.params.action == "switch"){
                status = !status;
                res.send({
                    "status": status
                });
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
            if(req.params.action == "open" && opened < td.properties.opening.properties.percentage.maximum){
                opened = opened + 10;
                res.send({
                    "percentage": opened
                });
            }
            else if(req.params.action == "close" && opened > td.properties.opening.properties.percentage.minimum){
                opened = opened - 10;
                res.send({
                    "percentage": opened
                });
            }
            else{
                res.send({
                    "percentage": opened
                });
            }
        }
    }

    /* Routes for Alarm Controller Things */
    if(req.params.thingType == "alarm_controller"){
        if(req.params.virtualThing == "alarm_controller"){
            td = require('./things/alarm_controller/alarm_controller');
            if(req.params.action == "activate"){
                alarm_status = true;
                res.send({
                    "activated": alarm_status
                });
            }
            else if(req.params.action == "deactivate"){
                alarm_status = false;
                res.send({
                    "activated": alarm_status
                });
            }
            else{
                res.end();
            }
        }
    }

    /* Routes for Blind Controller Things */
    if(req.params.thingType == "dimmer_controller"){
        if(req.params.virtualThing == "dimmer_controller"){
            td = require('./things/dimmer_controller/dimmer_controller');
            if(dimmer_status){
                if(req.params.action == "increase" && dimmer_brightness < td.properties.brightness.properties.percentage.maximum){
                    dimmer_brightness = dimmer_brightness + td.action.increase.input.properties.increase.value;
                    res.send({
                        "brightness": dimmer_brightness + " %"
                    });
                }
                else if(req.params.action == "decrease" && dimmer_brightness > td.properties.brightness.properties.percentage.minimum){
                    dimmer_brightness = dimmer_brightness + td.action.decrease.input.properties.decrease.value;
                    res.send({
                        "brightness": dimmer_brightness + " %"
                    });
                }
            }
            if(req.params.action == "switch"){
                dimmer_status = !dimmer_status;
                res.send({
                    "status": dimmer_status
                });
            }
            else{
                res.end();
            }
        }
    }

    /* RGB Light Switch */
    if(req.params.thingType == "rgb_controller"){
        if(req.params.virtualThing == "rgb_controller"){
            td = require('./things/rgb_controller/rgb_controller');
            if(rgb_status){
                if(req.params.action == "color"){
                    if( req.body.R == null || req.body.G == null || req.body.B == null){
                        return res.send({
                            message: "Body is missing or some RGB values are missing"
                        });
                    }
                    if( req.body.R < 0 || req.body.R > 255 || 
                        req.body.G < 0 || req.body.G > 255 ||
                        req.body.B < 0 || req.body.B > 255
                    ){
                        return res.send({
                            message: "Wrong RGB numbers, should be between 0 and 255"
                        });
                    }
                    rgb_red = req.body.R;
                    rgb_green = req.body.G;
                    rgb_blue = req.body.B;
                    return res.send({
                        "R": rgb_red,
                        "G": rgb_green,
                        "B": rgb_blue
                    });
                }
            }
            if(req.params.action == "switch"){
                rgb_status = !rgb_status;
                res.send({
                    "status": rgb_status
                });
            }
            else{
                res.send({
                    message: "Light it's off or wrong link request"
                })
            }
        }
    }

    /* Light Hub Switch */
    if(req.params.thingType == "light_hub"){
        if(req.params.virtualThing == "light_hub"){
            td = require('./things/light_hub/light_hub');
            if(req.params.action == "switch"){
                if( req.body.position == null ){
                    return res.send({
                        message: "Body is missing the light postion wanted to Switch"
                    });
                }
                if( req.body.position < 1 || req.body.position > 4 ){
                    return res.send({
                        message: "Position " + req.body.position + " is incorrect. Should be between 1 - 4"
                    });
                }
                light_hub[req.body.position - 1] = !light_hub[req.body.position - 1]
                return res.send({
                    "1": light_hub[0],
                    "2": light_hub[1],
                    "3": light_hub[2],
                    "4": light_hub[3]
                });
            }
            else{
                res.send({
                    message: "Wrong POST link request"
                })
            }
        }
    }

    /* Routes for Door Controller */
    if(req.params.thingType == "door_controller"){
        if(req.params.virtualThing == "door_controller"){
            td = require('./things/door_controller/door_controller')
            if(req.params.action == "lock"){
                door_lock = false;
                res.send({
                    "lockStatus": door_lock ? "unlocked" : "locked"
                })
            }
            else if(req.params.action == "unlock"){
                door_lock = true;
                res.send({
                    "lockStatus": door_lock ? "unlocked" : "locked"
                })
            }
            else if(req.params.action == "open"){
                door_status = true;
                res.send({
                    "openStatus": door_status ? "opened" : "closed"
                })
            }
            else if(req.params.action == "close"){
                door_status = false;
                res.send({
                    "openStatus": door_status ? "opened" : "closed"
                })
            }
            else{
                res.send({
                    message: "Wrong GET link request"
                })
            }
        }
    }

    /* Routes for Gel Dispenser Things  */
    if(req.params.thingType == "gel_dispenser"){
        if(req.params.virtualThing == "gel_dispenser"){
            td = require('./things/gel_dispenser/gel_dispenser');
            if(req.params.action == "dispense"){
                dispenserActivation = !dispenserActivation;
                res.send({
                    "status": dispenserActivation
                });
                dispenserActivation = false;
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