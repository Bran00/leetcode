var groupAnagrams = function (strs) {
  let exists = []
  let lias = []

  for (let index = 0; index < strs.length; index++) {
    const element = strs[index];
    exists.push(element)


    if (lias.find(e => e[0].split('').sort().join('') === element.split('').sort().join(''))) {
      lias.forEach((e) => {
        if (e[0].split('').sort().join('') === element.split('').sort().join('')) {
          e.push(element)
        }
      })
    } else {
      lias.push([element])
    }
  }

  return lias
};

var groupAnagrams = function (strs) {
  const map = new Map();

  for (const str of strs) {
    const key = str.split('').sort().join('');

    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(str);
  }

  return Array.from(map.values());
};


let strs = ["nozzle", "punjabi", "waterlogged", "imprison", "crux", "numismatists", "sultans", "rambles", "deprecating", "aware", "outfield", "marlborough", "guardrooms", "roast", "wattage"]

console.log(groupAnagrams(strs))


/*const LOWER_A = 97;
const PRIME_NUMBERS = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101,
]; // 26 prime numbers

console.log(PRIME_NUMBERS.length);

const signature = (str) => {
  let sig = 1;
  for (let i = 0; i < str.length; i += 1) {
    sig *= PRIME_NUMBERS[str.charCodeAt(i) - LOWER_A];
  }
  return sig;
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
/*const groupAnagrams = (strs) => {
  const map = new Map();
  strs.forEach((str) => {
    const sig = signature(str);
    if (map.has(sig)) {
      map.get(sig).push(str);
    } else {
      map.set(sig, [str]);
    }
  });
  return [...map.values()];
}; */