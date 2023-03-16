const fs = require("fs");
const http = require("http");

// fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
//     fs.readFile(`./txt/${data}.txt`, "utf-8", (err, data2) => {
//         fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
//             fs.writeFile("./txt/final.txt", `${data2} \n\n${data3}`, (err) => {
//                 console.log("File has been succesfully written");
//             });
//         });
//     });
// });

const server = http.createServer((req, res) => {
    console.log(req)
    res.end("Hello from the server");
})

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to the server on port 8000");
})
