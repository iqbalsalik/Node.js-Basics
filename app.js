const http = require("http");
const handler = require("./routes.js")
console.log(handler.text);

const server = http.createServer(handler.handler)

server.listen(3000);