const program = require('commander');
const fs = require('fs');
const md2html = require('./md2html');

program.option('--gfm', 'GFMを有効にする');
program.parse(process.argv);
const fp = program.args[0];

const cliOptions = {
  gfm: false,
  ...program.opts(),
};

fs.readFile(fp, { encoding: 'utf8' }, (err, file) => {
  if (err) {
    console.error(err);
    process.exit(1);
    return;
  }
  const html = md2html(file, cliOptions);
  console.log(html);
});
