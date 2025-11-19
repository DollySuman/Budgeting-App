const express = require('express')
const cors = require("cors")
const path = require('path');
const app = express()
const port = 3000
const router =  require('./Routes/Budget')

app.use(cors());
app.use(express.json())

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '..Frontend'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../Frontend')));

app.use("/", router)
console.log(router)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
