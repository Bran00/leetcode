//Given an integer array nums, return true if any value appears more than once in the array
// otherwise return false.

var nums = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 0]

class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    let unique = new Array();
    let duplicate = false;

    for (let i = 0; i < nums.length; i++) {
      let istrue = unique.find(item => item === nums[i])
      if (istrue != undefined) {
        duplicate = true;
        return duplicate
      } else {
      unique.push(nums[i])
      }
    }
    return duplicate
  }

  containsDuplicate = function (nums) {
  const seen = new Set();

  for (const num of nums) {
    // Se o número já estiver no conjunto, encontramos uma duplicata
    if (seen.has(num)) {
      return true;
    }
    // Caso contrário, adicionamos o número ao conjunto
    seen.add(num);
  }

  // Se passarmos por todos os números sem encontrar duplicatas, retornamos false
  return false;
};
}

var has = new Solution()
console.log(has.hasDuplicate(nums))