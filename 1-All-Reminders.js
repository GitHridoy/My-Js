// 2 line article one line mathod
var firstname = 'hridoy';
var lastname = 'zohirul';
var fullname = firstname + '-' + lastname;
// console.log(fullname);




// convert string to number
var rate = '77';
var convert = parseInt(rate);
// console.log(convert);

// convert string to number with point
var rateing = 55.5;
var converting = parseFloat(rateing);
// console.log(rateing);


//finde spacific element by index number
var friendsAge = [11, 22, 30, 40, 24, 10]
// console.log(friendsAge[1]);

// Finde element of index number
var models = ['Hridoy', 22, 10, 'apple', 55, 66, 77, 88, 99];
var finde = models.indexOf('apple');
// console.log(finde)


// এটা দিয়ে যোকোনো এরের ভিতরে থাকা টাইপ অফ বের করতে পারে
var Array_Type = ['Hridoy', 22, 'Tuhin'];
// console.log(typeof(Array_Type[0]))



// var declaration
var tomatoprice = 25;
// var value update
tomatoprice = 30;


// add some value the existing value
var price1 = 55;
var price2 = 60;
price1 = price1 + 10;

// add some value more shorthand
price2 += 5;
console.log(price2);


// All push pop unshift shift
var model = ['symphony', 'walton', 'lenevo', 'tinmo', 'winmax'];
// model.pop() এটা দিয়ে সেস এলিমেন্ট রেমুভ করা হয়
// model.push('huawei') এটা দিয়ে সেস এলিমেন্ট যোগ করা হয়
// model.unshift('apple') এটা দিয়ে প্রথম এলিমেন্ট যোগ করা হয়
// model.shift() এটা দিয়ে প্রথম এলিমেন্ট রিমুভ করা হয়
// var Slicer = model.slice(1, 3); এটা দিয়ে নিদ্রিস্ট এলিমেন্ট কে রেখে বাদ বাকি ফেলে দেয়া যায়
// model.includes('walton') এটা দিয়ে যাচাই করা যায় যে এরের ভিতরে এলিমেন্ট টা আছে তো ট্রু অথবা ফলস


// এটা দিয়ে স্ট্রিং এর ভেতরে থাকা নিদ্রিস্ট ইন্ডেক্স এর লেন্থ বের করা যায়
let names = ['hridoy', 'rupas', 'adnan'];

let finde = names[1].length;
console.log(finde)



// All property name
var object = {
    keys: 'value',
}


// // switch mathod এর কাজ হল সিরিয়াল বাই চেক না করে ডাইরেক্ট মেইন টাকে দ্রুত আউট পুট দিবে
// var brand = 'apple';
// switch(name){
//     case 'angur':
//         // console.log('Eta amar lagbe na vai');
//         break;
//     case 'angur':
//         // console.log('Eta amar lagbe na vai');
//         break;
// }