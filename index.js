const fs = require("fs");
const http = require("http");
const url = require("url");

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
    console.log(req.url);
    if (req.url === "/" || req.url === "/overview") {
        res.end("This is an overview");
    } else if (req.url === "/product"){
        res.end("This is our product");
    }else if ( req.url === "/api") {
        fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
            console.log(data);
            const productData = JSON.parse(data);
            console.log(productData);
            res.writeHead(200, {
                'Content-type': 'application/json'
            })
            res.end(productData);
        })

    } else {
        res.writeHead (404, {
            'Content-type': "text/html",
            'Name': 'Rupam Sutar'
        });
        res.end("<h1>Page Not Found !</h1>");
    }
})

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to the server on port 8000");
})



