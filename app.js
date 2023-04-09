const express = require("express")

const app = express();
app.use((req,res,next)=>{
    next()
});
app.use((req,res,next)=>{
    res.send("<h1> Hello from Express JS!")
})

app.listen(3000)