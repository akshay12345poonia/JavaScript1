let numVal = 50;
let strVal = "42";

let res = numVal + Number(strVal);
if(res > 100){
    console.log("The Result is Greater than 100");
}
else {
    console.log("The Result is Less than or Equal to 100");
}
console.log("Result of Addition", res);