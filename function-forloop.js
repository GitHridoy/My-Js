function Array(Numbers){
    for(let i = 0; i < Numbers.length; i++){
       let index = i;
       let element = Numbers[index]
       console.log(index, element)
    }
 }
 
 
 let Myarray = [22, 11, 44, 55, 111, 10];
 
 Array(Myarray);




// এটা দিয়ে একটি এরের ভিতরে থাকা সকল বেজর অথবা জোর সঙ্খা বের করা যায়
 function OddNum(Numbers){
   for(let is = 0; is < Numbers.length; is++){
         let index = is;
         let Element = Numbers[index];
         if(Element % 2 == 0){
            console.log(index, Element)
         }
   }
}



let Addnum = [11, 22, 130, 44, 55, 56, 88, 99, 98, 100, 10, 5, 6];

OddNum(Addnum);