
let name;
let secondname;
let middleName;
let age;
do{
name = prompt("Ваше имя");
}
while(+name||name.lenght < 1||!isNaN(name));
do{
secondname = prompt("Ваша фамилия");
}
while(+secondname||secondname.length <1||!isNaN(secondname));
do{
middleName = prompt("Ваше отчество");
}
while(+middleName||middleName.length < 3||!isNaN(middleName));
do{
age = prompt("Ваш возраст в годах");
}
while(isNaN(age)||age==0);
let ageDay = age*365;
let adult = age>18 ? "Совершеннолетний":"Не совершеннолетний";
let male = confirm("Ваш пол мужской?") ? "Мужской" : "Женский";
let old = age>60 ? "Да" : "Нет";
alert("Ваше ФИО: "+secondname +" "+ name +" "+ middleName +"\nВаш возраст в годах: "+age+"\nВаш возраст в днях: "+ageDay+"\nВы "+ adult + "\nВаш пол: "+male +"\nВы на пенсии: " +old);
