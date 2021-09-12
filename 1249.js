//콜백 함수 : 함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수, 고차함수에 의해 호출
//          -> 함수형 프로그래밍 패러다임 뿐만 아니라 비동기 처리(이벤트 처리, Ajax 통신, 타이머 함수 등 사용)
//고차 함수 : 매개 변수를 통해 함수의 외부에서 콜백 함수를 전달받은 함수, 콜백함수를 자신의 일부분으로 합성함, 필요에 따라 콜백함수에 인수 존달
function repeat1(n) {
  for (var i = 0; i < n; i++) console.log(i);
}

repeat1(5); //0 1 2 3 4

function repeat2(n) {
  //반복문 내부에서 다른 일 추가 시 함수를 새로 정의해야 함
  for (var i = 0; i < n; i++) {
    if (i % 2) console.log(i);
  }
}
repeat2(5); //1 3

//문제 : 험수의 일부만 다르지만 매번 새로운 함수를 정의해야 함
//      -> 해결책 : 함수 합성하기 = 공통 로직은 미리 정의하고 경우에 따라 변경되는 로직은 추상화해서 함수 외부 -> 내부 전달

function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i); //i를 전달하면서 f를 호출
  }
}

var logAll = function (i) {
  console.log(i);
};

//반복호출할 함수를 인수로 전달
repeat(5, logAll); //0 1 2 3 4

var logOdds = function (i) {
  if (i % 2) console.log(i);
};

repeat(5, logOdds); //1 3 -> 고차 함수에 함수 참조 전달

//익명함수 리터럴은 콜백 함수로 고차 함수에 전달, repeat 함수 호출 시 평가되어 함수 객체 생성
repeat(5, function (i) {
  if (i % 2) console.log(i); //1 3
});

//콜백 함수를 사용하는 고차 함수 map
var res = [1, 2, 3].map(function (item) {
  return item * 2;
});

console.log(res); // [2, 4, 6]

//콜백 함수를 사용하고자 하는 함수 filter
res = [1, 2, 3].filter(function (item) {
  return item % 2;
});

console.log(res); //[1, 3]

//콜백 함수를 사용하는 고차 함수 reduce
res = [1, 2, 3].reduce(function (acc, cur) {
  return acc + cur;
}, 0);

console.log(res); //6

//순수함수 : 어떤 외부 상태에 의존하지 않고 변경하지 않음, 부수 효과 없음, 동일한 인수 전달 시 언제나 동일한 값 반환
//비순수함수 : 어떤 외부 상태에 의존하고 변경함, 부수 효과 있음

//순수함수 예시
var count = 0;

function increase(n) {
  return ++n;
}

count = increase(count);
console.log(count); //1

count = increase(count);
console.log(count); //2

//비순수함수 예시
//비순수함수는 외부 상태(count2)를 변경하므로 상태 변화 추적이 어려움 -> 최대한 줄이는 것이 좋음
var count2 = 0;

function increase2() {
  return ++count2;
}

increase2();
console.log(count2); //1

increase2();
console.log(count2); //2

//함수형 프로그래밍 : 순수 함수를 통해 부수효과(함수가 외부 상태를 변경하면 상태 변화 추적이 어려움)를
//최대한 억제해 오류를 피하고 프로그램 안전성을 높이려는 노력의 일환
