/* 1. 배열유사도 */
/* 내 정답 */
console.log('1번문제');
function solution(s1, s2) {
    let count = 0;
    s2.forEach(function (e) {
        s1.forEach(function (s) {
            if (s === e) {
                count++;
            }
        })
    })
    return count;
}
let s1 = ["a", "b", "c"];
let s2 = ["com", "b", "d", "p", "c"];

/* 참고 정답  */
function solution1(a, b) {
    return a.filter((v) => b.includes(v)).length;
}
console.log(solution1(s1, s2));
console.log(solution1(s1, s2));

/* 2. 숨어있는 숫자의 덧셈(1) */
console.log('2번 문제');
function solution2(my_string) {
    return my_string.split('').map(v => Number(v)).filter(v => !isNaN(v)).reduce((a, b) => (a + b));
}
solution2("aAb1B2cC34oOp");
let a = "1a2b3c4d123"
let b = a.split('');
let c = b.map(v => Number(v)).filter(v => !isNaN(v)).reduce((a, b) => (a + b));
console.log(c);

/* 3. 문자열 정렬하기(1)*/
console.log('3번 문제');
function solution3(my_string) {
    console.log(my_string.split('').map(v => Number(v)).filter(v => !isNaN(v)).sort((a, b) => (a - b)));
}
solution3("p2o4i8gj2");