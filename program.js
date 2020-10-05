const { program } = require('commander');

program
  .option('-a, --action <type>')
  .option('-s, --shift <type>')
  .option('-i, --input <type>')
  .option('-o, --output <type>')
  .parse(process.argv);

module.exports = program;
