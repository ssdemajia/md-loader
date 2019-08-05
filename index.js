const loaderUtils = require('loader-utils');
const markdown = require('markdown-it')({
    html: true
});

const md = markdown;
module.exports = function (source) {
    const options = loaderUtils.getOptions(this);
    let result = md.render(source);
    console.log(result)
    return result;
}