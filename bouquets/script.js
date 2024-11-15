var bloomDay = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];
var m = 4;
var k = 2;

var minDays = function (bloomDay, m, k) {
  let qtK = 0;
  let qtM = 0;
  let qtDay = 0;
  
  bloomDay.sort((a, b) => a - b);
  var qtAllFlowers = m * k
  if (qtAllFlowers > bloomDay.length) {
    let diference = bloomDay.length - qtAllFlowers
    return diference
  } else {
  for (let i = 0; i < bloomDay.length; i++) {
    if (m >= qtM) {
      if (k >= qtK) {
        qtK++
        if (qtK === k) {
          qtM++
          qtK = 0;
          qtDay = bloomDay[i]
        }
      }
      if ( qtM === m) {
        qtM = 0;
        break;
      }
    }
  }
  return qtDay
}
};

console.log(minDays(bloomDay, m, k));