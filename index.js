var http = require("http");
const url = require("url");
var fs = require("fs");

http
  .createServer((request, response) => {
    const q = url.parse(request.url, true).pathname;
    const filename = "." + q +'.html';
    if (q === "/") {
      fs.readFile("./index.html", function (err, data) {
        if (err) {
          response.writeHead(200, { "Content-Type": "text/html" });
          response.write("error occured");
          return response.end();
        }
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(data.toString());
        response.end();
      });
    } else if (q === "/about") {
      fs.readFile(filename, function (err, data) {
        if (err) {
          response.writeHead(200, { "Content-Type": "text/html" });
          response.write("error occured");
          return response.end();
        }
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(data.toString());
        response.end();
      });
    } else if (q === "/contact-me") {
      fs.readFile(filename, function (err, data) {
        if (err) {
          response.writeHead(200, { "Content-Type": "text/html" });
          response.write("error occured");
          return response.end();
        }
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(data.toString());
        response.end();
      });
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write("<h1>404 Not Found</h1>");
      return response.end();
    }
  })
  .listen(8081);

console.log("Server running at http://127.0.0.1:8081/");
