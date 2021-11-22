let nummber = prompt("Введите число:");
let arr = Array.from(nummber);
for(let i=0;i<arr.length;i++){
 if(arr[i]%2==0 && arr[i+1]%2==0){
 arr[i]=arr[i]+"-";
 }
}
alert(arr.join(''));