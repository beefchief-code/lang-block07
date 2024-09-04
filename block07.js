/*
pseudocode

1.  create html to call JS
2.  const to initialize first variable 10: first=5*2
3.  const for second variable 40: second=80/2
4.  const for third variable 39: third=second-1
5.  print to html page: document.write() ["your combination is " + v1 + "-" + v2 + "-" + v3]
6.  ???
7.  profit
*/

//name function to call in html
function safeCombo (){

//initialize variables
const first = 5*2;
const second = 80/2;
const third = second - 1;

//display combo in console
console.log(first)
console.log(second)
console.log(third)

//display combo on webpage
document.write("Your combination is " + first + "-" + second + "-" + third);
}