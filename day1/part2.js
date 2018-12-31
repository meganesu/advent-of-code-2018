const readFile = require('../helpers/readFile');
const input = readFile();

let frequency = 0;
let frequencies = [0];

const lines = input.split('\n');
while (true) {
  for (const line of lines) {
    const direction = (line[0] === '+') ? 1 : -1;
    const value = parseInt(line.substring(1));
    frequency += direction * value;
  
    if (frequencies.includes(frequency)) {
      console.log('First frequency visited twice: ', frequency);
      process.exit(1);
    }
    frequencies.push(frequency);
  }
}