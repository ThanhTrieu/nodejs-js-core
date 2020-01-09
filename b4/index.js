// object trong js
let cars = {
  name: 'BMW',
  color: 'black',
  weight: 500,
  start: function(){
    return 'start car';
  },
  stop: function(){
    return 'stop';
  }
}
// truy cap vao thuoc tinh va phuong trong object
let nameCar = cars.name;
let nameCar2 = cars['name'];
console.log(nameCar, nameCar2);
let startCar = cars.start();
console.log(startCar);

let students = [
  {
    id: 1,
    name: 'van teo',
    age: 20,
    email: 'vanteo@gmail.com',
    address: 'Ha Noi'
  },
  {
    id: 2,
    name: 'van y',
    age: 20,
    email: 'vanty@gmail.com',
    address: 'Ha Noi'
  }
]
// duyet object
/*
for(let i in students){
  console.log(students[i]);
}
*/
students.map((item, index, array) => {
  console.log(item.age);
});
const number = {a: 10, b: 20};
number.c = 30;
console.log(number);
let {a,b,c} = number;
console.log(a,b,c);
// const n = 20;
// n = 30;
// console.log(n);