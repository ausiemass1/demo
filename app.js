const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send("its working")
})

app.listen(3000, ()=> console.log("running on port 3000"));
