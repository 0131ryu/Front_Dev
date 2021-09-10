//대소 관계 비교 연산자

console.log(5 > 0); //true
console.log(5 > 5); //false
console.log(5 >= 5); //true
console.log(5 <= 5); //true

//삼항 조건 연산자
var x = 2;

var result = x % 2 ? '홀수' : '짝수';
console.log(result); //짝수

var x = 2, result;

if (x % 2) result = '홀수';
else        result = '짝수';

console.log(result); //짝수

//if문은 값처럼 사용 불가
// var x = 10;

// var result = if(x % 2) {result = '홀수';} else {result = '짝수';}; ->오류발생

// console.log(result);

var x = 10;

var result = x % 2 ? '홀수' : '짝수';
console.log(result); //짝수

//논리 연산자(OR : || / AND : && / NOT : !)
console.log(true || true); // true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

console.log(true && true); // true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

console.log(!true); //false
console.log(!false); //true

console.log(!0); //true
console.log(!'Hello'); //false

console.log('Cat' && 'Dog'); //Dog

//드 모르간 법칙
console.log(!(x || y) === (!x && !y)); //true
// console.log(!(x && y) === (!x || !y)); -> 오류발생

//쉼표 연산자
var x, y, z;

x= 1, y = 2, z = 3;

console.log(x, y, z); //1 2 3

//그룹 연산자
console.log(10 * 2 + 3); //23
console.log(10 * (2 + 3)); //50

