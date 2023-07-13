

// for(let is = 1; is <= 50; is++){
//      if(is % 3 === 0 && is % 5 === 0){
//           console.log('foo')
//      }
//      else if(is % 3 === 0){
//           console.log('foobar')
//      }
//      else if(is % 5 === 0){
//           console.log('bar')
//      }
//      else{
//           console.log(is)
//      }
// }

// function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
//      const perChairWood = 3;
//      const perTableWood = 10;
//      const perBedWood = 50;

//      const chairWood = chairQuantity * perChairWood;
//      const tableWood = tableQuantity * perTableWood;
//      const bedWood = bedQuantity * perBedWood;
//      const totalwood = chairWood + tableWood + bedWood;
//      return totalwood;
// }

// const TotalWood = woodCalculator(0, 0, 1);
// console.log(TotalWood)

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