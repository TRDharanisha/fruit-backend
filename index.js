const express = require("express")

const app = express()

let data=[]

app.get("/add", function (req, res) {
    let items = req.query.item;

    if (items) {
        data.push(items);
        res.send(data);
    }
    console.log(data);
});

app.listen(3000,function(){
    console.log("Port running 3000.........")
})