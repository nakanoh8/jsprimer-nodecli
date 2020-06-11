const marked = require("marked");

module.exports = (md, cliOpts) => {
    return marked(md, {
        gfm: cliOpts.gfm,
    });
};