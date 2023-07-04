// ভেরিয়েবল টা এরে কিনা যাচাই করা যায় 
let Myarray = [22, 33, 55, 66, 11, 33, 66, 99];
console.log(Array.isArray(Myarray))


// এটা এরে কনকেট যা দারা দুইটা এরে কে একসাথে জোরা দেয়া যায়
let array_1 = ['A', 'B', 'C'];
      let array_2 = ['D', 'E', 'F', 'G', 'H'];

      let convert = array_1.concat(array_2);
      document.write(convert)


      
// এটা দিয়ে স্ট্রিং কে এরে তে রুপান্তর করা যায়      
      let about = 'i want to be a web developer';

      let convert_1 = Array.from(about);
      document.write(convert_1);


// এটা দিয়ে এরের ভিতরে থাকা নাম্বার কে ফিল্টার করে ছোট বর সংখা বের করা যায়     
      let Numbers = [22, 44, 11, 13, 56, 89, 99, 66]

      let result = Numbers.filter(function(list){
             return list>50;

      })
      document.write(result)


//array push and add last index 
var numbers = [55, 88, 79];
var wather = ['Akash', 'Batash', 'Nodi'];
wather.push('Noakhali'); //add new element of array last position
wather.unshift('Pakash'); //add new element of array first position
numbers.push(10);
console.log(wather)




// remove array of last element
var city = ['Faridpur', 'Dkaka', 'Khulna']
city.pop(); //remove a element of array from last position
console.log(city);




// সব পুশ পপ মেথড
var model = ['symphony', 'walton', 'lenevo', 'tinmo', 'winmax'];


// model.pop() এটা দিয়ে সেস এলিমেন্ট রেমুভ করা হয়
// model.push('huawei') এটা দিয়ে সেস এলিমেন্ট যোগ করা হয়
// model.unshift('apple') এটা দিয়ে প্রথম এলিমেন্ট যোগ করা হয়
// model.shift() এটা দিয়ে প্রথম এলিমেন্ট রিমুভ করা হয়
// var Slicer = model.slice(1, 3); এটা দিয়ে নিদ্রিস্ট এলিমেন্ট কে রেখে বাদ বাকি ফেলে দেয়া যায়
// var SpliceRemover = model.splice(1, 3); এটার কাজ হল মুল এরে থেকে এলিমেন্ট আলাদা করা যেমন এক থেকে সিরিয়াল বাই গুনে দেয়া 
// model.includes('walton') এটা দিয়ে যাচাই করা যায় যে এরের ভিতরে এলিমেন্ট টা আছে তো ট্রু অথবা ফলস



// এরে কে স্প্লিট স্লাইস করার মেথড
let Names = 'Din gelo: tomar o phtho cahia: sohena jatona tomaro asay bosia puri ami ami agune';

// let Spliting = Names.split(' '); এটার কাজ স্ট্রিং কে এরে তে রুপান্তর করা
// let Spliting = Names.split('.'); স্ট্রিং এর ভিতরে যতগুলো ডট থাকবে ততবার এরে হিসাবে আলাদা করে দিবে
// let Spliting = Names.split(''); এটার কাজ হল স্টিং এর ভিতরের প্রত্তেকটা কেরেকটার কে আলাদা করে এরে বানান
// let Sliceing = Spliting.slice(1, 7); এটার কাজ হল নিরদিস্ট অংসকে কেটে ফেলা
// let Spliting = Names.split(':'); স্ট্রিং এর ভিতরে যতগুলো ডট থাকবে ততবার এরে হিসাবে আলাদা করে দিবে