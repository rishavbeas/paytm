// backend/routes/user.js
const express = require('express');

const router = express.Router();

router.post("/signup",function(req,res){
    res.json({
        "message":"route working fine"
    })
})

router.post("/signin",function(req,res){
    res.json({
        "message":"sign in route working fine"
    })
})

module.exports = router;