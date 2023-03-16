const fs = require("fs");


fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
    fs.readFile(`./txt/${data}.txt`, "utf-8", (err, data2) => {
        fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
            fs.writeFile("./txt/final.txt", `${data2} \n\n${data3}`, (err) => {
                console.log("File has been succesfully written");
            });
        });
    });
});
