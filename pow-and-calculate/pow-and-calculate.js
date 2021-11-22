function culc(f) {
    return function(a) {
      return function(b) {
          return function(c){
        return f(a, b, c);
      };
    };
  };
  }
  function res(a, b, c) {
      if(b==="+"){
        res1 = a+c
      }
      if(b==='-'){
        res1 = a-c
      }
      if(b==='*'){
        res1 = a*c
      }
      if(b==='/'){
        res1 = a/c
      }
    return a+b+c+"="+res1;
  }
  function pow(carring)
  {
    return function(a1)
    {
    return function(a2)
        {
        return carring(a1,a2)
        }
    }
  }
  function degree(a1, a2) {
    if (a2 == 1) {
    return a1+"^"+a2+"="+a1;
    }
    if(a2 == 0){
    return a1+"^"+a2+"="+1;
    }
    else {
    return a1+"^"+a2+"="+a1 * pow1(a1, a2 - 1);
    }
  }
  let powe = pow(degree)
  let calculate = culc(res);
  alert(calculate(2)("/")(2));
  alert(powe(2)(0));