var number = [1,400,12,34,5,6,7,7];
var i = 0;

// while(i < 5){
//     console.log(number[i]);
//     i = i + 1;
// }
var total = 0;
while(i < number.length){  //배열이 가지고 있는 특성과 반복문 결합
    console.log(number[i]);
    total = total + number[i]
    i = i + 1;
}
//배열에 들어있는 각각의 값 원소 즉 엘리먼트들 만큼 반복문 실행가능

console.log(`total :  ${total}`)
