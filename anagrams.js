/**
 * ANAGRAMS
Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true

 */

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let freq1 = {},
    freq2 = {};

  for (let i = 0; i < str1.length; i++) {
    freq1[str1[i]] = (freq1[str1[i]] || 0) + 1;
    freq2[str2[i]] = (freq2[str2[i]] || 0) + 1;
  }

  for (let key in freq1) {
    if(!(key in freq2)) {
      return false;
    }
    if(freq1[key] !== freq2[key]) {
      return false;
    }
  }
  return true;
}


console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram("rat","car"));
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('qwerty', 'qeywrt'));
console.log(validAnagram('texttwisttime', 'timetwisttext'));
console.log(validAnagram('qwerty', 'qwert'));
