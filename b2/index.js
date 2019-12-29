// ham trong js
// cu phap : function + nameFunction (params) {}

// goi ham ra su dung
let result = sumNumber(10, 1);
console.log(result);

function sumNumber(n1, n2 = 9){
  return n1 + n2;
  console.log('test');
}

let kiemTraChanLe = function(number){
  if(number % 2 == 0){
    return true;
  }
  return false;
}

let chk = kiemTraChanLe(19);
if(chk){
  console.log('A');
} else {
  console.log('B');
}

function tinhDienTichHinhThang(a,b,h) {
  function tinhTongHaiDay(){
    return a+b;
  }

  function nhanVoiChieuCao() {
    return tinhTongHaiDay() * h;
  }

  function chiaDoi() {
    return nhanVoiChieuCao()/2;
  }

  function hienThiKetQua() {
    return chiaDoi();
  }

  return hienThiKetQua;
}

let dt = tinhDienTichHinhThang(1,2,3)();
console.log(dt);


// arrow function
let kiemTraSoNguyenTo = (number) => {
  let limit = Math.sqrt(number);
  let flag = false;
  for(let i = 2; i <= limit; i++){
    if(number % i == 0){
      flag =  true;
      break;
    }
  }
  return flag;
}

let kt = kiemTraSoNguyenTo(21);
console.log(kt);

let number1 = '10';
number1 = Number.parseInt(number1);
let number2 = '20';
let totalNumber = number1 - number2;
console.log(totalNumber);
if(Number.isInteger(totalNumber)){
  console.log('Yes');
} else {
  console.log('No');
}
let number3 = '20';
if(Number.isNaN(number3)){
  console.log('Yes');
} else {
  console.log('No');
}


let myNumber = 3.14;
myNumber = Number.parseInt(myNumber);
console.log(myNumber);

let testSome = 0/0;
console.log(testSome);
console.log(typeof testSome);