const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.at4m7.mongodb.net/ENROLLMENT?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const EnrolledSchema = new Schema({
         fname: String,
         age:String,
         address:String,
         district:String,
         email:String,
         phno:String,
         dob:String,
         gender:String,
         quali:String,
         poy:String,
         skill:String,
         wstatus:String,
         techtrain:String,
         year:String,
         course:String,
         value:String,
         id:String
});

var StdData = mongoose.model('stddata', EnrolledSchema);

module.exports = StdData;