var mongoose = require('mongoose')
   ,Schema = mongoose.Schema;

var PersonSchema = new Schema({
    firstName : String, 
    lastName : String, 
    active : Boolean
});

mongoose.model('Person', PersonSchema);