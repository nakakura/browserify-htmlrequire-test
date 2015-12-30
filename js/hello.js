module.exports = function hello () {
    var add = require("./add.js")
    console.log(add(1, 2));
    return "hello";
};