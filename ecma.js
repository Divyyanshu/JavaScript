//1. var vs const vs var 

// var = function scope 
// let & const = blockscope

// function bioData(){
// const myName = "Divyanshu"
// console.log(myName);

// if(true){
//     var myFirstname = "tailor"
//     console.log("i am " + myFirstname);
//     console.log("i am " + myName);
// }
//     console.log("i am out " + myFirstname);
// }

// bioData();


//2. templete litrals use // strings  ECMA 6

// for(var num = 1 ; num <= 10; num++){
//     var tableof = 12;
//     console.log(`${tableof} * ${num} = ${tableof*num}`)
// }



//4. default assign value  // DEFAULT ARGUMENT < MAIN ARGUMENT (priority existing here!)

// function multi(a,b=5)
// {
//  return a*b
// }
// console.log(multi(3));


//5. Flat Arrow Function replace traditional normal functions 



// function sum(){
//     let a = 10, b = 5;
//     let sum =  a+b;
//     return `the sum of two no is ${sum}`
// }

// final flat arrow program beacuse return islyie hatyia kyu ki single line code the statement the !

// var sum = () => `the sum of two no is ${(a=10)+(b=5)}`

// console.log(sum())

let sum = () =>`sum is ${(a=12)-(b=3)}`
console.log(sum());