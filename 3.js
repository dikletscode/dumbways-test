const horizontal = (item, jmlh) => {
  let str = "";
  for (let a = 0; a < jmlh; a++) {
    str += item;
  }
  return str;
};
console.log(horizontal("aku", 4));

const cetakGambar = (baris) => {
  let modulo = baris - (baris % (baris - 1));
  for (let a = 1; a <= baris; a++) {
    if (a == 1) {
      console.log(
        "*" + horizontal("=", modulo / 2 - 1) + "*" + horizontal("=", modulo / 2 - 1) + "*"
      );
    } else if (a == 1 + (baris - (baris % 2)) / 2) {
      console.log(horizontal("*", baris));
    } else if (a == baris) {
      console.log(
        "*" + horizontal("=", modulo / 2 - 1) + "*" + horizontal("=", modulo / 2 - 1) + "*"
      );
    } else {
      console.log(horizontal("=", modulo / 2) + "*" + horizontal("=", modulo / 2));
    }
  }
};
cetakGambar(5);
cetakGambar(7);
cetakGambar(9);
cetakGambar(79);
