//함수는 함수를 가리키는 식별자와 한 쌍의 소괄호인 함수 호출 연산자로 호출한다

function add(x, y) {
  //매개변수 x, y -> 함수 몸체 내부에서만 참조할 수 있고 함수 몸체 외부에서는 참조 불가
  return x + y;
}

//console.log(x, y); //오류 발생

var result = add(1, 2);
console.log(result);

console.log(add(2)); //NaN -> y값 전달 x

console.log(add(2, 5, 10)); //7 ->초과된 인수는 버려지는 것이 나닌 암묵적으로 argumentf 객체의 프로퍼티로 보관

function add2(x, y) {
  console.log(arguments);

  return x + y;
}

add(2, 5, 10);

function add3(x, y) {
  return x + y;
}

console.log(add(2)); //NaN
console.log(add("a", "b")); //ab

function add4(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new TypeError("인수는 모두 숫자값이어야 한다.");
  }
  return x + y;
}

//console.log(add4(2)); //오류 발생
//console.log(add4("a", "b")); //오류 발생
console.log(add4(1, 2)); //3

function add5(a, b, c) {
  a = a || 0;
  b = b || 0;
  c = c || 0;
  return a + b + c;
}

console.log(add5(1, 2, 3)); //6
console.log(add5(1, 2)); //3
console.log(add5(1)); //1
console.log(add5()); //0

function add6(a = 0, b = 0, c = 0) {
  return a + b + c;
}

console.log(add6(1, 2, 3)); //6
console.log(add6(1, 2)); //3
console.log(add6(1)); //1
console.log(add6()); //0

//매개변수의 최대 개수 -> 이상적인 함수는 한 가지 일만 해야 하며, 가급적 작게 만들어야 함
// $.ajax({
//   method: "POST",
//   url: "/user",
//   data: { id: 1, name: "Lee" },
//   cache: false,
// });

//반환문
function multiply(x, y) {
  return x * y; //반환문
  console.log("실행되지 않는다."); //반환문 이후에 다른 문 존재 시 실행되지 않고 무시됨
}

var result = multiply(3, 5);
console.log(result); //15

function foo() {
  return;
}

console.log(foo()); //undefined

function foo() {}

console.log(foo()); //undefined

function multiply2(x, y) {
  return; //return 키워드와 반환값 사이에 줄바꿈이 있으면 return 뒤의 값은
  x * y; //무시됨
}

console.log(multiply2(3, 5)); //undefined
