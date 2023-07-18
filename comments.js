// Create web server
// Path: server.js
// var http = require("http");
// http.createServer(function (request, response) {
//     response.writeHead(200, { "Content-Type": "text/plain" });
//     response.write("Welcome to Node.js!");
//     response.end();
// }).listen(3000);
// console.log("Server is running at http://localhost:3000");
// Run the server
// node server.js
// Path: server.js
// var http = require("http");
// http.createServer(function (request, response) {
//     response.writeHead(200, { "Content-Type": "text/plain" });
//     response.write("Welcome to Node.js!");
//     response.end();
// }).listen(3000);
// console.log("Server is running at http://localhost:3000");
// Path: server.js
// var http = require("http");
// http.createServer(function (request, response) {
//     response.writeHead(200, { "Content-Type": "text/html" });
//     response.write("<!DOCTYPE html>");
//     response.write("<html>");
//     response.write("<head>");
//     response.write("<title>Welcome to Node.js!</title>");
//     response.write("</head>");
//     response.write("<body>");
//     response.write("<h1>Hello World!</h1>");
//     response.write("</body>");
//     response.write("</html>");
//     response.end();
// }).listen(3000);
// console.log("Server is running at http://localhost:3000");
// Path: server.js
// var http = require("http");
// http.createServer(function (request, response) {
//     response.writeHead(200, { "Content-Type": "application/json" });
//     response.write(JSON.stringify({ message: "Welcome to Node.js!" }));
//     response.end();
// }).listen(3000);
// console.log("Server is running at http://localhost:3000");
// Path: server.js
// var http = require("http");
// var fs = require("fs");
// http.createServer(function (request, response) {
//     fs.readFile("index.html", function (error, data) {
//         if (error) {
//             response.writeHead(404);
//             response.write("Not Found!");
//         } else {
//             response.writeHead(200, { "Content-Type": "text/html" });
//             response.write(data.toString());
//         }
//         response