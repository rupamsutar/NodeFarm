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

const replaceTemplate = (temp, product) => {
    const output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
    output = output.replace(/{%IMAGE%}/g, product.image);
    output = output.replace(/{%PRICE%}/g, product.price);
    output = output.replace(/{%FROM%}/g, product.from);
    output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
    output = output.replace(/{%QUANTITY%}/g, product.quantity);
    output = output.replace(/{%DESCRIPTION%}/g, product.description);
    output = output.replace(/{%ID%}/g, product.id);

    id(!product.organic) {output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');}
}

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');



const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === "/" || req.url === "/overview") {
        res.writeHead(200, {'Content-type': 'text/html'});

        const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el))


        res.end(tempOverview);
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



