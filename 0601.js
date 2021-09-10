var integer = 10;
var double = 10.12;
var negative = -20;

var binary = 0b01000001; //2진수
var octal = 0o101; //8진수
var hex = 0x41; //16진수

console.log(binary);
console.log(octal);
console.log(hex);
console.log(binary === octal);
console.log(binary === hex);
console.log(octal === hex);

console.log(1 === 1.0);
console.log(4 / 2);
console.log(3 / 2);


//숫자 타입의 세 가지 특별한 값
console.log(10 / 0); //Infinity
console.log(10 / -0); //-Infinity
console.log(1 * 'String'); //NaN(자바스크립트는 대소문자를 구분함)

// var x = nan; -> 오류 발생
var y = NaN;