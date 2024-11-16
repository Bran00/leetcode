let arr1 = [5, 4, 3, 2, 1]


/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function (arr) {
  let subArr = 0;
  let sizeActually = arr.length;
  
  let left = 0;
  while (left + 1 < arr.length && arr[left] <= arr[left + 1]) {
    left++;
  }

  if (left === arr.length - 1) return 0;

  let right = arr.length - 1;
  while (right - 1 >= 0 && arr[right] >= arr[right - 1]) {
    right--;
  }

  let minLength = Math.min(arr.length - left - 1, right);

  let i = 0;
  let j = right;
  while (i <= left && j < arr.length) {
    if (arr[i] <= arr[j]) {
      minLength = Math.min(minLength, j - i - 1);
      i++;
    } else {
      j++;
    }
  }

  return minLength;
};

findLengthOfShortestSubarray(arr1)