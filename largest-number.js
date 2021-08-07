// largest Number printing
let largest=0;
let numbers=[14, 54, 14, 47];
for (i=0;i<numbers.length;i++){
  let element=numbers[i];
  if(element>largest){
      largest= element;
  }
}
console.log(largest);