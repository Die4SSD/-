function Square(a,b,c)
{
let D = ((b*b)-4*(a*c));
let x1 = (-b + Math.sqrt(D))/(2*a);
if(x1===NaN){
x1 = "Нет корней";
}
let x2 = (-b - Math.sqrt(D))/(2*a)
if(x2===NaN){
x2 = "Нет корней";
}
if(D<0){
alert("Уравнение: "+a+'x^2'+'+'+b+'x'+'+'+c+"=0"+" не имеет корней");
}
else if(x1==x2){
alert("Уравнение: "+a+'x^2'+'+'+b+'x'+'+'+c+"=0"+'\nИмеет 1 корень: '+x1);
}
else{
alert("Уравнение: "+a+'x^2'+'+'+b+'x'+'+'+c+"=0"+'\nКорни: x1='+x1+'x2= '+x2);
}
}
Square(1,-8,72);