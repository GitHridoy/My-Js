// এটা ফর লুপ এবং এর ভিতরে ভেরিয়েবল কন্ডিসন সহ সবকিছু রাখা যায় 
for (var i = 0; i < 10; i++){
    console.log(i);
}

// এটা ফর লুপ এবং একটি ভেরিয়েবল এর ভিতরের এলিমেন্ট কে বের করা সম্বব
var numbers = [33, 44, 11, 13, 10, 18, 19, 22];
for(var myindex = 0; myindex < 8; myindex++){
    var findenumbers = numbers[myindex];
    console.log(findenumbers)
}


// এটা ফর লুপ এবং একটি ভেরিয়েবল এর ভিতরের সব এলিমেন্ট কে বের করা যায়
var numbers = [33, 44, 11, 13, 10, 18, 19, 22, 42, 100];
for(var myindex = 0; myindex < numbers.length; myindex++){
    var findenumbers = numbers[myindex];
    console.log(findenumbers)
}


// এটা ফর লুপ এবং একটি ভেরিয়েবল এর ভিতরের সব এলিমেন্ট কে বের করা যায় এবং চাইলে নিদ্রিস্ট ইন্ডেক্সে ব্রেক ও করা যায়
var model = ['w68', 'w45', 'v75', 'v85', 'v95', 'v45'];
for(var is = 0; is < model.length; is++){
    var finde = model[is];
    if(finde == 'v95'){
        break;
    }
    console.log(finde)
}

// এটা ফর লুপ এবং একটি ভেরিয়েবল এর ভিতরের সব এলিমেন্ট কে বের করা যায় এবং চাইলে নিদ্রিস্ট ইন্ডেক্সে স্কিপ করে পরের গুলা চালান যায়
var model = ['w68', 'w45', 'v75', 'v85', 'v95', 'v45'];
for(var is = 0; is < model.length; is++){
    var finde = model[is];
    if(finde == 'v95'){
        continue;
    }
    console.log(finde)
}

// এটা দিয়ে ফর লুপের বাহিরে থাকা মানকে ইনডেক্স এর সাথে বার বার জোগ করা যায়
let sum = 0;

for(let is = 1; is < 10; is++){
    sum = sum + is;
    console.log(is, sum)
}

// এটা দিয়ে বেজড় সংখা আউটপুট করা যায়
for(let sum = 1; sum <= 113; sum = sum + 2){
    console.log(sum)
}

// এটা ফর লুপ ফেকটোরিয়াল মেথডে আউটপুট বানানোর আইডিয়া 
for(let num = 1; num <= 123; num = num + 2){
    console.log(num)
}

for(let num = 1; num <= 123;){
    num = num + 2;
    console.log(num);
}



// এটা অবজেক্ট ফর লুপ মেথড
var Mobile = {
    Model: 'I75',
    Ram: '2GB',
    CPU: 'MTK',
    Price: 2400,
    
}

var finde = Object.keys(Mobile);

for(var is = 0; is < finde.length; is++){
    var Total = finde[is];
    console.log(Total)
}


// এটা ফেক্টোরিয়াল ফাংসন
function Getfact (Numbers){
    let fact = 1;
    for(let is = 1; is <= Numbers; is++){
         fact = fact * is;
         console.log(fact)
    }
    
}
let Addfact = 5;

Getfact(Addfact)


// এটাকে বলা হয় ফিবোনাচ্চি মেথড 
0,1,1,2,3,5,8,13

const fibo = [0, 1];

for(let is = 2; is <= 10; is++){
    fibo[is] = fibo[is-1] + fibo[is-2];
    
}
console.log(fibo)