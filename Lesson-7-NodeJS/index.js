//node js bangla tutorial 9 : http routing and nodemon package
//https://youtu.be/Vlk4UPzi6tc?si=ju_TsJwBnC_RXBxt
const http = require("http")
const fs = require("fs")
const port = 3000
// const localhost = '127.0.0.1'
const hostName = '127.0.0.1'
const myServer = http.createServer((req,res)=>{
    // console.log(req.url)
    // res.end('welcome to my http server')
    const handleReadFile = (statusCode,htmlFileLocation) =>{
        fs.readFile(htmlFileLocation,(err,data)=>{
            res.writeHead(statusCode,{"content-type":"text/html"})
            res.write(data)
            res.end()
        })

    }
    if(req.url=="/"){
        handleReadFile(202,"./htmlPage/index.html")
    }
    else if(req.url=="/about"){
        handleReadFile(202,"./htmlPage/about.html")
    }
    else if(req.url=="/contact"){
        handleReadFile(202,"./htmlPage/contact.html")
    }
    else{
        handleReadFile(404,"./htmlPage/error.html")
    }
})
myServer.listen(port,hostName,()=>{
    console.log(`server is running at http://${hostName}:${port}`)
})