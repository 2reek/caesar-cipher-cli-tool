const { program } = require('commander');

program
  .option('-a, --action <type>')
  .option('-s, --shift <type>')
  .option('-i, --input <type>')
  .option('-o, --output <type>')
  .parse(process.argv);

if (!program.action || !program.shift) {
  process.stderr.write(chalk.red.bold('Required arguments not passed\n'));
  process.exit(400);
}

module.exports = program;
