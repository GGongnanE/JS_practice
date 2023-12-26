/**
 *  변수 선언하기
 * 
 *  var - 더 이상 쓰지 않는다. (이전에 사용하던 방식) 
 *  1) let
 *  2) const
 */

var name = '코드공장';
console.log(name);

var age = 32;
console.log(age);


let ive = '아이브';
console.log(ive);

/**
 * let과 var로 선언하면 값을 추후에 변경할 수 있다.
 */
ive = '안유진';
console.log(ive);

const newJeans = '뉴진스';
console.log(newJeans);

// const로 선언한 변수는 변경이 불가능하다.
// TypeError: Assignment to constant variable.
// newJeans = '심재현';

