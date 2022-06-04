// Frequency count example of 2 arrays of numbers and multiple numbers 
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let freq1 = {};
  let freq2 = {};

  for (let i = 0; i < arr1.length; i++) {
    freq1[arr1[i]] = (freq1[arr1[i]] || 0) + 1;
    freq2[arr2[i]] = (freq2[arr2[i]] || 0) + 1;
  }
  console.log(freq1);
  console.log(freq2);
  for (let key in freq1) {
    if (!(key ** 2 in freq2)) {
      return false;
    }
    if (freq1[key] !== freq2[key ** 2]) {
      return false;
    }
  }

  return true;
}

console.log(same([1, 5, 3], [1, 4, 9]));
