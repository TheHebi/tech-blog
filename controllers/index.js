const express = require('express');
const router = express.Router();
const apiRoutes = require("./api")

router.use("/api",apiRoutes)

router.get("/sessiondata",(req,res)=>{
    res.json({session:req.session})
})

module.exports = router;