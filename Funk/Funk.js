function Counter()
{
 function count()
 {
  return count.currentCount++;
 }
  count.currentCount = 1;
  return count;
}
let app = Counter();
for(let i=0;i<10;i++)
{
 console.log("Вызовов: "+app());
}