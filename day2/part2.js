const readFile = require('../helpers/readFile');
const input = readFile();

const lines = input.split('\n');

const hasExactlyOneDifferentCharacter = (word1, word2) => {
  if (word1.length != word2.length) {
    return false;
  }

  let differingCharacters = 0;
  for (let index = 0; index < word1.length; index++) {
    if (word1.charAt(index) !== word2.charAt(index)) {
      differingCharacters += 1;
      if (differingCharacters > 1) {
        return false;
      }
    }
  }
  if (differingCharacters == 1) {
    return true;
  }
  return false;
}

console.log(hasExactlyOneDifferentCharacter('asd', 'fsd'));
console.log(hasExactlyOneDifferentCharacter('asd', 'sad'));

const getCommonLetters = (word1, word2) => {
  let commonLetters = '';

  for (let index = 0; index < word1.length; index++) {
    if (word1.charAt(index) === word2.charAt(index)) {
      commonLetters = commonLetters.concat(word1.charAt(index));
    }
  }

  return commonLetters;
}

for (let i = 0; i < lines.length; i++) {
  for (let j = i; j < lines.length; j++) {
    //console.log('Comparing', lines[i], 'and', lines[j]);
    if (hasExactlyOneDifferentCharacter(lines[i], lines[j])) {
      console.log('Found it!', lines[i], lines[j]);
      console.log('Common letters: ', getCommonLetters(lines[i], lines[j]));
      break;
    }
  }
}