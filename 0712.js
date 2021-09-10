//동등비교 
console.log(5 == 5); // true

console.log(5 == '5'); //true(암묵적 타입 변환을 통해 타입을 일치시키면 동등함)

console.log('0' == ''); //false

console.log(0 == ''); //true

console.log(0 == '0'); //true

console.log(false == 'false'); //false

console.log(false == '0'); //true

console.log(false == null); //false

console.log(false == undefined); //false

//일치비교
console.log(5 === 5); //true

console.log(5 === '5'); //false

console.log(NaN === NaN); //false

console.log(isNaN(NaN)); //true //isNaN = 지정한 값이 NaN인지 확인하고 boolean 값으로 변환

console.log(isNaN(10)); //false

console.log(isNaN(1 + undefined)); //true

console.log(0 === -0); //true

console.log(0 == -0); //true

//Object.is : 예측 가능한 정확한 비교 결과를 반환(===와 동일하게 작동함)

console.log(-0 === +0); //true
console.log(Object.is(-0, +0)); //false

console.log(NaN === NaN); //false
console.log(Object.is(NaN, NaN)); //true

//부동등 비교 연산자, 불일치 비교 연산자

console.log(5 != 8); //true
console.log(5 != 5); //false
console.log(5 != '5'); //false

console.log(5 !== 8); // true
console.log(5 !== 5); //false
console.log(5 !== '5'); //true
