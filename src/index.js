module.exports = function getZerosCount(number, base) {
  // your implementation
  let zeros=0;
  let zerosBase=0;
  let zerosTwo=0;
  let doubledBase = 1;
  let doubledTwo=0;
  let i=2;
  let currentBase = searchBase(base);
  factorial (number);


  function zerosOfBase (num,curBase) {
      if (num>=curBase) {
        return 	parseInt(num/curBase)+zerosOfBase(parseInt(num/curBase),curBase);
      }
      else {
          return 0;
      }
  }

  function searchBase (base) {
    if (base<=i+1) {
        if (base%2===0) {
            doubledTwo++;
        }
      return base;
  }
      if (base%2===0) {
         doubledTwo++;
          return searchBase(base/2);
      }
      else if(base%(i+1)===0) {
          doubledBase++;
      return searchBase(base/(i+1));;
      }
      else {
        i++;
        doubledBase=1;
        return searchBase(base);
      }
  }

  function factorial (num) {
      zerosBase+=zerosOfBase(num,currentBase);
      zerosTwo+=zerosOfBase(num,2);
}
  
if (doubledTwo===0) {
    doubledTwo++;
}
  zeros=Math.min(parseInt(zerosBase/doubledBase,10),parseInt(zerosTwo/doubledTwo,10));
  return zeros;
}