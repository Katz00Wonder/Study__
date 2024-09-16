const process = require('process');
const fs = require('fs');
const crypto = require('crypto');


fs.writeFile("id.txt", "works", (err) => {
    fs.readFile("id.txt", (err,data) => {
        if (err) {
            console.log(err);
            process.exit(1);
        }
        console.log(data);
    });
}); // а) создаем исходный файл и считываем его
const file = fs.readFileSync("id.txt");
file.trim;

let hashFile = fs.writeFile("id.txt.sha256", crypto.createHash("sha256").update(file).digest("hex"), (err) => {
    fs.readFile("id.txt.sha256", (err,data) => {
        if (err) {
            console.log(err);
            process.exit(100);
        }
        console.log(data);
    })
}); // б) создаем хеш файл и считываем его

const hash = crypto.createHash('sha256');

hash.update(file).digest('hex');

if (hashFile === hash) {
    console.log("Файл совпадает");
    process.exit(0);
} else {
    console.log("Файл не совпадает");
    process.exit(102);
}













