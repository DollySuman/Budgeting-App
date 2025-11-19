const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const { enterAmt, totalExp}  = require("../Controller/logic");



router.get("/home", (req,res) => {
    // res.sendFile(path.join(process.cwd(), "Frontend", "home.html"));
    res.render("home");

})

router.get("/entry", (req,res)=> {
    // res.sendFile(path.join(process.cwd(), "Frontend", "entry.html")) 
    res.render("entry")
})


router.post("/entry", enterAmt)

router.get("/entry/total",totalExp)


module.exports = router;