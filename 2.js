const hitung = (tgl, bln) => {
  var data = [1, 2, 1, 3, 2];

  const res = [];
  let temp,
    i,
    j,
    max = 1 << data.length;
  for (i = 0; i < max; i++) {
    temp = [];
    for (j = 0; j < data.length; j++) {
      if (i & (1 << j)) {
        temp.push(data[j]);
      }
    }
    if (temp.length === bln) {
      res.push(
        temp.reduce(function (a, b) {
          return a + b;
        })
      );
    }
  }
  let komposisi = 0;
  for (a of res) {
    if (a == 3) {
      komposisi++;
    }
  }
  return komposisi / 2;
};

console.log(hitung(4, 2));
console.log(hitung(3, 2));
