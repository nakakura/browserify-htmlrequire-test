window.onload = function(){
    console.log("onload");
    var add = require("./add");
    console.log(add);
    console.log(add(1, 2)); // => 3
};

console.log("window");
