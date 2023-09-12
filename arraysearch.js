// backward seraching is LastindexOf()
// forward searching is indexOf()
// give Boolean value true / false  is use includes() its also forward serach 

//1. use indexOf()
// let num = ["jai","dhwani","shyam","divyanshu","tailor"];
// console.log(num.indexOf("jai",0))


//2. use lastindexOf()
// let num = ["mayank","dhwani","shyam","divyanshu","tailor"]
// console.log(num.lastIndexOf('mayank'))

// //3. includes() boolean value true / fasle
// let num = ["mayank","dhwani","shyam","divyanshu","tailor"]
// console.log(num.includes('tailor',4))

var price = [100, 200, 250, 255, 120, 450, 400, 555, 65];

// use find(); output give only single element 
console.log(price.find((currVal) => currVal < 400))

// GIVE ONLY INDEX VALUE findIndex()
console.log(price.findIndex((currVal) => currVal < 400))

//USE filter();
console.log(price.filter((currVal) => currVal < 400))

