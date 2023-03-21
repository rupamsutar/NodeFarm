const fs = require("fs");
const http = require("http");
const path = require("path");
const url = require("url");

const replaceTemplate = require("./modules/modules.js")

// fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
//     fs.readFile(`./txt/${data}.txt`, "utf-8", (err, data2) => {
//         fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
//             fs.writeFile("./txt/final.txt", `${data2} \n\n${data3}`, (err) => {
//                 console.log("File has been succesfully written");
//             });
//         });
//     });
// });


 
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');



const server = http.createServer((req, res) => {
    const {query, pathname} = url.parse(req.url, true);
    


    //Overview
    if (req.url === "/" || req.url === "/overview") {
        res.writeHead(200, {'Content-type': 'text/html'});

        const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el));
        const output = tempOverview.replace("{%PRODUCT_CARDS%}", cardsHtml);

        res.end(output);

    }
    
    //Product
    else if (pathname === "/product"){
        res.writeHead(200, {'Content-type': 'text/html'});
        console.log(query.id);
        const product = dataObj[query.id];
        const output = replaceTemplate(tempProduct, product);

        res.end(output);
    }
    
    
    else if ( req.url === "/api") {
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



