// FULL STACK WEB DEVELOPMENT DAY 3 //

// while loop //
// 1. infinite loop

// var num = 1;

// while(num <= 20){
//     console.log(num);
// }


//2. proper while loop 
// var num = 0;
// while(num <= 20){
//     console.log(num);
//     num++;
// }


//3. do-while loop 

// var num =9;
// do {
//     console.log(num)
//     num++
// }while(num<=10)
 

//🫡🫡 FOR loop 

// for(var num = 30; num<=10; num++){
//     debugger;
//     console.log(num);
// }

// table generator code 

// for (var num =1; num <= 20; num++){
//     var tableOf = 10056;
//     console.log(tableOf+ " * " + num + " = " + (tableOf*num)) 
// }

// ⚡important find even or odd number using loop 
for (var i = 0; i <= 20; i++) {
    if (i === 0) {
        console.log(i + " still even ")
    } else if (i % 2 === 0) { console.log(i + " even") }
    else{
        console.log(i + " odd")
    }

}