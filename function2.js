function items (item1, item2, item3){
    const total = item1 + item2 + item3;
    const average = total / 3;
    return average;
}

const item1add = 60;
const item2add = 58;
const item3add = 59;

var myAverage = items(item1add, item2add, item3add);

console.log(myAverage)