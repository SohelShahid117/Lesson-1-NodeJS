// node js bangla tutorial 5 : Module | os and path module
// https://youtu.be/EHo7KNPawhw?si=dehEpKCfthG3IlUY
// const os = require("os")
const {homedir,hostname,totalmem,freemem,userInfo,uptime} = require("os")
// console.log(os)
// console.log(os.userInfo)
// console.log(os.userInfo())
// // console.log(os.userInfo().homedir)
// console.log(os.homedir())
// console.log(os.hostname())
// console.log(os.totalmem())
// console.log(os.freemem())

console.log(homedir())
console.log(hostname())
console.log(totalmem())
console.log(freemem())
console.log(userInfo())
console.log(uptime())

console.log(__dirname)
console.log(__filename)

const path = require("path")
console.log(path)

const extensionName = path.extname("index.html")
console.log(extensionName)

// const joinName = path.join(__dirname + "views")
// const joinName = path.join(__dirname + "/views")
const joinName = path.join(__dirname + "/../views")
console.log(joinName)