// এটা হোয়াইল লুপ এবং ভেরিয়েবল প্রথমেই আলাদা করে লিখতে হয় ,হোয়াইল এর ভিতরে কন্ডিসন সেট করতে হয় ও বডিতে মান আপডেট করতে হয়
var Rost_Daw = 0;
while(Rost_Daw < 7){
    console.log('Taderke 7 Ta Rost Den')
    console.log(Rost_Daw)
    Rost_Daw++;
    
} 

// এটা হোয়াইল লুপ একই ভেরিয়েবলের মান বার বার সেট করা যায় এবং ব্রেক ও করা যায়
var mobile = 1;
while(mobile < 10){
    console.log('Amake 10 ta mobile den');
    mobile++
    if(mobile > 7){
        break;
    }
}

// এটি হোয়াইল লুপ এবং একটি এরের মান বের করা যায়
var company = ["huawei", 'tinmo', 'symphony', 'winmax']

var is = 0;

while(is < company.length){
    console.log(company[is])
    is++
}