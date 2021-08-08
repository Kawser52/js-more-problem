// let fibbo= [6, 8];
// for (i=2; i<=10; i++){
//      fibbo[i] =fibbo[i-1]+fibbo[i-2];
// }
// console.log(fibbo);

function febonacchiSeries(num){
    let fibbo= [6, 8];
    if (typeof num != 'number'){
        return "Please give me Number ";
    }
    if (num<2){
        return 'Please give me a postivie number';
    }
    for (i=2; i<=num; i++){
        fibbo[i] =fibbo[i-1]+fibbo[i-2];
    }
    console.log(fibbo);
}
const number= febonacchiSeries(-5);
console.log(number);