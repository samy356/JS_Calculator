// Basic calculator function

'use strict'

function calculator(){
var num1 = Number(document.getElementById('number1').value);
var op = document.getElementById('operator').value;
var num2 = Number(document.getElementById('number2').value);

console.log(num1, num2);
var r;
if (op == '+')
    r =(num1+num2);
if (op == '-')
    r =(num1-num2);
if (op == 'x')
    r =(num1*num2);
if (op== '/')
    r =(num1/num2);
console.log(r);
document.getElementById('result').innerText= r;
}