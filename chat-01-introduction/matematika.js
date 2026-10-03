// function tambah(a, b) {
//     return a + b;
// }

// module.exports = tambah;

// console.log("===nama===");
// const nama = "Yanuar";

// module.exports = nama;

// console.log("===Fungsi Penjumlahan dan Pengurangan===");
// const tambah = (a, b) => {
//     return a + b;
// };

// const kurang = (a, b) => {
//     return a - b;
// };

// module.exports = {
//     tambah: tambah,
//     kurang: kurang
// };
// versi code yang lebih ringkas
// module.exports = {
//     tambah,
//     kurang
// };

// console.log("===Fungsi Penjumlahan dan Pengurangan===");
// const tambah = (a, b) => {
//     return a + b;
// };

// const kurang = (a, b) => {
//     return a - b;
// };

// exports.tambah = tambah;
// exports.kurang = kurang;

const tambah = (a, b) => {
    return(a + b);
};

exports= tambah;