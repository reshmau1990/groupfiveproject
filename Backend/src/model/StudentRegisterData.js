const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user90:user90@cluster0.ksglb.mongodb.net/STUDENTENRSYSTEM?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const RegisterSchema = new Schema({
    fname : String,
    email : String,
    password : String,
});

var StudentRegisterData = mongoose.model('studentregisterdata', RegisterSchema);

module.exports = StudentRegisterData;