/* 2016년 */
/* function solution(a, b) {
    const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const day = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
    let sum = 0;
    for (let i = 0; i < a - 1; i++) {
        sum += month[i];
    }
    sum += b;
    return day[sum % 7];
}

console.log(solution(5, 24)); */

/* 나누어 떨어지는 숫자 배열 */
/* function solution(arr, divisor) {
    let anwser = arr.filter((v) => {
        return (v % divisor) === 0
    }).sort((a, b) => a - b);
    if (anwser.length === 0) {
        return [-1];
    } else {
        return anwser;
    }
}

console.log(solution([5,9,], 5)) */

/* 수박수박수박수박수? */
/* function solution(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            arr.push('수');
        } else {
            arr.push('박');
        }
    }
    return arr.join('');
} */


/* 완주하지 못한 선수 */
/* function solution(participant, completion) {
    completion.map((v) => {
        let idx = participant.indexOf(v);
        if (idx >= 0) {
            participant.splice(idx, 1);
        }
    })
    return participant.toString();
}

console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])); */
// 이 답안은 효율성문제를 일으킨다.
// 그 이유는 아무래도 많은 양의 데이터를 map이랑 indexOf와 splice까지 하기 때문인 것 같다.
/* function solution(participant, completion) {
    participant.sort();
    completion.sort();
    for (let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) return participant[i];
    }
} */
/* 
function solution(participant, completion) {
    var dic = completion.reduce((obj, t) => (obj[t] = obj[t] ? obj[t] + 1 : 1, obj), {});
    return participant.find(t => {
        if (dic[t])
            dic[t] = dic[t] - 1;
        else
            return true;
    });
}

console.log(solution(["mislav", "stanko", "mislav", "ana", 'chu'], ['mislav', "stanko", "ana", "mislav"]));

let a = ["mislav", "stanko", "mislav", "ana", 'chu'];
let b = ['mislav', "stanko", "ana", "mislav"];

let c = b.reduce((obj, t) => (obj[t] = obj[t] ? obj[t] + 1 : 1, obj), {});
console.log(c);
c['mislav'] -= 1;
console.log(c);
c['stanko'] -= 1;
console.log(c);
c['mislav'] -= 1;
console.log(c);
c['ana'] -= 1;
console.log(c); */