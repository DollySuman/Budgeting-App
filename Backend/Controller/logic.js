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
    const newEntry = req.body;


    let db = loadDb();

    const exists = db.find(item => item.name === newEntry.name && item.price === newEntry.price);

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
   let monthexp = db.filter(e => e.month === "November") ; // to get month by the user
    
   monthexp.forEach(e => {    
        total += e.price;  
    });
      res.send(`The total expense is ${total}`);


 
}

module.exports =  {enterAmt , totalExp };