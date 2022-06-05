/**
 * Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.
 */

// frequancy counter
function areThereDuplicates(...args) {
  let freq = {};

  for (let i = 0; i < args.length; i++) {
    if (freq[args[i]]) return true;
    freq[args[i]] = (freq[args[i]] || 0) + 1;
  }

  return false;
}
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true



// multiple pointers

const areThereDuplicates2 = (...args) => {
  args.sort();
  for (let j = 1, i = 0; j < args.length; i++, j++)
    if (args[i] === args[j])
      return true;

  return false;
};

const areThereDuplicates3 = () => {
  return new Set(arguments).size !== arguments.length;
};