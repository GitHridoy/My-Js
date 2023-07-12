

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

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
     const perChairWood = 3;
     const perTableWood = 10;
     const perBedWood = 50;

     const chairWood = chairQuantity * perChairWood;
     const tableWood = tableQuantity * perTableWood;
     const bedWood = bedQuantity * perBedWood;
     const totalwood = chairWood + tableWood + bedWood;
     return totalwood;
}

const TotalWood = woodCalculator(0, 0, 1);
console.log(TotalWood)