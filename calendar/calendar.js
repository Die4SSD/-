let countDiv = 0
  function CreateDiv(){
    countDiv++
    let div = document.createElement('div');
    div.id = 'calendar'+countDiv;
    document.body.append(div)
    return toString(div.id)
  }
  function buttonEnable(){
    let button = document.getElementById("buttonCreate")
    button.removeAttribute('disabled')
  }
  let arr = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
  let arr1 = [1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021]
  let selectSpisokYear = document.getElementById("selectYear")
  for(let i=0;i<arr1.length;i++){
    let arrIndex = arr1[i];
    let elem = document.createElement("option");
    elem.textContent = arrIndex;
    elem.value = arrIndex;
    selectYear.appendChild(elem);
  }
  let selectSpisokMounth = document.getElementById("selectMounth")
  for(let i=0;i<arr.length;i++){
    let arrIndex = arr[i];
    let elem = document.createElement("option");
    elem.textContent = arrIndex;
    elem.value = arrIndex;
    selectMounth.appendChild(elem);
  }
  function getSelectYear(){
    let select = selectSpisokYear
    let value = select.value;
    return value
  }
  function getSelectMounth(){
    let select = selectSpisokMounth
    let value = select.value;
    let toNumber = arr.indexOf(value)+1
    return toNumber
  }
  function getMounthName(){
    let select = selectSpisokMounth
    let value = select.value;
    let toNumber = arr.indexOf(value)
    return arr[toNumber]
  }
  function evt(){
    this.css
  }
    function createCalendar(year, month) {
      let mon = month - 1;
      let d = new Date(year, mon);
      let table = '<table id=rr><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';
      for (let i = 0; i < getDay(d); i++) {
        table += '<td></td>';
      }
      while (d.getMonth() == mon) {
        table += '<td>' + d.getDate() + '</td>';
        if (getDay(d) % 7 == 6) { 
          table += '</tr><tr>';
        }
        d.setDate(d.getDate() + 1);
      }
      if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
          table += '<td></td>';
        }
      }
      table += '</tr></table>';
      let elem = document.getElementById('calendar'+countDiv);
      elem.innerHTML = table;
      document.querySelectorAll('td').forEach(el => el.onclick = e => el.style.backgroundColor = 'red');
    }
    function getDay(date) {
      let day = date.getDay();
      if (day == 0) day = 7; 
      return day - 1;
    }
    buttonCreate.onclick = function(){
    CreateDiv();
    createCalendar( +getSelectYear(),+getSelectMounth())
    document.getElementById("Date").innerHTML = getMounthName()+' '+getSelectYear()+'года';
    };
    let countPushMounth = 0;
    nextMounth.onclick = function(){
      countPushMounth++
    createCalendar(getSelectYear(),+getSelectMounth()+countPushMounth)
    document.getElementById("Date").innerHTML = arr[getSelectMounth()+countPushMounth-1]+' '+(+getSelectYear()+countPushYear)+' года';
    }
    let countPushYear = 0;
    nextYear.onclick = function(){
      countPushYear++
      createCalendar(getSelectYear()+countPushYear,getSelectMounth())
      document.getElementById("Date").innerHTML = arr[getSelectMounth()+countPushMounth-1]+''+(+getSelectYear()+countPushYear)+' года';
    }
    prevMounth.onclick = function(){
      countPushMounth--
      createCalendar(getSelectYear(),getSelectMounth()+countPushMounth)
      document.getElementById("Date").innerHTML =  arr[getSelectMounth()+countPushMounth-1]+' '+(+getSelectYear()+countPushYear)+' года';
    }
    prevYear.onclick = function(){
      countPushYear--
      createCalendar(+getSelectYear()+countPushYear,getSelectMounth())
      document.getElementById("Date").innerHTML =arr[getSelectMounth()+countPushMounth-1]+''+(+getSelectYear()+countPushYear)+' года';
    }
    buttonDelete.onclick = function(){
      const element = document.getElementById('calendar'+countDiv)
      if(element.parentNode){
        element.parentNode.removeChild(element);
      }
      countDiv--
    }
    
