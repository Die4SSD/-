let numbers = [2, 3, 5, 7, 11, 13, 17];
function currentSums(numbers){
 let sum = numbers.reduce(function count(total, amount,){
 let res = total+amount
 console.log(res)
 return res
 });
}
//currentSums(numbers);
function str(){
 let text = ' Каждый охотник желает знать, где сидит фазан.'
 arr = Array.from(text);
 let res = arr.filter(function sort(curB,index){
 if(curB==" "){
 return console.log(arr[index+1])
  }
 })
}
str()
function changeArray(){
 let arr = [1,2,3,4,5,6];
 let avg = Math.round(arr.length/2)
 let spl = arr.slice(0,avg);
 let spl1 = arr.slice(avg)
 let sl = spl.reverse();
 let sl1 = spl1.reverse();
 let jo = sl+','+sl1
 return console.log(jo)
}
changeArray()