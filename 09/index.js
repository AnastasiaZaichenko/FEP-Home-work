const calc =  new Calculator(100);

calc.add(10); 
calc.add(10);
calc.sub(20);
calc.set(20);
calc.add(10);
calc.add(10);
calc.add('qwe'); 
console.log(calc.get() === 40) 

calc.reset();
console.log(calc.get() === 100) 

function Calculator(base) {
   this.base = base
   this.current = base

   this.add = function(num) {
      if (isNumber(num)) {
      this.current += num
      }
    }
    this.sub = function(num) {
      if (isNumber(num)) {
      this.current -= num
      }
    }
    this.set = function(num) {
      if (isNumber(num)) {
      this.current = num
      }
    }
    this.get = function() {
      return this.current
    }
    this.reset = function() {
      this.current = this.base
    }
  }


function isNumber(num) {
  return typeof num === 'number'
}


  
