const os = require ("os");
const path = require ("path");

console.log("===NODE.JS INFORMATION===");

console.log("Node Version:", process.version);
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());

console.log("\n===PATH INFORMATION===");

console.log("Current Directory:", __dirname);
console.log("Current File:", __filename);

console.log(
    "Example Path:",
    path.join(__dirname, "data", "produk.json")
);

console.log("\n===TIMER===");

console.log("A");

console.log("B");
// setTimeout(() => {
//     console.log("B");
// }, 1000);

console.log("C");

// console.log("===NODE.JS MEMBUAT FILE===");

// const fs = require("fs");

// fs.writeFileSync(
//     "data.txt",
//     "Halo, saya sedang belajar Node.js!",
// );
// fs.appendFileSync(
//     "data.txt",
//     "\nData tambahan"
// );
// fs.readFileSync(
//     "data.txt",
//     "utf8"
// );
// // const data = fs.readFileSync(
// //     "data.txt",
// //     "utf8"
// // );
// // console.log(
// //     fs.readFileSync(
// //         "data.txt",
// //         "utf8"
// //     )
// // );


// console.log("File berhasil dibuat");
// // console.log(data);

// console.log("===ASYNC READ===");

// const fs = require("fs");

// console.log("A");

// fs.readFile(
//     "data.txt",
//     "utf8",
//     (err, data) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log(data);
//         }
//     );

// console.log("B");

// console.log("===ASYNC FLOW===");

// const fs = require("fs");

// console.log("A");

// fs.readFile(
//     "data.txt",
//     "utf8",
//     (err, data) => {
//         if (err) {
//             console.log(err);
//             return;
//         }

//         console.log("C");
//         console.log(data);
//     }
// );
// console.log("B");

// console.log("===ERROR HANDLING===");

// const fs = require("fs");

// fs.readFile(
//     "file-tidak-ada.txt",
//     "utf8",
//     (err, data) => {
//         if (err) {
//            console.log("Terjadi error!");
//             console.log(err.message);
//             return;
//         }
//         console.log(data);
        
//     }
// );

// console.log("Program tetap berjalan...");

// console.log("===SYNC TEST===");

// const fs = require("fs");

// console.log("A");

// const data = fs.readFileSync(
//     "data.txt",
//     "utf8"
// );

// console.log(data);

// console.log("B");

// console.log("===ASYNC TEST===");

// const fs = require("fs");

// console.log("A");

// fs.readFile(
//     "data.txt",
//     "utf8",
//     (err, data) => {
//         if (err){
//             console.log(err.message);
//             return;
//         }
//         console.log(data);
        
//     }
// );

// console.log("B");

// console.log("===EVENT LOOP TEST===");

// const fs = require("fs");

// console.log("A");

// fs.readFile(
//     "data.txt",
//     "utf8",
//     (err, data) => {
//         if (err) {
//             console.log(err.message);
//             return;
//         }
//         console.log("B");
        
//     }
// );

// setTimeout(() => {
//     console.log("C");
// }, 0);

// console.log("D");

console.log("===PHASE TEST===");

const fs = require("fs");

console.log("A");

fs.readFile(
    "data.txt",
    "utf8",
    (err, data) => {
        if (err) {
            console.log(err.message);
            return;
        }
        console.log("B");
    }
);

setTimeout(() => {
    console.log("C");
}, 0);

setImmediate(() => {
    console.log("D");
});

console.log("E");



