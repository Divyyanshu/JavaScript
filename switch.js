// else if statement create formula tringle / cirle/ rectengle etc/


//1.else if  statement //

// var area = "sqaure"
// var PI = 3.14, l = 10, b = 5, r = 2;
// if (area == "circle") {
//     console.log("area of circle is " + (PI * r ** 2))
// } else if (area == "triangle") {
//     console.log("ara of triangle is " + (l * b) / 2)
// } else if (area == "rectangle") {
//     console.log("area of rectangle is " + (l * b))
// }
// else {
//     console.log("pls enter valid value")
// }
// ----->convert<-------
//1.switch statement //

var area = "circle"
var PI = 3.14, l = 10, b = 5, r = 2;

switch (area) {
    case 'circle':
        console.log("area of circle is " + (PI * r ** 2));
        break;
    case 'rectangle':
        console.log("area of rectangle is " + (l * b));
        break;
    case 'triangle':
        console.log("ara of triangle is " + (l * b) / 2);
        break;
    default:
        console.log("pls enter valid value");
}