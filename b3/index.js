// mang trong js
let fruits = new Array('cam', 'quyt', 'mit', 'dua');
let numbers = [1,2,3,4,5,6,8,9]; // new Array(1,2,3,4,5,6,8,9);
let myArray = new Array(
  Array('cam', 'quyt'),
  1,
  true,
  false,
  'hello',
  [1,2,3,4,5]
);
let myArray2 = [[1,3,4], true, false, 'hi'];
// kiem tra so luong phan tu trong mang
console.log(myArray2.length);

// truy cap vao cac phan tu trong mang
// cu phap: nameArray[key];
console.log(myArray2[3]);
console.log(myArray2[0][2]);
// truy cap vao tat cac phan tu trong mang
// 1 - for
let arrNumbers = [1,2,3,4,5,6,7,8,9];
for(let i = 0; i < arrNumbers.length; i++){
  console.log(arrNumbers[i]);
}
// 2 - forEach
arrNumbers.forEach(function(value, key, array){
  console.log(`value: ${value} - index: ${key}`);
});

arrNumbers.forEach( (value, key) => {
  console.log(`value: ${value} - index: ${key}`);
});

// 3 - map
arrNumbers.map((item, key, arr) => {
  console.log(`item : ${item} - arr: ${arr}`);
});

// 4 - for ... of
for( let j of arrNumbers) {
  console.log(`value of : ${arrNumbers[j]}`);
}

let ranNumbers = [1,2,3,4,5,6,7,8,9];
// them phan tu vao cuoi mang
// ranNumbers.push(100);
// console.log(ranNumbers);
let newArr = [...ranNumbers, 100];
// spear operator
console.log(ranNumbers, newArr);

// tim kiem phan tu trong mang
let pos = ranNumbers.indexOf(6);
console.log(pos);

let sliceArr = ranNumbers.slice(3,5);
console.log(sliceArr, ranNumbers);

ranNumbers.splice(3,3,300,400,500);
console.log(ranNumbers);

let url = "https://vnexpress.net/u23-chau-a-2020/hlv-park-hang-seo-khong-dang-ky-dinh-trong-4036475.html";
//https://vnexpress.net/thoi-su/tai-xe-bi-phat-35-trieu-dong-do-vi-pham-do-con-4036489.html
// viet ham lay ra id bai viet cua tat ca cac duong link vnexpress
function getIdPostFromUrl(url) {
  let arrUrl = url.split('-');
  let strId = arrUrl.pop();
  let arrId = strId.split('.');
  let id = arrId.shift();
  return id;
}
getIdPostFromUrl(url);

let arrFind = [1,2,3,4,4,4,4,5,6,6];
let res = arrFind.find((item, key, arr) => {
  return item == 4;
});
console.log(res , arrFind);
let res2 = arrFind.filter((item, key, arr) => item > 3);
console.log(res2);

let sum = arrFind.reduce((prevItem, nextItem) => {
  console.log(prevItem,nextItem);
  // let s = 0;
  // if(prevItem % 2 == 0){
  //   s += prevItem;
  // }
  // if(nextItem % 2 == 0){
  //   s += nextItem;
  // }
  // return s;
});
console.log(sum);

let res4 = arrFind.map((item, key) => {
  if(item % 2 == 0) 
    return item;
  else
    return 0;
}).reduce((pre, next) => pre + next);
console.log(res4);

let res5 = arrFind.map((item, key) => item % 2 == 0);
//console.log(res)

function sumMyNumber(...params) {
  // rest params
  console.log(arguments);
  console.log(params);
  return params.reduce((p,n) => p + n);
}

function sumMyNumber2(a,b,c,d) {
  return a + c+ b;
}

let kq = sumMyNumber(1,2,4,5,6,7,8,9);
console.log(kq);

let infoSt = [
  {
    id: 113,
    name: 'A',
    eating: function(){

    }
  },
  {
    id: 114,
    name: 'B',
    sleeping: function(hour){
      return hour;
    }
  },
  {
    id: 115,
    name: 'C'
  }
];