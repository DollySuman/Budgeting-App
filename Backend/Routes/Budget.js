const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const { enterAmt, totalExp, editDb}  = require("../Controller/logic");



router.get("/", (req,res) => {
    res.sendFile(path.join(process.cwd(), "Frontend", "home.html"));
    

})

router.get("/entry", (req,res)=> {
    res.sendFile(path.join(process.cwd(), "Frontend", "entry.html")) 
    
})


router.post("/entry", enterAmt)

router.get("/entry/total", (req,res) => {
   res.sendFile(path.join(process.cwd(), "Frontend", "total.html")) 
})
router.post("/entry/total",totalExp)

router.post("/edit", editDb);

router.get("/entry/edit", (req,res) => {
    res.sendFile(path.join(process.cwd(), "Frontend", "edit.html"));
})


module.exports = router;