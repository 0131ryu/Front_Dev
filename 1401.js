//전역변수의 문제점
//전역 변수를 반드시 사용해야할 이유를 찾지 못했다면 지역 변수를 사용해야 함
//변수는 생명주기가 존재함 -> 생명주기가 없다면 프로그람은 종료하지 않는 한 영원히 메모리 공간을 점유함

function foo() {
  //변수 x의 생명주기 start
  var x = "local";
  console.log(x); //local
  return x;
  //변수 x의 생명주기 end
}

foo();
//console.log(x); //오류 발생, 변수 선언 안 됨

//지역변수의 생명주기는 함수의 생명주기와 일치함

var x = "global";

function foo() {
  console.log(x); //undefined
  var x = "local";
}

foo();
console.log(x); //global

//var 키워드로 선언한 전역변수의 생명주기는 전역 객체의 생명주기와 일치함

//전역변수의 문제점1 : 코드 어디서든 참조하고 할당 가능 -> 암묵적 결합 허용(모든 코드가 전역변수를 참조하고 변경할 수 있도록 함)
//                  -> 변수의 유효범위가 커지면 커질수록 코드의 가독성은 나빠지고 의도치 않게 상태 변경될 수 있음

//전역변수의 문제점2 : 검색 속도가 가장 느림

//전역변수의 문제점3 : 다른 파일 내에서 동일한 이름으로 명명된 전역 변수나 전역 함수 같은 것을 가져올 수 있음
//                      -> 스코프의 범위는 좁을수록 좋음

//해결책1 : 즉시 실행 함수의 지역변수로 만듦
(function () {
  var foo = 10; //즉시 실행 함수의 지역변수
})();

console.log(foo);

//해결책2: 네임 스페이스 객체
var MYAPP = {}; //전역 네임스페이스 객체

MYAPP.name = "Lee";

console.log(MYAPP.name); //Lee

var MYAPP = {};
MYAPP.person = {
  name: "Lee",
  address: "Seoul",
};

console.log(MYAPP.person.name); //Lee

//해결책3 : 모듈패턴
var Counter = (function () {
  //private 변수
  var num = 0;

  //외부로 공개할 데이터나 메서드를 프로퍼티로 추가한 객체를 반환함
  return {
    increase() {
      return ++num;
    },
    decrease() {
      return --num;
    },
  };
})();

console.log(Counter.num); //undefined

console.log(Counter.increase()); //1
console.log(Counter.increase()); //2
console.log(Counter.decrease()); //1
console.log(Counter.decrease()); //0

//해결책4: ES6모듈 ->.mjs사용
