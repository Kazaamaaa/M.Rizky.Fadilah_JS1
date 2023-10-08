// Java Script if

let jariLingkaran = 3.14;
if (jariLingkaran === 3.14) {
    console.log(`${jariLingkaran} ini adalah jari-jari lingkaran`)
}


// javascript if else
let jariLingkaran1 = 3.14;
if (jariLingkaran1 === 20) {
    console.log(`${jariLingkaran1} ini adalah jari-jari lingkaran`)
} else {
    console.log(`ini bukan jari-jari lingkaran`)
}

//javascript nested if
let nilaiUjian = 90;
let nilaiTugas = 100;
if (nilaiUjian > 80) {
    if (nilaiTugas < 80) {
        console.log("nilai kamu A");
    } else {
        console.log("nilai kamu b");
    }
} else {
    console.log("nilai kamu c");
}

//javascript switch case
let nilaiAkhir = "B";
switch (nilaiAkhir) {
    case "A":
        console.log('nilai kamu 90');
        break;
    case "B":
        console.log('nilai kamu 80');
        break;
    case "C":
        console.log('nilai kamu 75');
        break;
    case "D":
        console.log('nilai kamu 60');
        break;
}

//javascript for statement
for (let a = 1; a <= 20; a++) {
    console.log(`pacar ku yang ke ${a}`)
}

//javascriptm while
let z = 0;
while (z <= 10) {
    console.log(`dia selingkuh sebanyak ${z} x`);
    z++;
}

//javascript dowhile
let m = 1;
do {
    console.log(`mantan aku ada ${m}`);
    m++;
} while (m < 5);

//javascript function

function hitungLuasLingkaran(phi, diameter) {
    return (phi * diameter * diameter);
}
let luasLingkaran = hitungLuasLingkaran(3.14, 15);
console.log(`luas lingkaran adalah ${luasLingkaran}`);

function kelulusan() {
    let nilaiAkhir = 74
    let nama = "Kazamaa"
    let kelas = "SI-2"
    if (nilaiAkhir > 75) {
        console.log(`Nama : ${nama} kelas : ${kelas} nilai : ${nilaiAkhir} kamu dinyatakan lulus`)
    } else if (nilaiAkhir === 75) {
        console.log(`Nama : ${nama} kelas : ${kelas} nilai : ${nilaiAkhir} kamu dinyatakan remedial`)
    } else {
        console.log(`Nama : ${nama} kelas : ${kelas} nilai : ${nilaiAkhir} kamu dinyatakan tidak lulus `)
    }
}
kelulusan();