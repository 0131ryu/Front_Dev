//원시 값은 값에 의한 전달, 객체는 참조에 의해 전달 방식으로 동작

//매개변수 primitive는 원시 값을 전달받고, 매개변수 obj는 객체를 전달받는다
function changeVal(primitive, obj) {
  primitive += 100;
  obj.name = "Kim";
}

//외부상태
var num = 100;
var person = { name: "Lee" };

console.log(num); //100
console.log(person); //{name : 'Lee'}

//원시 값은 값 자체가 복사되어 전달되고 객체는 참조 값이 복사되어 전달된다
changeVal(num, person);

//원시 값은 원본이 훼손되지 않는다
console.log(num); //100

//객체는 원본이 훼손된다.
console.log(person); //{name: "Kim"}

//문제 : 함수가 외부상태일 때 변경되면 상태 변화를 추적하기 어려움 -> 코드의 복잡성이 증가되고 가독성을 해치는 원인이 됨
//해결책 : 객체를 불변객체로 만들어 사용(변경 불가능한 값으로 동작하게 함)
//      -> 객체의 상태 변경이 필요한 경우 객체의 방어적 복살를 통해 원본 객체의 완전한 복제 즉, 깊은 복사를 통해 새로운 객체를 생성하고 재할당으로 교체
//      -> 외부 상태가 변경되는 부수 효과를 없앰

//즉시 실행 함수 : 함수 정의와 동시에 즉시 호출되는 함수, 단 한번만 호출 가능 / 그룹 연산자(...)로 감싸야 함

//익명 즉시 실행 함수
(function () {
  var a = 3;
  var b = 5;
  return a * b;
})();

//기명 즉시 실행 함수
(function foo() {
  var a = 3;
  var b = 5;
  return a * b;
})();

//foo(); //오류 발생 : foo is not defined

console.log(typeof function f() {}); //function
console.log(typeof function () {}); //function

//즉시 실행 함수도 일반 함수처럼 값을 반환할 수 있고 인수가 전달 가능
var res = (function () {
  var a = 3;
  var b = 5;
  return a * b;
})();

console.log(res); //15

//즉시 실행함수에서도 일반 함수처럼 인수를 전달 가능
res = (function (a, b) {
  return a * b;
})(3, 5);

console.log(res); //15

//재귀함수 : 함수가 자기 자신을 호출하는 것, 반복처리를 위함

//10부터 0까지 호출(반복문 사용)
function countdown(n) {
  for (var i = n; i >= 0; i--) console.log(i); //10 ~ 0
}

countdown(10);

//10부터 0까지 호출(재귀호출 사용)
function countdown2(n) {
  if (n < 0) return;
  console.log(n);
  countdown(n - 1); //재귀호출 //10 ~ 0
}

countdown2(10);

//팩토리얼(재귀함수 이용) : 1 ~ 자기자신까지의 모든 양의 정수의 곱
//n! = 1 * 2 * 3..... * (n-1) * n

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1); //함수 내부에서 자기자신 호출 가능 -> 단점 : 무한 반복에 빠질 수 있음
}

console.log(factorial(0)); //0! = 1
console.log(factorial(1)); //1! = 1
console.log(factorial(2)); //2! = 2*1 = 2
console.log(factorial(3)); //3! = 3*2*1 = 6
console.log(factorial(4)); //4! = 4*3*2*1 = 24
console.log(factorial(5)); //5! = 5*4*3*2*1 = 120

//외부에서는 함수 호출 시 반드시 함수를 가리키는 식별자를 사용해야 함
var factorial2 = function foo2(n) {
  if (n <= 1) return 1;
  return n * factorial2(n - 1);
};

console.log(factorial2(5)); //5! = 120

//팩토리얼은 무한반복을 멈출 수 있는 반복문 사용이 바람직함
function factorial3(n) {
  if (n <= 1) return 1;

  var res = n;
  while (--n) res *= n;
  return res;
}

console.log(factorial3(5)); //120
console.log(factorial3(10)); //10! = 3628800

//중첩함수(내부함수) : 함수 내부에 정의된 함수 -> 외부 함수 내부에서만 호출 가능, 자신을 포함하는 외부함수를 돕는 헬퍼 함수 역할
//                  -> 스코프와 클로저와 관련이 깊음
//외부함수 : 중첩함수를 포함하는 함수

function outer() {
  var x = 1;

  //중첩함수
  function inner() {
    var y = 2;
    //외부 함수의 변수를 참조 가능
    console.log(x + y); //3
  }

  inner();
}
outer();
