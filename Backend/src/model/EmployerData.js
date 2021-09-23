const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.at4m7.mongodb.net/ENROLLMENT?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const RegisterSchema = new Schema({
    fname: String,
    quali: String,
    username : String,
    email : String,
    password : String,
});

var EmployerData = mongoose.model('employerdata', RegisterSchema);

module.exports = EmployerData;