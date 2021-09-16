const o = {};

//o[[Prototype]];

o.__proto__;

const person = {
  name: "Lee",
};

person.age = 20;
//프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 반환함
console.log(Object.getOwnPropertyDescriptor(person, "name")); //{ value: 'Lee', writable: true, enumerable: true, configurable: true }

console.log(Object.getOwnPropertyDescriptors(person));
/*{
  name: {
    value: 'Lee',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: { value: 20, writable: true, enumerable: true, configurable: true }
} 
*/

const animal = {
  name: "cat",
};

console.log(Object.getOwnPropertyDescriptor(animal, "name")); //{ value: 'cat', writable: true, enumerable: true, configurable: true }

animal.food = "fish";

console.log(Object.getOwnPropertyDescriptors(animal));

/*
{
  name: {
    value: 'cat',
    writable: true,
    enumerable: true,
    configurable: true
  },
  food: {
    value: 'fish',
    writable: true,
    enumerable: true,
    configurable: true
  }
}
*/

const hero = {
  firstName: "spider-Man",
  lastName: "no way home",

  //fullName은 접근자 함수로 구성된 접근자 프로퍼티이다
  //getter 함수
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  //setter 함수
  set fullName(name) {
    //배열 디스트럭처링 할당
    [this.firstName, this.lastName] = name.split(" ");
  },
};

//데이터 프로퍼티를 통한 프로퍼티 값의 참조
console.log(hero.firstName + " : " + hero.lastName); //spider-Man : no way home

//접근자 프로퍼티를 통한 프로퍼티 값의 저장
//접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다
hero.fullName = "spider-man far-from-home";
console.log(hero);
/*{
  firstName: 'spider-man',
  lastName: 'far-from-home',
  fullName: [Getter/Setter]
} */

//접근자 프로퍼티를 통한 프로퍼티 값의 참조
//접근자 프로퍼티 fullName에 저근하면 getter함수 호출됨
console.log(hero.fullName); //spider-man far-from-home

//fullName은 데이터 프로퍼티이다
//데이터 프로퍼티 [[Value]], [[Writable]], [[Enumerable]], [[Configurable]]
//프로퍼티 어트리뷰트를 가진다
let descriptor = Object.getOwnPropertyDescriptor(hero, "firstName");
console.log(descriptor);
/*{
  value: 'spider-man',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

//fullName은 접근자 프로퍼티이다
//접근자 프로퍼티는 [[Get]], [[Set]], [[Enumerable]], [[Configurable]]
//프로퍼티 어트리뷰트를 가진다
descriptor2 = Object.getOwnPropertyDescriptor(hero, "fullName");
console.log(descriptor2);
/*{
  get: [Function: get fullName],
  set: [Function: set fullName],
  enumerable: true,
  configurable: true
} */

/*작동되는데 조건들 
1. 프로퍼티 키가 유효한지 확인한다. 프로퍼티 키는 문자열 또는 심벌이어야 한다. 프로퍼티 키 'fullName'은 문자열이므로 유효한 프로퍼티 키다
2. 프로토타입 체인에서 프로퍼티를 검색한다 person 객체에 fullName 프로퍼티가 존재한다
3. 검색된 fullName 프로퍼티가 데이터 프로퍼티인지 접근자 프로퍼티인지 확인한다 fullName 프로퍼티는 접근자 프로퍼티이다
4. 접근자 프로퍼티 fullName의 프로퍼티 어트리뷰트 [[Get]]의 값 즉 gett 함수를 호출하여 그 결과를 반환한다
    프로퍼티 vullNma의 프로퍼티 어트리뷰트 [[Get]]의 값은 Object.getOwnPropertyDescriptor 메서드가 반환하는 프로터티 디스크립터 객체의 get 프로퍼티와 같다*/

//접근자 프로퍼티와 데이터 프로퍼티 구분법
// 일반 객체의 __proto__는 접근자 프로퍼티
Object.getOwnPropertyDescriptor(Object.prototype, "__prototype__");

//함수 객체의 prototype은 데이터 프로퍼티
Object.getOwnPropertyDescriptor(function () {}, "prototype");
