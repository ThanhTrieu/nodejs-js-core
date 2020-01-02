function getDataUserById(id) {
  let arrId = [1,2,3,4,5];
  return new Promise((resolve, reject) => {
    if(arrId.indexOf(id)){
      resolve(id)
    } else {
      reject(false);
    }
  });
}

// con thỏ cần 3s mới ăn cỏ và uống nước xong.
function con_tho_an_co(cb) {
  //setTimeout(function() {
    console.log('con thỏ ăn cỏ, uống nước');
    cb();
  //}, 0);
}

// con thỏ chui vô hang
function hotel() {
  console.log('chui vô hotel');
}

con_tho_an_co(function() {
  hotel();
});

let res = getDataUserById(3).then(data => {
  console.log(data);
});
console.log(res);

function sumNumber(...params) {
  //console.log(arguments, params);
  let s = params.reduce((prev, next) => prev + next);
  console.log(s, params);
}
sumNumber(1,2,3,4,5,6,7,8);


