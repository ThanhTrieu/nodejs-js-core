// dinh nghia classe
class Student {
  // dinh nghia thuoc tinh
  name = 'Van teo';
  age = 20;

  constructor(subject) {
    console.log('This is method constructor ' + subject);
    // ham khoi tao - luon luon tu dong chay dau tien khi khoi tao doi tuong cho class
  }

  // dinh nghia phuong thuc
  getName() {
    return this.name;
  }
}

class Person extends Student {
  // ke thua trong oop js
  // dinh nghia thuoc tinh protected
  _money = 1000; // truy cap trong lop va lop ke thua
  static email = "admin@gmail.com"; // thuoc tinh static
  constructor(ob) {
    super();// cho phep override lai phuong thuc
    console.log('this constructor of person ' + ob);
  }
  static getMoney() {
    // trong static khong ton tai contro this tro toi cac phuong thuc hay thuoc tinh khong phai la static.
    //let u = new Person;
    return (new Person)._money;
  }
}

let st = new Student('reactjs'); // day chinh la object

let p = new Person('nodejs');
console.log(p.money);
console.log(p.name);
console.log(Person.email);
console.log(Person.getMoney());

// truy cap vao thuoc tinh hoac phuong thuc tu ben ngoai class
console.log(st.name); // truy cap vao thuoc tinh
let myName = st.getName(); // truy cap vao phuong thuc
console.log(myName);