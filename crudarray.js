//CRUD PERFORM BY USING ARRAY OBJECT 

// 1. PUSH METHOD .push() ==>

// const food = ["roti","dal","sabji","ghud"]

// const count=food.push("pani","chach","dhai","mirchi")
// console.log(count)

// food.push("pani","chach","dhai","mirchi")
// console.log(food)

// ----> use push()method + count method ☝️

// 2.use unshift() method to add element for side 0 index 

// const food = ["roti","dal","sabji","ghud"]
// food.unshift("pani","chach","dhai","mirchi")
// console.log(food)

// ----> string + num both are add in single array!
// const num = [1,2,3,4,5]
// num.unshift("pani","chach","dhai","mirchi")
// console.log(num)

// ---> only num is add or not 
// const num = [1,2,3,4,5]
// num.unshift(9,8,7,6,)
// console.log(num)

//3. use .pop() removal the element in array from back side last element 😰
// lenght of a string is reduced

//  const subjects = ["maths","english","hindi","science","bio","chemistry"]
//  console.log(subjects);
//  console.log(subjects.pop());
//  console.log(subjects)


// 4.use .shift() removal the element in array from for side first element 😰
// lenght of a string is reduced

//  const subjects = ["maths","english","hindi","science","bio","chemistry"]
//  console.log(subjects);
//  console.log(subjects.shift());
//  console.log(subjects)


//  USE SPLICE METHOD .splice() ITS  WORK ALL METHOD FOR SINGLY  
// PERFORM ALL METHODS 
// ----> .spice(Start: Index-num , Delete : Index-num , Add : "String")


// 1. add Dec AT the end of the array ?

// let months = ["jan","feb", "march","april", "june","july"]
//  const newaddMonths = months.splice(months.length,0,"Dec")
//  console.log(months)

//  2. what is the return value of splice method?
 
// console.log(newMonths);
// its give empty Array

//3. updatee march to MARCH ?
//   const updateMonths = months.splice(2,2,"MARCH")
//   console.log(months)

//❌//4. Delete june from an array?
// const deleteMonths= months.splice(4,4)
// console.log(months)
// let months = ["jan","feb", "march","april", "june","july"]
// const indexOfmonths = months.indexOf("june")

// if(indexOfmonths != -1){
//     const deleteMonths= months.splice(indexOfmonths,1)
// console.log(months)
// }else{
//     console.log("pls valid data put")
// }

// best programe for CRUD  elements use indexOf()
//💡❤️

// let months = ["jan","feb", "march","april", "june","july"]
// const indexOfmonths = months.indexOf("june")

// if(indexOfmonths != -1){
//     const updateMonths= months.splice(indexOfmonths,1,"NOV")
// console.log(months)
// }else{
//     console.log("pls valid data put")
// }

