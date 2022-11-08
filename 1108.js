/* 1. 직각삼각형 출력하기 */
/* 내 정답 */
/* const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
    rl.close();
}).on('close', function () {
    const num = Number(input[0]);
    let logStr = ''
    for (let i = 0; i < num; i++) {
        for (let j = 0; j <= i; j++) {
            logStr += '*'
        }
        logStr += '\n'
    }
    console.log(logStr)
    process.exit();
}); */

/* 2. 가위 바위 보 */
/* 내 정답 */
function solution2(rsp) {
    return [...rsp].map((e) => {
        if (e === '2') {
            return '0';
        } else if (e === '0') {
            return '5';
        } else if (e === '5') {
            return '2';
        }
    }).join('');
}
console.log(solution2("25505022"));

/* 참고할 정답 */
function solution2_ref(rsp) {
    let arr = {
        '2': '0',
        '0': '5',
        '5': '2'
    };
    var answer = [...rsp].map(v => arr[v]).join("");
    return answer;
}
console.log(solution2_ref("255050250220"));

/* 3. 피자 나눠먹기(2) */
function solution3(n) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
    return lcm(6, n) / 6;
}
console.log(solution3(8));
/* 참고할만한 정답 */
function solution3_ref(n) {

    return Array(6).fill(n).map((v, idx) => v = v * (idx + 1)).find((v) => v % 6 === 0) / 6;
}
console.log(solution3_ref(8));

let a = Array(6).fill(8).map((v, idx) => v = v * (idx + 1)).find((v) => v % 6 === 0);
console.log(typeof a);