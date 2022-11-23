function solution(arr1, arr2) {
    let answer = 0;
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] >= 29) {
            arr2[i] = 21;
        }
        arr2[i] = arr2[i] - arr1[i];
    }
    answer = arr2.reduce((acc, cur) => {
        return acc + cur;
    })
    return answer;
}
let arr1 = [9, 9, 9, 9, 7, 9, 8];
let arr2 = [23, 23, 30, 28, 30, 23, 23];
console.log(solution(arr1, arr2))

function sample(...items) {
    console.log(items);
}
const array = [1, 2, 3, 4];
sample(array);
sample(...array);