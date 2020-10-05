const fs = require('fs');
const chalk = require('chalk');

const createReadStream = (input) => {
	if (fs.existsSync(input)) {
		return fs.createReadStream(input);
	} else if (!input) {
		process.stdout.write(chalk.blue('Write input text =>'));

		return process.stdin;
	}

	process.stderr.write(chalk.red('Input file missing or unavailable\n'));
	process.exit(1);
};

module.exports = createReadStream;
