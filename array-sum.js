let sum=0;
let arrayNumber= [14, 55, 14, 24, 45];
for (i=0; i<arrayNumber.length;i++){
  let storeArray= arrayNumber[i];
  sum = sum + storeArray;

}
// console.log(sum);

function arraySummation(arrayNumber){
let sum=0;
for (i=0; i<arrayNumber.length;i++){
  let storeArray= arrayNumber[i];
  sum = sum + storeArray;
}
  return sum;
}
let summation= arraySummation([14, 58, 57, 41])
console.log(summation);

