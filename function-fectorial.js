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