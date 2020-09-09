const express = require ('express');
// const nodemailer = require('nodemailer');
// const mailGun = require('mailgun');
require('dotenv').config();
console.log("server running")

const app = express();
// const path = require('path')
// const upload = require('./upload')
const sendMail = require('./mail')
const multer = require('multer');

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

//=================================
// File Upload
//=================================

    // set storage engine 
        const storage = multer.diskStorage({
        destination: "./public/uploads/", 
        filename: function(req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); 
        }
    });

    // initalize the upload variable
    const upload = multer({
        storage: storage,
        limits: {
            fileSize: 1000 * 1000 *2 
        }
    }).single('hereInMS');


// upload route 
app.post('/uploads/', (req, res) => {

    upload (req, res, (err)=> {
        console.log('upload route hit' )
        if (err){
            console.log(err)
        }else{
            console.log(req.body)
            // sendMail(req.body);
            console.log("file info " + req.file)
        }
       
    })
    // }).then(function(){
    //         sendMail(reg.body)
    // }).catch(function(err){
    //     res.status(401).json(err);
    // })
})



// ===================================
// email sending info
//====================================


// app.post('/email',(req,res) => {
//     console.log("data received at server", req.body)
//     res.json({message:'message received!'})
//     sendMail(req.body)
// })


//Render the Index page on server run 
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,'public', 'index.html'));
})




// Listener
app.listen(PORT, ()=>{
    console.log('Server is running on PORT,' , PORT);
})