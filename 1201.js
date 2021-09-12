//함수 정의
function add(x, y) {
  return x + y;
}

//함수 호출
var result = add(2, 5);
console.log(result);

var f = function add(x, y) {
  return x + y;
};

//함수 정의하는 법 1. 함수 선언문 2. 함수 표현식 3. function 생성자 함수 4. 화살표 함수

//1. 함수 선언문(함수는 함수 이름으로 호출한 것이 아니라 함수 객체를 가치키는 식별자로 호출, 표현식이 아닌 문)

//함수 선언문
function add(x, y) {
  //이름 생략 불가(add 없애면 오류 발생)
  return x + y;
}

//함수 참조
console.dir(add); //[Function: add]

//함수 호출
console.log(add(2, 5)); //7

//자바스크립트 엔진이 생성된 함수를 호출하기 위해 함수 이름과 동일한 이름의 식별자를 암묵적으로 생성, 거기에 객체 할당
function foo() {
  console.log("foo");
}

//2. 함수 표현식(표현식인 문)
//기명 함수 표현식
var add = function (x, y) {
  return x + y;
};

//함수 객체를 가리키는 식별자로 호출
console.log(add(2, 5)); //7

//함수 이름으로 호출하면 오류, 함수 이름은 함수 몸체 내부에서만 유효
console.log(foo(2, 5)); //undefined

//함수 생성 시점과 함수 호이스팅(함수 호이스팅: 함수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 자바스크립트 고유의 특징)

//함수 참조
console.dir(add); //[Function: add]
//console.dir(sub); //오류발생

//함수 호출
console.log(add(2, 5));
//console.log(sub(2, 5)); //오류발생

//함수 선언문
function add(x, y) {
  return x + y;
}
//함수 표현식
var sub = function (x, y) {
  return x - y;
};

console.log(sub(2, 5)); //-3

//3. Function 생성자 함수
var add = new Function("x", "y", "return x+y");

console.log(add(2, 5)); //7

var add1 = (function () {
  var a = 10;
  return function (x, y) {
    return x + y + a;
  };
})();

console.log(add1(1, 2)); //13

var add2 = (function () {
  var a = 10;
  return new Function("x", "y", "return x + y + a");
})();

//console.log(add2(1, 2)); //오류 발생, a가 정의되지 않았다고 함

//4. 화살표 함수
const add3 = (x, y) => x + y;
console.log(add3(2, 5)); //7
