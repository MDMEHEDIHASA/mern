const path = require('path');
const express = require('express');

const router = express.Router();
const multer = require('multer');

const  storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, `${file.fieldname}${Date.now()}${path.extname(file.originalname)}`)
    }
  })

  function checkFileType(file,cb){
      const fileTypes = /jpg|jpeg|png|gif/;
      const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
      const mimetype = fileTypes.test(file.mimetype);
      if(extname && mimetype){
          return cb(null,true);
      }else{
          cb("Images Only!");
      }
  }

  const upload = multer({ 
      storage: storage,
      fileFilter:function(req,file,cb){
          checkFileType(file,cb);
      }
     })


router.post('/',upload.single('image'),(req,res)=>{
    res.send(`/${req.file.path}`);
});


module.exports = router;