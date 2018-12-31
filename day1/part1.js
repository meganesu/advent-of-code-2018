const readFile = require('../helpers/readFile');
const input = readFile();

let frequency = 0;

const lines = input.split('\n');
for (const line of lines) {
  const direction = (line[0] === '+') ? 1 : -1;
  const value = parseInt(line.substring(1));
  frequency += direction * value;
}

console.log(frequency);