class HashStorage {
    obj = { 
        alc1: 'Да',
        res1: 'Водка Finlandia 50мл Кофейный ликер 25мл Лед в кубиках 120 г',
        cook1: 'Наполни стакан кубиками льда доверху, затем налей кофейный ликер 25 мл, водку 50 мл и размешай коктейльной ложкой.',
        res2: 'Гренадин Monin 10мл Клубничный сироп Monin 10мл Персиковый сок 150мл Лимонный сок 15мл Банан 110г Клубника 50г Дробленый лед 60г',
        cook2: 'Положи в блендер очищенную и нарезанную половинку банана и клубнику 2 ягоды. Налей лимонный сок 15 мл, гренадин 10 мл, клубничный сироп 10 мл и персиковый сок 150 мл. Добавь в блендер совок дробленого льда и взбей. Перелей в хайбол. Укрась кружком банана и половинкой клубники на коктейльной шпажке'
 }
   addValue(key,value){
       this.key = key;
       this.obj[key] = value;

      return console.log(this.obj)
    }
    getValue(value){
        if(value == Object.keys(this.obj)[0]){
            return console.log(this.obj.alc1)
        }
        if(value == Object.keys(this.obj)[1])
        {
            return console.log(this.obj.res1)
        }
        if(value == Object.keys(this.obj)[2])
        {
            return console.log(this.obj.cook1)
        }

    }
    deleteValue(value){
        delete this.obj[value]
        this.res = value ? true:false;
        return console.log(this.res)
    }
    getKeys(){
            return console.log(Object.keys(this.obj))
    }
  }
  let HashStorage1 = new HashStorage();
  HashStorage1.getValue('age');
  HashStorage1.addValue('bb','3');
  HashStorage1.deleteValue('names');
  HashStorage1.getKeys();

  let coctailsStorage = {
      Margarita: 'Алкогольный?'+HashStorage1.obj.alc1+'Ингредиенты: ' + HashStorage1.obj.res1+'Рецепт: '+HashStorage1.obj.cook1,
      Pelican: 'Алкогольный?'+HashStorage1.obj.alc1+'Ингредиенты: '+ HashStorage1.obj.res2+'Рецепт: '+HashStorage1.obj.cook2
  }
  coctailsStorage.__proto__ = HashStorage1.obj
console.log(coctailsStorage)