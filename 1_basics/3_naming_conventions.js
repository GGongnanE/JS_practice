/**
 * Naming Conventions
 * 
 * 변수 이름 지을 때 
 * 
 * 1) 일반적으로 영어(라틴문자)를 사용하며 문자, 숫자 사용 가능
 * 2) 특수기호는 언더스코어(_)와 달러($)를 사용할 수 있다.
 * 3) 숫자로 이름을 시작할 수 없다. 
 * 4) 키워드는 변수명으로 사용할 수 없다. 
 *    var var = 'var';
 */

let myName = "JH";
var $ive = '아이브';
const _yujin = '안유진';

console.log(myName);
console.log($ive);
console.log(_yujin);

/**
 *  Error example
 */
// let 1name = 'no';

// Variable declaration expected.ts(1134)
// let const = 'abc';


/**
 * Naming Convention 2
 * 
 * 1) camelCase - 대부분의 언어에서 많이 사용 
 * 2) snake_case - 단어와 단어를 언더스코어(_)로 묶는다.
 * 3) PascalCase - C# 등 MS계열의 언어에서 사용 
 */

// 카멜케이스
const anYuJin = '안유진';
console.log(anYuJin);


