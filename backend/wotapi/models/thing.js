const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var thingSchema = new Schema({}, { strict: false });
var Thing = mongoose.model('Thing', thingSchema);

module.exports = Thing