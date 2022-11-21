/* 이상한 문자 만들기 */
/* function solution(s) {
    let n = [];
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == ' ') {
            n.push(' ');
            count = 0;
            continue;
        } else {
            count++;
            if (count % 2 == 1) {
                n.push(s[i] != s[i].toUpperCase() ? s[i].toUpperCase() : s[i]);
            } else if (count % 2 == 0) {
                n.push(s[i] != s[i].toLowerCase() ? s[i].toLowerCase() : s[i]);
            }
        }
    }
    return n.join('');
}

function toWeirdCase(s) {
    return s.split(' ').map(i => i.split('').map((j, key) => key % 2 === 0 ? j.toUpperCase() : j).join('')).join(' ')
}

console.log(solution(' abc abcd abcde')); */

/* 자릿수 더하기 */
/* function solution(n) {
    let sum = 0;
    do {
        sum += n % 10;
        n = parseInt(n / 10)
        console.log(sum);
    } while (n >= 10)
    return sum + n;
}

console.log(solution(123456)); */

/* 자연수 뒤집어 배열로 만들기 */
/* function solution(n) {
    let s = n.toString().split('');
    let len = s.length;
    let x = [];
    for (let i = 0; i < len; i++) {
        x.push(parseInt(s.pop()));
    }
    return x;
}

console.log(solution(150468750)); */

/* 정수 내림차순으로 배치하기 */
/* function solution(m) {
    return parseInt(m.toString().split('').sort((a, b) => (b - a)).join(''));
}
console.log(solution(118372)); */

/* 정수 제곱근 판별 */
/* function solution(n) {
    let x = Math.sqrt(n);
    if (Number.isInteger(x)) {
        return (x + 1) * (x + 1);
    } else return - 1;
}

console.log(solution(3)) */