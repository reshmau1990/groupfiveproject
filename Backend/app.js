const express = require('express');
const port = process.env.PORT || 3000;
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
// const User = require('./src/model/user');
const EmployerData = require('./src/model/EmployerData');
const StudentRegisterData = require('./src/model/StudentRegisterData');
const StdData = require('./src/model/StdData');
const StudentData = require('./src/model/StudentData');
const cors = require('cors');
const bodyparser=require('body-parser');
const jwt = require('jsonwebtoken');
const crypto = require("crypto");
const { db } = require('./src/model/EmployerData');
var app = new express();
app.use(cors());
app.use(bodyparser.json());
email='admn4928@gmail.com';
password='Admin@123';
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, './public/images');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname) 
  }
 
});

var upload = multer({ storage: storage });

app.use(express.urlencoded({ extended: true }));

function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
}

app.post('/login', (req, res) => {
  let user = req.body;

  if(email){
    if(password==user.password){
        let payload = {subject: email+password}
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({token})
    }
    else{

      EmployerData.findOne({email: user.email, password: user.password}, function(err, item){
        if(err){
             res.status(401).send('Invalid credentials');
        }
        if(item){
            console.log(item)
             res.send(item);
        }
        else{
          res.status(401).send('Invalid');
        }

      })
    }
  }
})

app.post('/studentlogin', (req, res) => {
    let user = {
      email: req.body.email,
      password: req.body.password
    }

        StudentRegisterData.findOne({email: user.email, password: user.password}, function(err, item){
          if(err){
               res.status(401).send('Invalid credentials');
          }
          if(item){
            item = db.collection('studentregisterdatas').findOne({email:user.email})
            .then((item)=>{
              var userId=item._id
              // console.log(userId)

              // console.log(item);
              res.status(200).json({
                userId:item._id
              })
            })
          }
          else{
            res.status(401).send('Invalid');
          }

        })      
})


app.post('/studentsignup/insert', (req,res)=>{
  
  var item = {
    fname: req.body.item.fname,
    email: req.body.item.email,
    password: req.body.item.password,
    cpassword: req.body.item.password
}

StudentRegisterData.findOne({email:item.email}, function(err,item){
if(item){
  res.status(401).send('User already exists');
}
else{
  var item = {
    fname: req.body.item.fname,
    email: req.body.item.email,
    password: req.body.item.password,
    cpassword: req.body.item.password
}
  var user = new StudentRegisterData(item);
  user.save();
  res.send(user);
}
})
})

app.post('/signup/insert', (req,res)=>{
  
  var item = {
    fname: req.body.item.fname,
    quali: req.body.item.quali,
    username: req.body.item.username,
    email: req.body.item.email,
    password: req.body.item.password,
    cpassword: req.body.item.cpassword
}

EmployerData.findOne({email:item.email}, function(err,item){
if(item){
  res.status(401).send('User already exists');
}
else{
  var item = {
    fname: req.body.item.fname,
    quali: req.body.item.quali,
    username: req.body.item.username,
    email: req.body.item.email,
    password: req.body.item.password,
    cpassword: req.body.item.cpassword
}
  var user = new EmployerData(item);
  user.save();
  res.send(user);
}
})
})

app.post('/stdform/insert', upload.single('image'), (req,res)=>{
  

   var item = {
    fname:req.body.item.fname,
    age:req.body.item.age,
    address:req.body.item.address,
    district:req.body.item.district,
    email:req.body.item.email,
    phno:req.body.item.phno,
    dob:req.body.item.dob,
    gender:req.body.item.gender,
    quali:req.body.item.quali,
    poy:req.body.item.poy,
    skill:req.body.item.skill,
    wstatus:req.body.item.wstatus,
    techtrain:req.body.item.techtrain,
    year:req.body.item.year,
    course:req.body.item.course
}
if(req.file){

  item.photo = req.file.originalname
}
else{
  item.photo = req.body.item.photo;
}

StudentRegisterData.findOne({email:item.email, fname: item.fname}, function(err,item){
  
  if(err){
    res.status(401).send('User email not matching');
    alert('User email not matching');
  }
  if(item){

        var item = {
          fname:req.body.item.fname,
          age:req.body.item.age,
          address:req.body.item.address,
          district:req.body.item.district,
          email:req.body.item.email,
          phno:req.body.item.phno,
          dob:req.body.item.dob,
          gender:req.body.item.gender,
          quali:req.body.item.quali,
          poy:req.body.item.poy,
          skill:req.body.item.skill,
          wstatus:req.body.item.wstatus,
          techtrain:req.body.item.techtrain,
          year:req.body.item.year,
          course:req.body.item.course

        }
        if(req.file){

          item.photo = req.file.originalname
        }
        else{
          item.photo = req.body.item.photo;
        }

        var user = new StdData(item);
        user.save();

  suser = db.collection('studentregisterdatas').findOne({email:item.email})
  .then((suser)=>{
    var Id = suser._id;
    console.log(Id);
    StdData.findOneAndUpdate({email:item.email},
      {$set:{"id":Id}})
      .then(()=>{
          res.send(user);
      })
  })
console.log(user);      
  }
})
})

app.get('/studenthome/stdhome/:id',  (req, res) => {
  userid = req.params.id;
  // console.log(userid);
    StudentData.findOne({"id":userid})
    .then((student)=>{
      res.send(student);
    });
})

