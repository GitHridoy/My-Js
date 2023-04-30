var iphonePrice = 79000;
var Buget = 95000;

// এটা লেস দেন মানে হল সংখা ছোট হতে হবে
if (iphonePrice < Buget){
    console.log('i phone kine futani marbo');
}


var football = 320;
var mony = 320;

// এটা লেস দেন ইকুয়াল মানে হল ছোট হোক অথবা সমান
if (football <= mony){
    console.log('Eta Amar Football');
}


// ইফ এলস কন্ডিসন এভাবে সেট করতে হয়
var Ruti = 10;
var Mony = 5;

if (Ruti < Mony){
    console.log('Ji Vai Ami Ruti Khamu');
}
else{
    console.log('Na vai amar Baget Nai');
}


// এটা দিয়ে মাল্টিপল কন্ডিসন সেট করে যায়
var isGraduated = true;
var sallery = 60000;
var cars = 4;
if (isGraduated == true && sallery > 50000 && cars <= 3){
    console.log('Aso Bia Kori')
}
else{
    console.log('Tumi Joggo Patro Na')
}


// এটা দিয়ে মাল্টিপল কন্ডিসন সেট করে যায় এবং কিছু কন্ডিসন ফলস হলেও পাস করায় দিবে
var Home = true;
var Taka = 40000;
var Hunda = true;

if (Home == true || Taka > 50000 || Hunda == true){
    console.log('Aso Bia Kori')
}
else{
    console.log('Tumi Joggo Patro Na')
}




// এটা ইফ এলস কন্ডিসন চেক করে যদি সঠিক পায় তাহলে ওই কন্ডিসনেই ব্রেক হয়ে যাবে আর সঠিক না পেলে নি নিচের কন্ডিসন গুলো চেক করবে
var mony = 15;
var mamabiskut = 30;
var coko = 90;
var losen = 15;

if (mamabiskut < mony){
    console.log('Mama Biskut Khamu')
}
else if (coko < mony){
    console.log('Ami Coko Khamu')
}
else if(losen <= mony){
    console.log("ami losen khamu")
}
     