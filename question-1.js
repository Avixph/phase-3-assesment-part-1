// Data Structures and Algorithms:

// You are given a book as input. Write a function that takes all the words in the book as an input and returns the frequency of each word. Consider how you will take in the input, what data structures to use, and edge cases other than the given example. Test your function with 3 different inputs other than the example, and show that it works for the edge cases as well.

// Example:

// Input: “Is your favorite car brand BMW? Mine is Toyota.”

// Output:
// is->2
// your->1
// favorite->1
// car->1
// brand->1
// BMW->1
// mine->1
// toyota->1

function countFrequency(string) {
  if (string.length === 0) {
    return {};
  }
  let count = {};
  let sArr = string.split(" ");

  for (let i = 0; i < sArr.length; i++) {
    if (count[sArr[i]] === undefined) {
      count[sArr[i]] = 1;
    } else {
      count[sArr[i]] += 1;
    }
  }
  return count;
}

console.log(countFrequency("Is your favorite car brand BMW? Mine is Toyota."));
