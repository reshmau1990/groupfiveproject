const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.at4m7.mongodb.net/ENROLLMENT?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const RegisterSchema = new Schema({
    fname : String,
    email : String,
    password : String,
});

var StudentRegisterData = mongoose.model('studentregisterdata', RegisterSchema);

module.exports = StudentRegisterData;