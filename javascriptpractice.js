// lecture 1 Introduction
// console.log("I am starting JavaScript");
// lecture 2 variables
// js is dynamic programming language as we can change variable types on runtime
// Lecture 3 let vs const vs var
// lec 4 Primitives and Objects in JavaScript
// nn bb ss u primitives in js
// let a= null
// let b= 435
// let c=true;  //it can be false as well (boolean)
// let d=BigInt(0089)
// let e="Muhammad Haseeb Sharif"
// let f= Symbol( "* is a nice symbol")
// let g=undefined
// console.log(a,b,c,d,e,f,g) 
// objects in js 
// objects are key value pairs
// const me={
//     "haseeb":true,
//     "Income" : '1000000'


// }
// console.log(me);
// Chapter 1 Practice Set 
// q1
// let namee="haseeb";
// console.log(namee);
// namee = 67;
// console.log(namee);
// q2
// console.log(typeof namee)
// q3
// const me =
// {
//     Name:"Muhammad Haseeb Sharif",
//     Profession:"MERN STACK DEVELOPER AT CONTOUR LAHORE",
//     Salary:100000 ,




// }

// me['Age']=24;
// me['Salary']=120000;
// console.log(me); 
// console.log(me.Name)
// const me =45; (We cannot redeclare or change const value)
// chapter 1 completed 
// lec 6 JavaScript Operators and Expressions 
// chapter 2 pracrice set
// let age = prompt("Enter Your Age");
// age= Number.parseInt(age);
// if(age>10 && age<20)
//       {
//          alert("Your age lies btw 10 & 20") 
//       }
// else
// {
//     alert("Not lies");
// }
// let age = prompt("Enter age");
// age = Number.parseInt(age);
// switch(age){
// case 24:
//     alert("It's Muhammad Haseeb Age")
// break;    
// case 25:
//     alert("It's Muhammad Haseeb Age next year")
// }
// let num = prompt("Enter number");
// num = Number.parseInt(num);
// if(num%2==0 && num%3==0)
// {
//     alert("Number is divisible by 2 and 3")

// }
// else{
//     alert("Number is not divisible by 2 and 3")
// }
// Loops
// let a =0;
// for(let b=0;b<10;b++)
// // {
//     console.log(b)
// }
// let marks= {
//     haseeb:90,
//     usama:91,
//     horairah:93
// }
// for(let a in marks)
// {
//     console.log("marks of" +a +"is"  +marks[a])
// }
// let Mmarks=prompt("Enter Matric Marks");
// Mmarks=Number.parseInt(Mmarks);
// let Imarks=prompt("Enter Inter Marks");
// Imarks=Number.parseInt(Imarks);
// let Nmarks=prompt("Enter Nts Marks");
// Nmarks=Number.parseInt(Nmarks);
// let aggrigate=Mmarks/1100*10 + Imarks/1100*40 +Nmarks/100*50;
// if(aggrigate>80)
// {
//     alert("Your Aggrigate is :: " +aggrigate + "And your chances of Admission in CS Dept is High");
// }
// else if(aggrigate>70)
// {
//     alert("Your Aggrigate is :: " +aggrigate + "And your chances of Admission in CS Dept is Medium");
// }
// else{

//     alert("Your Aggrigate is :: " +aggrigate + "And your chances of Admission in CS Dept is Low");
// }
// let nn=prompt("enter a number")
// n=Number.parseInt(nn);
// let cn = 786

//     while(cn != n)
//     {prompt("enter a number again as number is incorrect")}
// alert("Correct Number")    
// const mean = (n1,n2,n3,n4) =>{
//     return ans= (n1+n2+n3+n4)/4;
    
    
// }
// mean(23,53,53,22);
// console.log(ans)
// chapter 4 Strings
// let myname="Muhammad Haseeb"
// let myfriend="usama"
// console.log(myfriend + "is a best friend of" +myname)
// let myname="Muhammad Haseeb"
// let myfriend="usama"
// console.log(myfriend.toUpperCase())
let namee= "muhammadhaseeb"
for(let a =0; a<namee.length;a++)
{
    console.log(namee[a])
}






