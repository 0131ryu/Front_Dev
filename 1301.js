//스코프 : var, let, const 키워드로 선언한 변수의 스코프는 다르게 동작함
//변수는 자신이 선언된 위치에 의해 자신이 유효한 범위, 즉 다른 코드가 변수 자신을 참조할 수 있는 범위가 결정됨

//모든 식별자(변수 이름, 함수 이름, 클래스 이름 등)는 자신이 선언된 위치에 의해 다른 코드가 식별자 자신을 참조할 수 있는 유효범위 결정
//스코프 = 식별자가 유효한 범위, 자바스크립트 엔진이 식별자를 검색할 때 사용하는 규칙

function add(x, y) {
  //매개변수는 함수 몸체 내부에서만 참조 가능
  //즉 매개변수의 스코프(유효범위)는 함수 몸체 내부
  console.log(x, y);
  return x + y;
}

add(2, 5);

//console.log(x, y); //오류 발생

var var1 = 1; //코드의 가장 바깥 영역에서 선언한 변수

if (true) {
  var var2 = 2; //코드 블록 내에서 선언한 변수
  if (true) {
    var var3 = 3; //중첩된 코드 블록 내에서 선언한 변수
  }
}

function foo() {
  var var4 = 4; //함수 내에서 선언한 변수

  function bar() {
    var var5 = 5; //중첩된 함수 내에서 선언한 변수
  }
}

console.log(var1); //1
console.log(var2); //2
console.log(var3); //3
//console.log(var4); //오류발생
//console.log(var5); //오류 발생

//var 키워드로 선언한 변수의 중복 선언 = 같은 스코프 내에서 중복 선언이 허용됨
function foo() {
  var x = 1;
  var x = 2;
  console.log(x); //2
}

foo();

function bar() {
  let x = 1;
  //let x = 2; //오류 발생 : 중복임
}

bar();

//전역 = 코드의 가장 바깥 영역 - 전역 스코프 - 전역 변수
//지역 = 함수 몸체 내부 - 지역 스코프 - 지역 변수

//전역 변수 : 어디서든지 참조 가능
//지역 변수 : 자신의 지역 스코프와 하위 지역 스코프에서 유효

//스코프는 함수의 중첩으로 인해 계층적 구조를 가짐 = 스코프 체인
//변수 참조 시 자바스크립트 엔진은 스코프 체인을 통해 변수를 참조하는 코드의 스코프에서 시작하여 상위 스코프 방향으로 이동하며 선언된 변수를 검색함
//상위 스코프 -> 하위 스코프 (O) But 하위 스코프 -> 상위 스코프(X)

//전역 함수
function foo2() {
  console.log("global function foo"); //출력x
}

function bar2() {
  //중첩 함수
  function foo2() {
    console.log("local function foo"); //출력o
  }
  foo2();
}

bar2();

//함수 레벨 스코프 : 코드 블록이 아닌 함수에 의해서만 지역 스코프 생성됨
var x = 1; //전역변수

if (true) {
  var x = 10; //x값이 있으나 변경됨(중복 선언 -> 변수 값이 변경되는 부작용 존재)
}

console.log(x); //10

var i = 10; //전역변수

for (var i = 0; i < 5; i++) {
  console.log(i); //0 1 2 3 4
}

console.log(i); //5, i값 중복 선언 -> 전역변수 값 재할당

//렉시컬 스코프 :함수를 어디서 호출했는지가 중요한 게 아닌 함수를 어디서 정의했는지에 따라 상위 스코프 결정
//함수의 상위 스코프는 언제나 자신이 정의된 스코프
var x = 1;

function foo3() {
  var x = 10;
  bar3();
}

function bar3() {
  console.log(x); //1
}

foo3();
bar3();
