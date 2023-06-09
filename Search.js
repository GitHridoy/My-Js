// এটা দিয়ে স্ট্রিঙ্গে থাকা লেটার স্ট্রিঙ্গে আছে কি না যাচাই করা যায়
let about = 'How to learn javascript in one year at you home';

let finde = about.includes('How');
console.log(finde)



// এটা দিয়ে স্ট্রিঙ্গে থাকা লেটার লোয়ার কেসে কনভারট করে যাচাই করা যায়
let Description = 'How to learn javascript On one year at you home';
let converted = Description.toLowerCase();
let search = converted.includes("on");
console.log(search)


// এটা দিয়ে স্ট্রিংটি অসমান কিনা এটা বোঝায়
let names = 'Hridyo sohag shumi ripa adnan';

if(names.indexOf('sohag') !== -1){
    console.log('Yease eta ase')
}else{
    console.log('No this is not have')
}


// এটা দিয়ে প্রথম এবং সেস স্ট্রিং ফাইন্ড করা যায়
let file = 'This is file Sohag.mp4';

if(file.startsWith('This')){
    console.log(true)
}{
    console.log(false)
}


if(file.endsWith('.mp4')){
    console.log('This is file extention is true');
}