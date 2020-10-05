const fs = require('fs');
const chalk = require('chalk');

const createWriteStream = (output) => {
	if (fs.existsSync(output)) {
		return fs.createWriteStream(output, { flags: 'a' });
	} else if (!output) {
		return process.stdout;
	}

	process.stderr.write(chalk.red('Output file missing or unavailable\n'));
	process.exit(1);
};

module.exports = createWriteStream;
