const fs = require("fs");
const http = require("http");
const url = require("url");

// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");

// const textOut = `This is what we know about the avocado: ${textIn}. \nCreated on ${Date.now()}`;

// fs.writeFileSync("./txt/output.txt", textOut);

// Asynchronuous Code :

// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//     fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//         fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//             fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, err => {
//                 console.log(`Your file has been written`);
//             })
//         })
//     })
// })

// console.log("Data is running in background : ");

/////////////////////////////////  Creating Server  ///////////////////////////////////////

const server = http.createServer((req, res) => {
    const pathName = req.url;

    if(pathName === "/" || pathName === "/overview") {
        res.end("This is an overview page !");
    } else if (pathName === "/product") {
        res.end ("This is the Products display page !")
    } else {
        res.end("Page not found !")
    }
})

server.listen(8000, "127.0.0.1", () => {
    res.writeHead("")
    console.log("Listening on port 8000");
})