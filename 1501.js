//var 키워드로 선언한 변수 : 중복 가능

var x = 1;
var y = 1;

//var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용함
//호기화문이 있는 변수 선언문은 Js 엔진에 의해 var키워드가 없는 것처럼 동작함

var x = 100;
var y;

console.log(x); //100
console.log(y); //1

var z = 1;

if (true) {
  //z는 전역 변수이다 이미 선언된 전역 변수 z가 있으므로 z변수는 중복 선언된다
  //이는 의도치 않게 변수값이 변경되는 부작용이 나타난다
  var z = 100;
}
console.log(z); //100

var i = 10;

//for 문에서 선언한 i는 전역변수이다 이미 선언된 전역 변수 i가 있으므로 중복 선언된다
for (var i = 0; i < 5; i++) {
  console.log(i); //0 1 2 3 4
}

console.log(i); //5

//이 시점에서 변수 호이스팅에 의해 이미 foo 변수가 선언되었다(1. 선언단계)
//변수 foo는 undefined로 초기화된다(2. 초기화단계)

//console.log(foo); //undefined

//변수에 값을 할당(3. 할당 단계)
var foo = 123;

console.log(foo); //123

let abc = 123;

//블록 레벨 스코프
let foo2 = 1; //전역변수

{
  let foo2 = 2; //지역변수
  let bar2 = 3; //지역변수
}

console.log(foo2); //1 (블록레벨 스코프를 가지므로 값은 2가 아닌 1이 나옴)
//console.log(bar2); //ReferenceError: bar2 is not defined -> 전역에서는 bar 함수 참조 불가(블록 레벨 스코프)

//변수 호이스팅
//console.log(foo3); //ReferenceError: Cannot access 'foo3' before initialization
let foo3;
console.log(foo3); //undefined;

foo3 = 3;
console.log(foo3); //3

//let 변수의 변수 호이스팅(안 되는 것처럼 보이나 실제로는 됨)
let foo4 = 1; //전역변수
{
  console.log(foo4); //ReferenceError: Cannot access 'foo4' before initialization
  let foo4 = 2; //지역변수
}
