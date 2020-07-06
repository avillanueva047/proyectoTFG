const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const Ajv = require('ajv');
// loads env variables into process.env
dotenv.config();
const db = require('./config/db');
// Creates Web Server
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// Import Models
var Thing = require('./models/thing');

// Import Thing validator schema
var Thing_ld = require('./models/thing_ld')

app.use(morgan('common'));

app.post('/thing', (req, res)=>{
    var ajv = new Ajv();
    var valid = ajv.validate(Thing_ld, req.body);
    if (!valid){
        console.log(ajv.errors);
        res.status(500).send("La Thing no cumple el equema de la Thing Description")
    }else{
        var thing = new Thing(req.body);
        thing.save(function (err) {
            if (err) res.status(500).send(err);
            res.status(201).send(thing.toJSON());
        });
    }

})

app.get('/thing', (req, res)=>{
    
    if(req.query.title){
        Thing.find({title:req.query.title}, (err, doc)=>{
            if (err) res.status(500).send(err);
            res.status(200).send(doc);
        });
    }
    else if(req.query.description){
        Thing.find({description:req.query.description}, (err, doc)=>{
            if (err) res.status(500).send(err);
            res.status(200).send(doc);
        });
    }
    else{
        res.status(500).send("El parámetro que está buscando no existe.")
    }

})

app.get('/thing/:id', (req, res)=>{
    
    Thing.findOne({_id: req.params.id}, (err, doc)=>{
        if (err) res.status(500).send(err);

        res.status(200).send(doc)
    })
    

})

app.listen(process.env.PORT, () => {
    console.debug('App listening on port ' + process.env.PORT);
});