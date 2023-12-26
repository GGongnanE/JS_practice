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


/**
 *  선언과 할당 
 * 
 *  1) 선언 : 변수를 선언하는 것 
 *  var name;
 * 
 *  2) 할당 : 값을 변수에 대입
 *  var name = '김길숙';   // 선언과 동시에 할당한 예
 *  
 *  const는 선언 후, 무조건 할당해야 한다. (초기값 부여 필요)
 */
let girlFriend;
console.log(girlFriend);        // undefined : 값을 할당하지 않는 경우 자동적으로 할당

// const girlFriend2;          // 'const' declarations must be initialized.ts(1155)




