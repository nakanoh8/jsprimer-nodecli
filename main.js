const program = require("commander");
const fs = require("fs");

program.parse(process.argv)
const fp = program.args[0];

fs.readFile(fp, { encoding: "utf8" }, (err, file)=>{
    if(err){
        console.error(err.message);
        process.exit(1);
        return;
    }
    console.log(file);
});
// console.log(fp);