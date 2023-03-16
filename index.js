const fs = require("fs");

const textIn = fs.readFileSync("./txt/input.txt", "utf-8");

const textOut = `This is what we know about the avacado: \n ${textIn} \n \n Created on ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", textOut);

