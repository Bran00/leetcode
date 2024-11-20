var groupAnagrams = function (strs) {
  let newArray = [];
  let loadArray = [];

  for (let i = 0; i < strs.length; i++) {
    loadArray = []
    let firstAna = strs[i].split('').sort().join('')
    loadArray.push(strs[i])
    for(let t = i; t < strs.length; t++) {
      let secondAna = strs[t].split('').sort().join('')
      if(firstAna === secondAna) {
        loadArray.push(strs[i])
      }
    }
    newArray.push(loadArray)
    if(newArray.length === strs.length){
      console.log(newArray.length === strs.length)
      break
    }
  }
  console.log(newArray)
};

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

console.log(groupAnagrams(strs))