// Frequency Counter - sameFrequency

// Write a function called sameFrequency. Given two positive intergers,
// find out if the two numbers have the same frequency of digits.

// Solution Requirements
//      - Time Complexity: O(n)

function sameFrequency(num1, num2) {
  num1 += '';
  num2 += '';
  if (num1.length != num2.length) return false;
  let freq1 = {},
    freq2 = {};

  for (let i = 0; i < num1.length; i++) {
    freq1[num1[i]] = (freq1[num1[i]] || 0) + 1;
    freq2[num2[i]] = (freq2[num2[i]] || 0) + 1;
  }

  for (key in freq1) {
    if (!(key in freq2)) return false;
    if (freq1[key] != freq2[key]) return false;
  }
  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
