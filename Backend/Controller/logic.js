const fs = require("fs")



function loadDb(){
    if(fs.existsSync("Db.json")){
        try{

          const data =   fs.readFileSync("Db.json","utf-8")
          return JSON.parse(data);
        } catch {
            return [];
        }
    }
    return [];
}

function enterAmt(req,res){
    let newEntry = req.body;

     newEntry.price = Number(newEntry.price);
    let db = loadDb();
    if (!newEntry.name || !newEntry.price || !newEntry.month) {
        return res.status(400).send("Missing required fields: name, price, or month");
    }

    
    const exists = db.find(item => item.name === newEntry.name && item.price === newEntry.price && item.month === newEntry.month);

    if(exists){
        return res.send("Entry is already added in the Database")
    }

    db.push(newEntry)

    fs.writeFileSync("Db.json", JSON.stringify(db,null,2));
    res.send("Amount saved successfully");

}

function totalExp(req,res){
    let db = loadDb();
    let total = 0;
   let monthexp = db.filter(e => e.month === month) ; // to get month by the user
    
   monthexp.forEach(e => {    
        total += e.price;  
    });
      res.send(`The total expense is ${total}`);


 
}

module.exports =  {enterAmt , totalExp };