const program = require('./utilities/program');
const chalk = require('chalk');
const { pipeline } = require('stream');
const createReadStream = require('./streams/readStream');
const createTransformStream = require('./streams/transformStream');
const createWriteStream = require('./streams/writeStream');

const readStream = createReadStream(program.input);
const transformStream = createTransformStream(program.action, program.shift);
const writeStream = createWriteStream(program.output);

pipeline(readStream, transformStream, writeStream, (error) => {
  if (error) {
    console.log(chalk.red(error));
  } else {
    console.log(chalk.blue('Operation completed'));
  }
});
