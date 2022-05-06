function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = word.split("").reverse().join("")
  if (word === reversedWord) {
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
  1. See if string has a reverse method.
*/

/*
  Add written explanation of your solution here
  Turns string into an array, reverses it, and puts it back together.
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
