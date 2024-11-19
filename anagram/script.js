class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {

    if (s.length != t.length) {
      return false;
    }

    let size = s.length
    for (let i = 0; i <= size; i++) {
      let stringS = s.slice(i)
      if (t.includes(stringS)) {
        let alternative = s.slice(0, i)
        if (t.includes(alternative)) {
          console.log(s.replace(alternative, ""))
          console.log(alternative)
          return true
        } else {
          alternative = alternative.split("").sort((b, a) => a.localeCompare(b)).join("")
          console.log("alterna " + alternative)
          console.log(stringS)
        }
      } else {
        stringS = stringS.split("").sort().join("")

      }
    }

    return false
  }
}

function isAnagram2(s, t) {
  if (s.length !== t.length) return false; // Anagramas devem ter o mesmo tamanho
  return s.split('').sort().join('') === t.split('').sort().join('');
}


var a = "jar"
var t = "jam"

//console.log(new Solution().isAnagram(a, t))
console.log(isAnagram2(a, t))