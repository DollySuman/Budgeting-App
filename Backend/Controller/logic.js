const fs = require("fs");
const { json } = require("stream/consumers");



function loadDb() {
    if (fs.existsSync("Db.json")) {
        try {

            const data = fs.readFileSync("Db.json", "utf-8")
            return JSON.parse(data);
        } catch {
            return [];
        }
    }
    return [];
}

function enterAmt(req, res) {
    let newEntry = req.body;

    newEntry.price = Number(newEntry.price);
    let db = loadDb();
    if (!newEntry.name || !newEntry.price || !newEntry.month) {
        return res.status(400).send("Missing required fields: name, price, or month");
    }


    const exists = db.find(item => item.name === newEntry.name && item.price === newEntry.price && item.month === newEntry.month);

    if (exists) {
        return res.json({ message :"Entry is already added in the Database"})
    }

    db.push(newEntry)

    fs.writeFileSync("Db.json", JSON.stringify(db, null, 2));
    return res.json({ message :"Amount saved successfully"})
    

}

function totalExp(req, res) {
    let db = loadDb();
    let total = 0;
    const month = req.body.month;
    let monthexp = db.filter(e => e.month === month); // to get month by the user

    monthexp.forEach(e => {
        total += Number(e.price);
    });
    res.send(total.toString());



}

function editDb(req,res){
    let db = loadDb();
    const find = req.body.find;
    const month = req.body.month;
   const result = db.filter(e=> e.name == find && e.month == month) 

   res.json(result); // send to front end
}

module.exports = { enterAmt, totalExp, editDb };

// DB CLEAR KARNE KA BHI LOGIC DEKHO