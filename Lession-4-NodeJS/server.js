//node js bangla tutorial 6 : Module | http module - create http server
//http,https,fs,path,url,util

const http = require("http")
const port  = 3000;
const hostName = '127.0.0.1'
// console.log(http)

// http.createServer((req,res)=>{
//     res.end("hello.I am your first server!!!")
// });
// .listen(3000)
const myServer = 
http.createServer((req,res)=>{
    // res.end("hello.I am your first server!!! learning about server side")
    res.end(`<h2> hello.I am your first server!!! learning about server side </h2>`)
});
myServer.listen(port,hostName,()=>{
    console.log(`server is running successfully at http://${hostName}:${port}`)
})