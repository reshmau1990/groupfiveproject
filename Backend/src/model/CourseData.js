const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.at4m7.mongodb.net/ENROLLMENT?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    cname: String,
    duration: String,
    fee : String,
});

var CourseData = mongoose.model('coursedata', CourseSchema);

module.exports = CourseData;