const readFile = require('../helpers/readFile');
const input = readFile();

const lines = input.split('\n');

const hasExactlyNOfAnyLetter = (countsOfLetters, n) => {
  for (const letter of Object.keys(countsOfLetters)) {
    if (countsOfLetters[letter] == n) {
      return true;
    }
  }
  return false;
}

const calculateLetterCounts = (word) => {
  let countsOfLetters = {};
  for (const letter of word) {
    if (!(letter in countsOfLetters)) {
      countsOfLetters[letter] = 0;
    }
    countsOfLetters[letter] += 1;
  }
  return countsOfLetters;
}

const countNumberOfIdsWithExactly2Or3MatchingLetters = (array) => {
  let count = {
    exactly2MatchingLetters: 0,
    exactly3MatchingLetters: 0
  };

  for (const line of lines) {
    const countsOfLetters = calculateLetterCounts(line);
    if (hasExactlyNOfAnyLetter(countsOfLetters, 2)) {
      count.exactly2MatchingLetters += 1;
    }
    if (hasExactlyNOfAnyLetter(countsOfLetters, 3)) {
      count.exactly3MatchingLetters += 1;
    }
  }

  return count;
};


const count = countNumberOfIdsWithExactly2Or3MatchingLetters(lines);

console.log(`Checksum: ${count.exactly2MatchingLetters * count.exactly3MatchingLetters}`);

/*
Create an empty dictionary
For each letter in the word:
  if the letter isn't in the dictionary yet, add it
  increment the value (count) of the letter by 1
for each key (letter) in the dictionary:
  if the count == 2, increment counter for exactly two of any letter
  if the count == 3, increment counter for exactly three of any letter
*/