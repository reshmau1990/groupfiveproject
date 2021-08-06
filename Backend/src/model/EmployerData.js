const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user90:user90@cluster0.ksglb.mongodb.net/STUDENTENRSYSTEM?retryWrites=true&w=majority');
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