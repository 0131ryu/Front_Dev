const foo = 1;

console.log(foo);

//const foo2;
//console.log(foo2); //SyntaxError: Missing initializer in const declaration

{
  //console.log(foo2); //ReferenceError: Cannot access 'foo2' before initialization
  const foo2 = 1;
  console.log(foo2); //1
}

//console.log(foo2); //ReferenceError: foo2 is not defined

const foo3 = 1;
//foo3 = 2; //TypeError: Assignment to constant variable.

//상수
//세전 가격
let preTaxPrice = 100;

//세후가격
let afterTaxPrice = preTaxPrice + preTaxPrice * 0.1;
console.log(afterTaxPrice); //110

const TAX_RATE = 0.1;

let afterTaxPrice2 = preTaxPrice + preTaxPrice * TAX_RATE;
console.log(afterTaxPrice2); //110

const person = {
  name: "Lee",
};

//객체는 변경 가능한 값이다. 따라서 재할당 없이 변경이 가능하다
person.name = "Kim";

console.log(person); //{ name: 'Kim' }
