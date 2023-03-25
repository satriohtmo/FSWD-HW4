// Membuat array dengan nilai random 1 sampai 50
let arr = [];
for (let i = 0; i < 100; i++) {
  const random = Math.floor(Math.random() * 50 + 1);
  arr.push(random);
}
console.log(arr);

//Memecah array berdasarkan index nya
let ganjil = [];
let genap = [];
for (let i = 0; i < arr.length; i++) {
  const el = arr[i];
  if (i % 2 === 1) {
    ganjil.push(el);
  } else if (i % 2 === 0) {
    genap.push(el);
  }
}

console.log(genap);
console.log(ganjil);

//Function untuk mencari value minimal dari index genap
function minIndexGenap(angka) {
  let min = Infinity;
  for (let i = 0; i < angka.length; i++) {
    const el = angka[i];
    if (el < min) {
      min = el;
    }
  }
  return min;
}
console.log(minIndexGenap(genap));

//Function untuk mencari value minimal dari index ganjil
function minIndexGanjil(angka) {
  let min = Infinity;
  for (let i = 0; i < angka.length; i++) {
    const el = angka[i];
    if (el < min) {
      min = el;
    }
  }
  return min;
}
console.log(minIndexGanjil(ganjil));

//Function untuk mencari value maximal dari index genap
function maxIndexGenap(angka) {
  let max = -Infinity;
  for (let i = 0; i < angka.length; i++) {
    const el = angka[i];
    if (el > max) {
      max = el;
    }
  }
  return max;
}
console.log(maxIndexGenap(genap));

//Function untuk mencari value maximal dari index ganjil
function maxIndexGanjil(angka) {
  let max = -Infinity;
  for (let i = 0; i < angka.length; i++) {
    const el = angka[i];
    if (el > max) {
      max = el;
    }
  }
  return max;
}
console.log(maxIndexGanjil(ganjil));

//Function untuk mencari total value dari index genap
function totalIndexGenap(angka) {
  let res = "";
  let total = 0;
  for (let i = 0; i < angka.length; i++) {
    total += angka[i];
  }
  res = `Total semua nilai dari index Genap adalah ${total}`;
  return res;
}
console.log(totalIndexGenap(genap));

//Function untuk mencari total value dari index ganjil
function totalIndexGanjil(angka) {
  let res = "";
  let total = 0;
  for (let i = 0; i < angka.length; i++) {
    total += angka[i];
  }
  res = `Total semua nilai dari index Ganjil adalah ${total}`;
  return res;
}
console.log(totalIndexGanjil(ganjil));

//Function untuk mencari rata2 index genap
function rataRataIndexGenap(angka) {
  let res = "";
  let rataRata = 0;
  let pembulatan = 0;
  for (let i = 0; i < angka.length; i++) {
    rataRata += angka[i] / angka.length;
    pembulatan = Math.floor(rataRata);
  }
  res = `Rata rata nilai index Genap adalah ${pembulatan}`;
  return res;
}
console.log(rataRataIndexGenap(genap));

//Function untuk mencari rata2 index ganjil
function rataRataIndexGanjil(angka) {
  let res = "";
  let rataRata = 0;
  let pembulatan = 0;
  for (let i = 0; i < angka.length; i++) {
    rataRata += angka[i] / angka.length;
    pembulatan = Math.floor(rataRata);
  }
  res = `Rata rata nilai index Ganjil adalah ${pembulatan}`;
  return res;
}
console.log(rataRataIndexGanjil(ganjil));

// Perbandingan Min
let minGenap = minIndexGenap(genap);
let minGanjil = minIndexGanjil(ganjil);
if (minGenap < minGanjil) {
  console.log(`Nilai minimal lebih kecil adalah index Genap dengan nilai ${minGenap}`);
} else if (minGanjil < minGenap) {
  console.log(`Nilai minimal lebih kecil adalah index Ganjil dengan nilai ${minGanjil}`);
} else if (minGanjil === minGenap) {
  console.log(`Nilai minimal index Ganjil dan Index Genap imbang`);
}

//Perbandingan Max
let maxGenap = maxIndexGenap(genap);
let maxGanjil = maxIndexGanjil(ganjil);
if (maxGenap > maxGanjil) {
  console.log(`Nilai maximal lebih besar adalah index Genap dengan nilai ${maxGenap}`);
} else if (maxGanjil > maxGenap) {
  console.log(`Nilai maximal lebih besar adalah index Ganjil dengan nilai ${maxGanjil}`);
} else if (maxGanjil === maxGenap) {
  console.log(`Nilai maximal index Ganjil dan Index Genap imbang`);
}

//Perbandingan Total
let totalGenap = totalIndexGenap(genap);
let totalGanjil = totalIndexGanjil(ganjil);
if (totalGenap > totalGanjil) {
  console.log(`Nilai total lebih besar index genap dengan ${totalGenap}`);
} else if (totalGanjil > totalGenap) {
  console.log(`Nilai total lebih besar index ganjil dengan ${totalGanjil}`);
}

//Perbandingan Rata - Rata
let rataRataGenap = rataRataIndexGenap(genap);
let rataRataGanjil = rataRataIndexGanjil(ganjil);
if (rataRataGenap > rataRataGanjil) {
  console.log(`Index genap lebih besar dengan ${rataRataGenap}`);
} else if (rataRataGanjil > rataRataGenap) {
  console.log(`Index ganjil lebih besar dengan ${rataRataGanjil}`);
}
