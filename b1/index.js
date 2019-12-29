'use strict';
// tim hieu cac kieu du lieu trong js
// 1 - kieu number
// trong js ko quy dinh san kieu du lieu - chi nhan kieu du lieu khi dc gan gia tri
let myNumber = 10;
let myNumber2 = 3.14;
// kiem tra kieu du lieu cua no
console.log(typeof myNumber);
console.log(typeof(myNumber2));

// 2 - kieu tring
let myString = 'reactjs';
console.log(typeof myString);

// 3 - kieu booblean
let checking = true;
let chk = 1;
console.log(typeof checking, typeof chk);
if(chk === true){
  console.log('yes');
} else {
  console.log('No');
}
let chk2 = false;
if(chk2 === ''){
  console.log('yes1');
} else {
  console.log('No1');
}

let a = 10;
let b = 'b20';
let c = a - b;
console.log(c); //30 // '1020' // undefined

let data;
console.log(typeof data);
let dt = null;
console.log(typeof dt);

// phan biet giua tu khoa var va let trong js
var myClass = 'Reactjs';
var myClass = 'CSS';
console.log(myClass);
let myName = 'Van Teo';
myName = 'Thi No';
console.log(myName);

function test() {
  //var n = 10;
  let n = 10;
  if(true){
    //var n = 20;
    let n =20;
    console.log(n);
  }
  console.log(n);
}
test();

// 
const PI = 3.14;
//PI = 3.15;
console.log(PI);

const objectData = {id: 1};
objectData.price = 300;
// objectData = 300;
console.log(objectData);


// if(number3 ==20){
//   console.log('A');
// } else {
//   console.log('B');
// }

// if(number3 == 9){
//  //
// } else if(number3 == 8){

// } else if(number3 == 10) {
//   console.log('WWW');
//   //return s
// } else if (number3 == 10) {
//   console.log('BBBB');
// } else {

// }
let number3 = 10;
switch(number3) {
  case 10,11:
    console.log('111');
  return
  case 9 :
  break;

}

//
for(let i = 0; i < 100; i++){
  console.log(i);
}

let j = 9;
let i = 10;
let o = (i%j == 0) ? j : ( i - j > j -i ? i : j); // toan tu dieu kien
console.log(o);
if(i%j==0){
  let k = j;
} else {
  let k = i;
}

let t = 10;
let q = 9;
let l = (t++) + (q++) - (++t) - (++q) + (t--) + (--q);
//        10  +   9   -   11  -   10   +  11  +   9
//        10   +  9   -   12  -   11   +  12  +   10

console.log(10  +   9   -   11  -   10   +  11  +   9); // 10 - 20 - 16
