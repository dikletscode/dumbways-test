var awal = 6969;
var mati = (111 / 1000) * awal;

const hitung = (hari) => {
  for (let a = 21; a <= hari; a += 21) {
    console.log("hari", a);
    console.log(awal);
    awal += awal - mati;
    console.log(awal);
  }
  console.log(`hari ke ${hari} = ${awal}`);
};
// hitung(21) //13.164441
// hitung(42) //24.867
hitung(441); //13145.5511
