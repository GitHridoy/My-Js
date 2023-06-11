// এটা ফর ইন লুপ
let names = ['Hridoy', 'sohag', 'rubina', 'nodi', 'dinu','Hassan'];
       for(let items in names){
       document.write(names[items]+'<br>');
     }


// এটা ফর ইন লুপ কিন্তু অবজেক্ট কে নিয়ে কাজ করে
     let Hridoy = {
        Year: 30,
        Job: 'web',
        Address: 'Faridpur',
        Vilage: 'Sutarkanda',
        Work: 'Mobile Repair'
      }


for(let list in Hridoy){
     document.write(Hridoy[list]+'<br>');
}