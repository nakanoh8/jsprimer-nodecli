const program = require("commander");

program.parse(process.argv)

const fp = program.args[0];

console.log(fp);