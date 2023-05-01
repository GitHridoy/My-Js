function Evennumber(Numbers){
    const Numbersvag = Numbers % 2;
    if(Numbersvag === 0){
       return true;
    }
    else{
       return false;
    }
}


const adding = 120;

const Calling = Evennumber(adding);

console.log(Calling)