const fs = require('fs');

const createReadStream = input => {
  if (fs.existsSync(input)) {
    return fs.createReadStream(input);
  } else if (!input) {
    process.stdout.write('Write input text =>');

    return process.stdin;
  }

  process.stderr.write('Input file missing or unavailable\n');
  process.exit(1);
};

module.exports = createReadStream;
