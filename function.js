const addTwo = require("./external.js");
console.log('None of this minus stuff! We don\'t do negative');
const subtract = require("./minus");
console.log(addTwo(3,4));
console.log(subtract(10,5));