// কোনো কিছু হিসাবা করতে গেলে যদি মাইনাস ১০ বা - দিয়ে আউটপুট দেয় তাহলে মেথ আ বি এস মেথড ইউস করতে হয় 
let Number1 = 45;
let Number2 = 55;
let gap = Math.abs(Number1 - Number2);
console.log(gap);


// এটার কাজ হল দসমিক এর পর ৫ থাকলেই রাউন্ড করে ৩ আউটপুট দিবে 
let NumberRound = Math.round(2.2011111);
console.log(Round);

// এটার কাজ হল দসমিক এর পর যাই থাকুক রাউন্ড করে ৩ করে দিবে
let NumberCeil = Math.ceil(2.2011111);
console.log(Ceil);


// এটার কাজ হল তিন এর উপরে যাই থাকুক ফ্লোর করে তিন আউটপুট দিবে 
let Numbers = Math.floor(3.100);
console.log(Numbers);


// এটার কাজ হল রেন্ডমলি সংখা আউটপুট দেয়া
console.log(Math.random());


// এটার কাজ হল রেন্ডমলি সংখা আউটপুট দেয়া এবং বলে দেয়া যাবে এক থেকে ১০০ এর ভিতরে 
let Random = Math.random()*100;
console.log(Random)

// এটার কাজ হল রেন্ডমলি সংখা আউটপুট দেয়া কিন্তু পুনঃ সংখা আউটপুট পাওয়ার জন্ন মেথ রাউন্ড এর ভিতরে রেখেছি 
let Randoms = Math.round(Math.random()*10000000000000000000);

console.log(Randoms);


