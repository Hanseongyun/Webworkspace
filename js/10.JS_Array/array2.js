/*
    배열 고차 함수
    - 배열의 불변성을 최대한 보장하여 부수효과를 제거한 메서드
*/
const array = [7, 11, 20, 1, 8, 3, 16, 2, 19, 9, 10, 4, 13, 12, 14, 17, 15, 5, 18, 6];

/*
    sort(비교 함수) : 배열의 요소를 적절하게 정렬
    - 단순 .sort()로 정렬하면 사전식 정렬을 하게됨
*/
// array.sort();            // 사전식정렬
// console.log(array);
const asc = function (x, y) {
    return x - y;
}
array.sort(asc);        // x-y가 음수면 y가 앞으로감 (오름차순)
console.log(array);

array.sort(function(x,y) {return y-x});     // 내림차순정렬
console.log(array);

const objects = [
    {x:9, y:-5},
    {x:-2, y:0},
    {x:0, y:-3},
    {x:6, y:5}
];
console.log(objects);
objects.sort(function(a,b) {            // x에 대하여 오름차순정렬
    return a.x - b.x;
});
console.log(objects);

console.log('==============================');

/*
    forEach(콜백 함수) : for문 대신 사용
    - 배열을 순회하면서 각 요소와 인덱스를 사용할 수 있도록 함
    - 원본 배열 변경 X
    - break, continue, ... 부가적인 작업을 추가 X
    - for문보다 성능 떨어짐, 가독성이 좋고 편리하므로 자주 사용됨
    - async await 작업은 foreach문으로 사용 불가(일반 for문으로 해야됨)
*/
array.forEach(function(item, index) {
    console.log(`index: ${index}, item: ${item}`);
});

console.log('==============================');

/*
    map(콜백 함수) : 콜백 함수의 반환값들로 이루어진 새로운 배열 생성해서 반환
    - 원본 배열 변경 X
    - forEac는 단순히 요소를 가지고 작업만 진행 (반환값 X), map은 요소를 가지고 작업한 결과로 배열을 새로 만듬 (반환값 O)
*/
const mapArray = array.map(function (item, index) {
    console.log(`index: ${index}, item: ${item}`);
    return item * item;
});
console.log(mapArray);
console.log(array);

console.log('==============================');

/*
    filter(콜백 함수) : 콜백함수의 반환값이 true인 배열의 요소의 값만을 추출한 새로운 배열을 생성
    - 배열에서 특정 케이스만 필터링 조건으로 추출하여 새로운 배열을 만들고 싶을때 사용
    - 원본 배열 변경 불가능
*/
const filterArray = array.filter(function (item, index) {
    return item % 2 === 1;
});

console.log(filterArray);
console.log(array);

console.log('==============================');

/*
    find(콜백 함수) : 콜백 함수 결과가 true인 첫번째 요소를 반환
*/
const findResult = array.find(function(item, index){
    return item % 2 === 1;
});
console.log(findResult);


console.log('==============================');

/*
    findindex(콜백 함수) : 콜백 함수 결과가 true인 첫번째 요소의 인덱스를 반환
*/
const findIndexResult = array.findIndex(function(item, index){
    return item % 2 === 1;
});
console.log(findIndexResult);


console.log('==============================');