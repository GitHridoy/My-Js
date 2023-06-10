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

