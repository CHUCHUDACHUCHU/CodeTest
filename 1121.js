/* 제일 작은 수 제거하기 */
/* function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    if (arr.length == 0) return [-1];
    else return arr;
}
console.log(solution([10]));

let x = [4, 5, 8, 3, 6, 7];
x.splice(x.indexOf(Math.min(...x)), 1)
console.log(x); */

/* 콜라츠 추측 */
/* function solution(num) {
    let count = 0;
    while (num != 1) {
        if (num % 2 === 0) {
            num /= 2;
            count++;
            if (count >= 500) {
                count = -1;
                break;
            }
        } else {
            num = num * 3 + 1;
            count++;
            if (count >= 500) {
                count = -1;
                break;
            }
        }
    }
    return count;
}

console.log(solution(626331)); */

/* 하샤드 수 */
/* function solution(n) {
    let x = n;
    let sum = 0;
    do {
        sum += x % 10;
        x = parseInt(x / 10)
    } while (x >= 10)
    return n % (sum + x) === 0;
}

console.log(solution(18)); */

/* 3진법 뒤집기 */
/* let x = 45;
let y = x.toString(3);
console.log(parseInt(y.split('').reverse().join(''), 3));

function solution(n) {
    return parseInt(n.toString(3).split('').reverse().join(''), 3);
}

console.log(solution(45)); */

/* 최소 직사각형 */

/* 유의깊었던 해답 */
/* function solution(sizes) {
    const [hor, ver] = sizes.reduce(([h, v], [a, b]) => [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))], [0, 0])
    return hor * ver;
}
 */
/* let x = [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]];
x.reduce(([h, v], [a, b]) => {
    console.log([h, v]);
    return [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))];
}, [0, 0]);


function solution(sizes) {
    let a = [];
    let b = [];
    sizes.forEach((v) => {
        v.sort((a, b) => (b - a));
        a.push(v[0]);
        b.push(v[1]);
    });
    return Math.max(...a) * Math.max(...b);
}

console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]])); */
/* 자바스크립트에서 sort()함수를 쓸 때 항상 유의하자! */

/* 같은 숫자는 싫어 */
/* function solution(arr) {
    return arr.reduce((acc, cur) => {
        let len = acc.length;
        if (len === 0 || acc[len - 1] !== cur) {
            acc.push(cur);
        }
        return acc;
    }, []);
}
console.log(solution([1, 1, 3, 3, 0, 1, 1])); */

/* 두 개 뽑아서 더하기 */
/* function solution(numbers) {
    var result = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            result.push(numbers[i] + numbers[j]);
        }
    }
    var answer = [...new Set(result)];

    return answer.sort((a, b) => a - b);
}
console.log(solution([2, 1, 3, 4, 1])); */

/* 로또의 최고 순위와 최저 순위 */
function solution(lottos, win_nums) {
    let y = [];
    for (let i = 0; i < 6; i++) {
        win_nums.forEach((v) => {
            if (v === lottos[i]) {
                y.push(v);
            } else if (lottos[i] === 0) {
                y.push(0);
            }
        })
    }
    console.log(y);
}

solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);