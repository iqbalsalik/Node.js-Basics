const express = require("express")

const admintRouter = require("./routes/admin");
const shopRouter = require("./routes/shop")

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:false}))

app.use(admintRouter);
app.use(shopRouter);

app.use((req,res,next)=>{
    res.status(404).send("<h1>Page Not Found</h1>")
})


app.listen(3000)