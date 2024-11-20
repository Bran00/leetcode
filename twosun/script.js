var twoSum = function (nums, target) {
  const used = []
  let newNums = []
  let found = false

  for (let i = 0; i < nums.length; i++) {
    let less = target - nums[i]
    used.push(i)
    nums.map((n, t) => {
      if(n === less && !used.includes(t)) {
        if((n && t) !== undefined)
        newNums.push(i, t)
        found = true
      }
    })
  }
  return newNums
};

const twoSum2 = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i]
    }
    map.set(nums[i], i);
  }
};

var leto = [3, 2, 4]
var tar = 6

console.log(twoSum2(leto, tar))