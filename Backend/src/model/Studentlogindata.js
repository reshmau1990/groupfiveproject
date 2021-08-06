const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user90:user90@cluster0.ksglb.mongodb.net/STUDENTENRSYSTEM?retryWrites=true&w=majority');

const Schema = mongoose.Schema;

const LoginSchema = new Schema({
    email : String,
    password : String
});

var Studentlogindata = mongoose.model('logindata', LoginSchema);

module.exports = Studentlogindata;