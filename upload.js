const multer = require('multer');
const path = require('path')

// console.log("on upload page");


// set storage engine 
const storage = multer.diskStorage({
    destination: "./public/uploads/", 
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); 
    }
});

// initalize the upload variable
const upload = multer({
    storage: storage
}).single('hereInMS');

console.log("in Upload Function");
module.exports = upload;