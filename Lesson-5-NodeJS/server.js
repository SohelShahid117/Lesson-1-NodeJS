// node js bangla tutorial 7 : http res, req model and status code
// https://youtu.be/lHfnjUP-N4E?si=zomTb0dwopXVWzd5
const http = require("http")
const port = 3000
const localhost = '127.0.0.1'
const myServer = http.createServer((req,res)=>{
    // res.writeHead(202,{'content-type':'text/plain'})
    res.writeHead(202,{'content-type':'text/html'})
    res.write("<b>hello sohel Shahid</b>")
    res.end()
})
myServer.listen(port,()=>{
    console.log(`server is running at http://${localhost}:${port}`)
})