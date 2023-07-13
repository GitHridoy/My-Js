// এখানে সব থেকে কম দামি মোবাইল টা বের করার মেথড 
const phones = [
    { name: 'samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver'},
    { name: 'walton', camera: 12, storage: '32gb', price: 22000, color: 'silver'},
    { name: 'iphone', camera: 12, storage: '32gb', price: 82000, color: 'silver'},
    { name: 'Xaomi', camera: 12, storage: '32gb', price: 52000, color: 'silver'},
    { name: 'Oppo', camera: 12, storage: '32gb', price: 20000, color: 'silver'},
    { name: 'Nokia', camera: 12, storage: '32gb', price: 44000, color: 'silver'},
    { name: 'HTC', camera: 12, storage: '32gb', price: 62000, color: 'silver'}
];


function lowPricephone(phones){
    let lowPrice = phones[0];
    for(let is = 0; is < phones.length; is++){
       const phone = phones[is];
       if(phone.price < lowPrice.price){
         lowPrice = phone;
       }
   }
   return lowPrice;
}

const mySelection = lowPricephone(phones);
console.log(mySelection)

// এখানে সব থেকে কম দামি মোবাইল টা বের করার মেথড