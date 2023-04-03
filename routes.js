const fs = require("fs");

const requestHandler = (req,res)=>{
    const url = req.url;
    const method = req.method;
    if(url === "/home"){
      
       fs.readFile('./messege.txt', {encoding:'utf8'}, (err, data) => {
          if (err) {
            return;
          }
          res.write("<html>")
          res.write(`<body><p>${data}</p><br><form action='/messege' method = 'POST'> <input type='text' name='messege'> <button type='submit'>submit</button></form></body>`)
          res.write("</html>")
          return res.end()
        });
    }
    
    if(url === "/messege" && method === "POST"){
       const body = [];
       req.on("data",(chunks)=>{
          body.push(chunks)
       })
       return req.on("end",()=>{
          const bodyData = Buffer.concat(body).toString();
          const messege = bodyData.split("=")[1]
          fs.writeFile("messege.txt", messege,(err)=>{
             if(err){
                return 
             }
             res.statusCode = 302;
             res.setHeader("Location","/home")
             return res.end();
          });
       })
    }
}

// module.exports = requestHandler;

// module.exports = {
//     handler:requestHandler,
//     text:"some hard coded text"
// }

// module.exports.handler = requestHandler;
// module.exports.text = "some hard coded text"

exports.handler = requestHandler;
exports.text = "some hard coded text"