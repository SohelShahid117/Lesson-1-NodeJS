//node js bangla tutorial 10 : creating node server and deploy on Heroku
//https://youtu.be/2IFDMvfJJHc?si=FFCON0wTp2VFxSaw
const http = require("http");
const fs = require("fs");
const port = "3000";
const hostName = "127.0.0.1";
const myServer = http.createServer((req, res) => {
  //   res.end("hi,welocome to NODE JS,enjoy server side language.Express JS Must");
  const handleReadFile = (statusCode, fileLocation) => {
    fs.readFile(fileLocation, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(statusCode, { "content-type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  };
  if (req.url == "/") {
    // fs.readFile("index.html", "utf-8", (err, data) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     res.writeHead(202, { "content-type": "text/html" });
    //     res.write(data);
    //     res.end();
    //   }
    // });
    handleReadFile(202, "index.html");
  } else if (req.url == "/about") {
    // fs.readFile("about.html", "utf-8", (err, data) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     res.writeHead(202, { "content-type": "text/html" });
    //     res.write(data);
    //     res.end();
    //   }
    // });
    handleReadFile(202, "about.html");
  } else if (req.url == "/contact") {
    // fs.readFile("contact.html", "utf-8", (err, data) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     res.writeHead(202, { "content-type": "text/html" });
    //     res.write(data);
    //     res.end();
    //   }
    // });
    handleReadFile(202, "contact.html");
  } else {
    // fs.readFile("error.html", "utf-8", (err, data) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     res.writeHead(202, { "content-type": "text/html" });
    //     res.write(data);
    //     res.end();
    //   }
    // });
    handleReadFile(404, "error.html");
  }
});
myServer.listen(port, hostName, () => {
  console.log(`server is running at http://${hostName}:${port}`);
});
