/**
 * Data Types
 * 
 * 6개의 Primitive Type과 한 개의 오브젝트 타입이 있다.
 * 
 * 1) Number(숫자)
 * 2) String(문자열)
 * 3) Boolean (불리언)
 * 4) undefined
 * 5) null
 * 6) Symbol (심볼)
 * 
 * 7) Object (객체)
 *    - Function
 *    - Array
 *    - Object
 */

const age = 32;
const tempature = -10; 
const pi = 3.14;

// 타입 확인 (typeof)
console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);
console.log('=================');

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof nInfinity);

console.log('=================');

/**
 * String 
 */
const codeFactory = "코드'공'장";
console.log(codeFactory);
console.log(typeof codeFactory);

const ive = "'아이브' 안유진";
console.log(ive);


/**
 * template Literal 
 * 
 * 1) newLine -> \n
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현 -> \\
 * 
 **/ 
const iveYuJin = '아이브\n안유진';
console.log(iveYuJin);

const iveWY = '아이브\t장원영';
console.log(iveWY);

const smallQutoation = '아이브\'코드팩토리';
console.log(smallQutoation);

// ``
const iveWY2 = `아이브 장장/'' "" 
장원영`;
console.log(iveWY2);
console.log(typeof iveWY2);     

const groupName = '아이브';
console.log(groupName + ' 안유진');
console.log(`${groupName} 장원영`);



/**
 * Boolean
 * 
 */
const isTrue = true;
const isFalse = false;

console.log(typeof isTrue);
console.log(typeof isFalse);

console.log('=================');

/**
 * undefined
 * 
 * 사용자가 직접 값을 초기화하지 않았을 때, 지정되는 값이다.
 * 직접 undefined로 값을 초기화하지 말 것
 */
let noInit;
console.log(noInit);
console.log(typeof noInit);

console.log('=================');


/**
 * null
 * 
 * undefined와 마찬가지로 값이 없다는 뜻이나 JS에서는 개발자가
 * 명시적으로 얻는 값으로 초기화할 때 사용한다.
 */
let init = null; 
console.log(init);
// null이 object 타입으로 확인 되는 버그가 있다. (JS 개발자가 인정함.)
console.log(typeof init);
console.log('=================');


/**
 * Symbol 
 * 
 * 유일무이한 값을 생성할 때 사용한다. 
 * 다른 프리미티브 값들과 다르게 Symbol 함수를 호출해서 사용한다. 
 */
const test1 = '1';
const test2 = '1';

console.log(test1 === test2);       // true

// 유일한 변수값이 된다.
const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

console.log(symbol1 === symbol2);   // false
console.log('=================');


/**
 * Object 타입 
 * 
 * key와 value의 쌍으로 이루어져 있다. 
 * ex) key : value
 */
const dictionary = {
    red : '빨간색',
    orange : '주황색',
    yellow : '노오오란색'
};

console.log(dictionary);
console.log(dictionary['red']);     // search by key
console.log(typeof dictionary);


/**
 * Array 타입
 * 
 * 값을 리스트로 나열할 수 있는 타입이다. 
 */

// 0번부터 순서대로 인덱스 할당 됨.
const iveMemberArr = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서'
];

console.log(iveMemberArr);
console.log(iveMemberArr[2]);       // 레이
iveMemberArr[5] = 'SJH';
console.log(iveMemberArr);
console.log(typeof iveMemberArr);   // Array도 typeof로는 object


/**
 * static typing : 변수를 선언할 때, 어떤 타입의 변수를 선언할지 명시 
 * ex) C
 * 
 * dynamic typing : 변수의 타입을 명시적으로 선언하지 않고 타입을 추론한다.
 * ex) JavaScript
 * 
 */