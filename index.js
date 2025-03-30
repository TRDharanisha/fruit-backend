const express = require("express")
const app = express()
const PORT = process.env.PORT||3000
app.listen(PORT,()=>{
    console.log("Port running 3000.........")
})
let data=[]

app.get("/add",(req, res)=> {
    let items = req.query.item;

    if (items) {
        data.push(items);
        res.send(data);
    }
    console.log(data);
});

app.get("/",(req,res)=>{
    res.send("welcome");
})