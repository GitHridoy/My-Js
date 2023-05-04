function Hridoy(Even){
   const vag = Even % 2;
   if(vag === 0){
      return true;
   }
   else{
      return false;
   }
}


const Item = 120;

const Function = Hridoy(Item);

console.log(Function)