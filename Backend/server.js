const express = require('express')
const cors = require("cors")
const path = require('path');
const app = express()
const port = 3000
const router =  require('./Routes/Budget')

// app.use(cors());
app.use(cors({
  origin: 'http://127.0.0.1:3000'
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}));


app.use("/", router)
console.log(router)




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
