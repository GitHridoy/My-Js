// ইফ ইলস এর কাজ হল প্রত্তেক টাকে সিরিয়াল বাই চেক করে যাবে তাই সময় বেসি লাগে

var name = 'apple';

// if(name == 'angur'){
//     console.log('are vai Dami ta lagbo')
// }
// else if(name == 'bedona'){
//     console.log('dhur vai eta na')
// }
// else if(name == 'bedona'){
//     console.log('dhur vai eta na')
// }
// else if(name == 'bedona'){
//     console.log('dhur vai eta na')
// }
// else if(name == 'bedona'){
//     console.log('dhur vai eta na')
// }
// else if(name == 'bedona'){
//     console.log('dhur vai eta na')
// }
// else if(name == 'apple'){
//     console.log('Yes ami apple us kori')
// }


// switch mathod এর কাজ হল সিরিয়াল বাই চেক না করে ডাইরেক্ট মেইন টাকে দ্রুত আউট পুট দিবে
switch(name){
    case 'angur':
        console.log('Eta amar lagbe na vai');
        break;
    case 'angur':
        console.log('Eta amar lagbe na vai');
        break;
    case 'angur':
        console.log('Eta amar lagbe na vai');
        break;
    case 'angur':
        console.log('Eta amar lagbe na vai');
        break;
    case 'angur':
        console.log('Eta amar lagbe na vai');
        break;
    case 'angur':
        console.log('Eta amar lagbe na vai');
        break;
    case 'apple':
        console.log('Yes Eta ami us kori vai');
        break;
        default:
            console.log('Na vai bad den')
}

// ইফ এলস এর ভাল একটি মেথড

        let Numbers = 39;
        if(Numbers >= 80 && Numbers <= 100){
        document.write('A+');
        }else if(Numbers >= 60 && Numbers <= 79){
            document.write('A-');
        }else if(Numbers >= 40 && Numbers <= 59){
            document.write('B+');
        }else if(Numbers >= 33 && Numbers <= 39){
            document.write('B');
        }else{
            document.write('Fail')
        }