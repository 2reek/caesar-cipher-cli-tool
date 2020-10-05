const program = require('./program');
const { pipeline } = require('stream');
const createReadStream = require('./streams/readStream');
const createTransformStream = require('./streams/transformStream');
const createWriteStream = require('./streams/writeStream');

if (!program.action || !program.shift) {
  process.stderr.write(
    chalk.white.bgRed.bold('Required arguments not passed\n')
  );
  process.exit(1);
}

const readStream = createReadStream(program.input);
const transformStream = createTransformStream(program.action, program.shift);
const writeStream = createWriteStream(program.output);

pipeline(readStream, transformStream, writeStream, error => {
  if (error) {
    console.log(error);
  } else {
    console.log('Operation completed');
  }
});
