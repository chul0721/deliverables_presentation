/*
let a, b, c = 0; // a, b 선언, c 선언 후 0 할당
a = 1; // a에 1 할당
b = 1; // b에 1 할당
const math = function (x) { // 함수 x 생성
    let bx = Math.sin(b * x); // bx 변수에 b와 x를 곱한 후 sin 한 값을 할당
    return a * bx + c; // a와 bx 변수를 곱한 후 c를 더한 값을 리턴
}

let speed = 1; // speed 변수에 1을 할당 및 생성

let array = []; // 빈 배열 생성
let π = Math.PI; // π 생성
let λ = 2 * π * b; // λ 변수 안에 2와 π와 b를 곱한 값을 할당


while(λ >= c){ // λ가 c보다 이상일 동안 반복
    array.push(math(λ)); // array 안에 든 빈 배열 안에 math 함수에 매개변수를 λ로 계산하여 나온 리턴값을 array 배열 안에 넣기
    c += speed; // c에 speed의 값을 더한 후 그 값을 c에 재할당
    // 그 후 λ가 c 보다 작아질 때까지 반복
}

console.log(array); // 마지막으로 반복문이 끝났을 때 나온 결과값들을 콘솔 창에 출력
*/

// 입력값 : a, b
