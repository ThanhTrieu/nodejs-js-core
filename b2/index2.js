// string js
let today = '29/12/2019'
let myString = `Hom nay la ngay ${today}`;
console.log(myString);
let text = `ket qua cua 1 + 1 = ${ 1+ 1}`;
console.log(text);
let test = "ket qua 1 + 1 = " + (1+1);
console.log(test);

let testString = `dang hoc js`;
let pos = testString.indexOf('JS');
let pos2 = testString.lastIndexOf('js',10);
console.log(pos, pos2);
let newStr = testString.slice(5,-3);
let newStr2 = testString.substring(9,-200);
let newStr3 = testString.substr(5, 3);
console.log(newStr);
console.log(testString);
console.log(newStr2);
console.log(newStr3);
console.log(testString.length);
let newString = testString.replace('js', 'reactjs');
console.log(testString, newString);

let id = Symbol('id');
console.log(id.toString());