app.put('/studenthome/stdhome/editprofile', upload.single('image'),(req,res)=>{
  console.log(req.body)
  userid=req.body._id,
  console.log(req.body._id)
      fname=req.body.fname,
      age=req.body.age,
      address=req.body.address,
      district=req.body.district,
      email=req.body.email,
      phno=req.body.phno,
      dob=req.body.dob,
      gender=req.body.gender,
      quali=req.body.quali,
      poy=req.body.poy,
      skill=req.body.skill,
      wstatus=req.body.wstatus,
      techtrain=req.body.techtrain,
      year=req.body.year,
      course=req.body.course

      if(req.file){

        photo = req.file.originalname
      }
      else{
        photo = req.body.photo;
      }

  StudentData.findByIdAndUpdate({"_id":userid},
                              {$set:{"fname":fname,
                              "age":age,
                              "address":address,
                              "email":email,
                              "phno":phno,
                              "dob":dob,
                              "gender":gender,
                              "quali":quali,
                              "poy":poy,
                              "skill":skill,
                              "wstatus":wstatus,
                              "techtrain":techtrain,
                              "year":year,
                              "course":course,
                              "photo":photo}})
 .then(function(){
     res.send();
 })
})

app.get('/adminhome/dashboard/stdlist', function(req,res){
  StdData.find()
  .then(function(students){
    res.send(students);
  })
})

app.get('/adminhome/dashboard/stdreg', function(req,res){
  StudentRegisterData.find()
  .then(function(students){
    res.send(students);
  })
})

app.get('/adminhome/dashboard/stdlist/:id',  (req, res) => {
  
  const id = req.params.id;
    StdData.findOne({"_id":id})
    .then((student)=>{
        res.send(student);
    });
})


app.post('/adminhome/dashboard/stdlist/student/approve', verifyToken, (req, res) => {
  id = req.body._id;
  console.log(id);
  useremail=req.body.email;
console.log(useremail);
  StdData.findOne({"_id":id})
  .then((student)=>{
    var str = '';
    const uid = crypto.randomBytes(2).toString("hex");
    str+=uid+student.fname.substring(0,3);
    console.log(str);
    
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "admn4928@gmail.com",
        pass: "Admin@123"
      }
    });
    
    var mailOptions = {
      from: "admn4928@gmail.com",
      to: useremail,
      subject: "AUTOMATED EMAIL FROM NODE",
      text: "Your Enrollment form is approved. Online fee payment is available in your login account. Auto generated ID is " +str
    };

  StudentData.insertMany(student)
  .then(()=>{
    console.log('success')
    StudentData.findOneAndUpdate({"_id":id},
    {$set:{"value":str}})
    .then(()=>{
      StdData.findByIdAndDelete({"_id":id})
      .then(()=>{
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } 
          else {
            res.write("Hai, I am Reshma U");
            res.end();
            console.log('Email sent: ' + info.response);
          }
      });
      })
  })
})

  })


  
})

app.get('/adminhome/students',function(req,res){  
  StudentData.find()
              .then(function(students){
                  res.send(students);
              });
});

app.get('/adminhome/students/:id',  (req, res) => {
  
  id = req.params.id;
    StudentData.findOne({"_id":id})
    .then((student)=>{
      res.send(student);
    });
})

app.put('/adminhome/students/update',upload.single('image'),verifyToken,(req,res)=>{
  console.log(req.body)
  id=req.body._id,

      fname=req.body.fname,
      age=req.body.age,
      address=req.body.address,
      district=req.body.district,
      email=req.body.email,
      phno=req.body.phno,
      dob=req.body.dob,
      gender=req.body.gender,
      quali=req.body.quali,
      poy=req.body.poy,
      skill=req.body.skill,
      wstatus=req.body.wstatus,
      techtrain=req.body.techtrain,
      year=req.body.year,
      course=req.body.course

      if(req.file){

        photo = req.file.originalname
      }
      else{
        photo = req.body.photo;
      }

  StudentData.findByIdAndUpdate({"_id":id},
                              {$set:{"fname":fname,
                              "age":age,
                              "address":address,
                              "email":email,
                              "phno":phno,
                              "dob":dob,
                              "gender":gender,
                              "quali":quali,
                              "poy":poy,
                              "skill":skill,
                              "wstatus":wstatus,
                              "techtrain":techtrain,
                              "year":year,
                              "course":course,
                              "photo":photo}})
 .then(function(){
     res.send();
 })
})





app.delete('/adminhome/students/remove/:id',verifyToken,(req,res)=>{

 id = req.params.id;
 StudentData.findByIdAndDelete({"_id":id})
 .then(()=>{
     console.log('success')
     res.send();
 })
})

app.delete('/adminhome/dashboard/stdlist/remove/:id',verifyToken,(req,res)=>{

  id = req.params.id;
  StdData.findByIdAndDelete({"_id":id})
  .then(()=>{
      console.log('success')
      res.send();
  })
 })

 app.get('/adminhome/employers',verifyToken,function(req,res){
    
  EmployerData.find()
              .then(function(employers){
                  res.send(employers);
              });
});
app.get('/adminhome/employers/:id',verifyToken,  function(req, res)  {

const id = req.params.id;
  EmployerData.findOne({"_id":id})
  .then((employer)=>{
      res.send(employer);
  });
})

app.put('/adminhome/employers/update-employer',verifyToken,(req,res)=>{
  console.log(req.body)
  id=req.body._id,
  fname = req.body.fname,
  email = req.body.email,
  quali = req.body.quali,
 EmployerData.findByIdAndUpdate({"_id":id},
                              {$set:{
                              "fname":fname,
                              "email":email,
                              "quali":quali
                              }})
 .then(function(){
     res.send();
 })
})

app.delete('/adminhome/employers/remove/:id',verifyToken,(req,res)=>{

 id = req.params.id;
 EmployerData.findByIdAndDelete({"_id":id})
 .then(()=>{
     console.log('success')
     res.send();
 })
})
 

     
  app.listen(port, ()=>{
    console.log("Server is ready at "+port);
});

