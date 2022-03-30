"use strict"
function egg(){
    let firstName = "ola";
    let age = 28;
    console.log(firstName + " is " + age)
}
egg();

const birthYear = 2030;
const Basit = birthYear - 1991;
const ola = birthYear - 2000;
console.log(Basit +`\n`+ ola)


console.log(`my name is \n\ taofeeq`)

function calTips(bill){
    if (bill >= 50 && bill <=300){
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
} 
const bills = [125, 555, 44]

const tips = [calTips(bills[0]), calTips(bills[1]), calTips(bills[2])];
console.log(tips)

const total = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2]) ];
console.log(total)