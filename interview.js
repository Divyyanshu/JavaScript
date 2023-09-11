// interview question 
// 1. diff betwwwn null vs undefined ?

  var iamUseless = null;
  console.log(iamUseless)
  console.log(typeof(iamUseless))

//    javascript bug 2 give "object" datatype


  var iamUse = 4;
  console.log(iamUse)
  console.log(typeof(iamUse))

// .2 NaN Is What ?
// two strings subration time output is gave  NaN
// NaN Is property of the global object.
// in other words , its is a variable in global scope .

 var phoneNumber = 9414441576;
 var myName = "divaynshu"; 
 console.log(isNaN(phoneNumber));
 console.log(isNaN(myName));
 if(isNaN(myName)){
    console.log('pls enter vaild phone number')
 }

// NOT A NUMBER 
// 1.NaN === NaN
console.log(NaN === NaN);

//2. Number.NaN === NaN
console.log(Number.NaN === NaN)

// 3. isNaN(NaN)
console.log(isNaN(NaN))

// 4. isNaN(Number.NaN)
console.log(isNaN(Number.NaN))

// 5. Number.isNaN(NaN)
console.log(Number.isNaN(NaN))