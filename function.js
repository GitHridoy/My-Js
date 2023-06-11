// Mathod 1 start
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

// Mathod 1 end



function Hridoy (mony){
    console.log(mony);
    console.log('amake 10 ta mobile den');
    console.log('amake 10 ta mobile den');
    console.log('amake 10 ta mobile den');
}

var taka = 120;
Hridoy(taka);

function numbers(Taka, mony){
       console.log(Taka, mony)
       console.log('amar ekta pc lagbe')
}


var num1 = 140;
var num2 = 300;
numbers(num1, num2);



// এটা ফাংসনের নেইম ভেলু অথবা যেকোনো জিনিস এড করা যায়
function Name(myname){
    document.write(myname+'<br>')
}
Name('Foysal')
Name('Hridoy')
Name('Sumi')
Name('Adnan')



// ফাংসন থেকে রিটার্ন করার নিয়ম
function Numbers(Num1, Num2){
    let Total = Num1 + Num2;
    return Total;
}
let add1 = 112;
let add2 = 112;
let Calling = Numbers(add1, add2);
document.write(Calling);




// এটা ফাংসন ইফ এলস কন্ডিসন
function Add(item1, item2){
    let Total = item1 + item2;
    if(Total == 40){
     console.log('this is true')
    }
    else{
     console.log('No man you are wrong')
    }
 
 }
 
 let Add1 = 20;
 let Add2 = 20;
 
 let Calling_1 = Add(Add1, Add2)




//  এটা ইভেন ফাংসন মেথড
 function Hridoy(Even){
    const vag = Even % 2;
    if(vag === 0){
       return true;
    }
    else{
       return false;
    }
 }
 
 
 const Item = 120;
 
 const Function = Hridoy(Item);
 
 console.log(Function)

