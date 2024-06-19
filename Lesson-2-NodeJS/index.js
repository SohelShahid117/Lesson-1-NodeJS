// node js bangla tutorial 4 : Module | fs module - managing files
console.log("hi")
const fs = require("fs")
// console.log(fs)
fs.writeFile("demoWriteFile.txt","this is some text.I am a expert programmer",function(err){
    if(err){
        console.log(err)
    }else{
        console.log("success")
    }
})
// fs.writeFile("demo.txt","A am Sohel.I am an expert programmer",function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("success")
//     }
// })

// fs.writeFile("demo.txt","I love programming.",function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("success")
//     }
// })


// fs.appendFile("demo.txt","eNjoy coding life.C,C++,JS,Python.",(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("success")
//     }
// })


// fs.readFile("demo.txt",(data,err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("successful")
//     }
// })


// fs.readFile("demo.txt",(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("successful")
//         console.log(data)
//     }
// })


// fs.readFile("demo.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("successful")
//         console.log(data)
//     }
// })


// fs.rename("demo.txt","demo2.txt",(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("successful")
//     }
// })

// fs.unlink("demo2.txt",(err)=>{   //delete file
//     if(err){
//         console.log(err)
//     }else{
//         console.log("successful")
//     }
// })


fs.exists("demo2.txt",(result)=>{
    if(result){
        console.log("found")
    }else{
        console.log("not found")
    }
})