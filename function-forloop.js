function Array(Numbers){
    for(let i = 0; i < Numbers.length; i++){
       let index = i;
       let element = Numbers[index]
       console.log(index, element)
    }
 }
 
 
 let Myarray = [22, 11, 44, 55, 111, 10];
 
 Array(Myarray);