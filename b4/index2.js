const fetch = require("node-fetch");

function con_meo_di_an(cb, cb2){
 
  setTimeout(()=> {
    console.log('an con ca');
    cb(cb2);
  }, 1000);
}

function con_meo_di_uong_nuoc(cb2) {
  setTimeout(() => {
    console.log("con meo uong nuoc");
    cb2();
  }, 1000);
  
}

function con_meo_di_ngu() {
  console.log('con meo di ngu');
}
con_meo_di_an(con_meo_di_uong_nuoc, con_meo_di_ngu);
//con_meo_di_ngu();
//con_meo_di_uong_nuoc();

function test() {
  setTimeout(() => {
    console.log('A');
  },1000)
}
function demo(){
  console.log('B');
}
test();
demo();

let arrayNumber = [1,2,3,4,5,6,7,8,9];

function layRaSoLe(arr) {
  let kq = [];
  for(let i = 0; i< arr.length; i++){
    if(i%2 !=0){
      kq.push(i);
    }
  }
  return new Promise((resolve, reject) => {
    resolve(kq);
  });
}
let res = layRaSoLe(arrayNumber).then(dt => (dt) ).then(t => console.log(t));
console.log('done');

function* testYieldFunction() {
  let arr = [];
  let i = 1;
  while ( i < 10) {
    // arr.push(i);
    // i++;
    yield arr[i];
  }
}

function* f1(i) {
  yield i+10;
  yield i+20;
  yield i+30;
}
const dtF1 = f1(1);
console.log(dtF1.next().value);
//console.log(dtF1.next().value);
//console.log(dtF1.next().value);

const getDataMovies = async (url) => {
  const respone = await fetch(url);
  const movies = respone.json();
  return movies;
}

//getDataMovies('https://www.themoviedb.org/search/multi?language=vi&query=Avengers%3A%20Infinity%20Wa').then(data => console.log(data));

function* getDataMoviesv2(url) {
  const respone = yield fetch(url);
  // respone.then((data) => (data.json()));
}
//console.log(getDataMoviesv2(`https://www.themoviedb.org/search/multi?language=vi&query=Avengers%3A%20Infinity%20Wa`).next().value);
getDataMoviesv2(`https://www.themoviedb.org/search/multi?language=vi&query=Avengers%3A%20Infinity%20Wa`).next().value.then(data => (data)).then(dt => (dt.json())).then(t => console.log(t));