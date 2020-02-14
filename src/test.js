class CoffeeMachine {
  waterAmount = 0;

  /*
  set waterAmount(value) {
    if (value < 0) {
      throw new Error("Negative water");
    }
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }
  )*/

  constructor(power) {
    this._power = power;
  }

  _test() {
    return this.waterAmount;
  }

}

// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);
console.log(coffeeMachine._test());
// add water
//coffeeMachine.waterAmount = 100; // Error: Negative water