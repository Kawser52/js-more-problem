// let first=76;
// let second=97;
// let third=114;

// let min=Math.min(first,second,third);
// console.log(min);

function findMin(first,second, third){
     if(first<second && first <third){
        return first;
     } else if(second<first && second <third){
         return second;
     } else{
         return third;
     }
}

let minNumber= findMin (14,15,14);
console.log("Lowserst Minimum Number is", minNumber);