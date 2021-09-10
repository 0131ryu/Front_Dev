//블록문
{
    var foo = 10;
}

//제어문
var x = 1;
if(x<10) {
    x++;
}

//함수 선언문
function sum(a, b) {
    return a + b;
}

var num = 2;
var kind;

//if문
if (num > 0) {
    kind = '양수';
} 
console.log(kind); //양수

//if...else 문
if(num > 0) {
    kind = '양수';
} else {
    kind = '음수';
}
console.log(kind); //양수

//if ...else if문
if (num > 0) {
    kind = '양수';
} else if (num < 0) {
    kind = '음수';
} else {
    kind ='영';
}
console.log(kind); //양수


var num2 = 3;
var kind2; 

if(num2 > 0) kind2 = '양수';
else if(num2 < 0) kind2 = '음수';
else kind2 = '영';

console.log(kind2); //양수

var x = 2;
var result3;

if (x % 2) { //2 %2 = 0, 0은 false로 암묵적 강제 변환됨
    result3 = '홀수';
} else {
    result3 = '짝수';
}

console.log(result3); //짝수

var num4 = 2;
var kind4 = num4 ? (num4 >0 ? '양수' : '음수') : '영';

console.log(kind4); //양수

