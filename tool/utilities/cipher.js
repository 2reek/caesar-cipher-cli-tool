const chalk = require('chalk');
const {
  upperCaseFirstLatter,
  upperCaseLastLatter,
  lowerCaseFirstLatter,
  lowerCaseLastLatter,
  numbersOfLattersInAlphabet,
} = require('./config');

const doCipherText = (string, shift) => {
  if (typeof shift !== 'number') {
    process.stderr.write(chalk.red.bold('invalid input data type\n'));
    process.exit(400);
  }

  if (shift < 0)
    return doCipherText(string, shift + numbersOfLattersInAlphabet);

  let output = '';

  for (let i = 0; i < string.length; i++) {
    let letter = string[i];

    if (letter.match(/[a-z]/i)) {
      const code = string.charCodeAt(i);

      if (code >= upperCaseFirstLatter && code <= upperCaseLastLatter) {
        letter = String.fromCharCode(
          ((code - upperCaseFirstLatter + shift) % numbersOfLattersInAlphabet) +
            upperCaseFirstLatter
        );
      } else if (code >= lowerCaseFirstLatter && code <= lowerCaseLastLatter) {
        letter = String.fromCharCode(
          ((code - lowerCaseFirstLatter + shift) % numbersOfLattersInAlphabet) +
            lowerCaseFirstLatter
        );
      }
    }

    output += letter;
  }

  return output;
};

module.exports = doCipherText;
