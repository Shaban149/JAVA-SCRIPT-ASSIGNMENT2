Question No 1 
let a = 10 ;
document.write("Result" ); 
document.write("<br>");
document.write("<br>");
document.write("The value of a is :" , a);
document.write("<br>");
document.write("________");
document.write("<br>");
document.write("<br>");
document.write("<br>");
++ a ;  //Unary operator pre increment 
document.write("The value of ++a is:" , a);
document.write("<br>");
document.write("Now the value of a is:" , a);
document.write("<br>");
document.write("<br>");
//Unary operator post increment 
document.write("The value of a ++ is :"  , a++); 
document.write("<br>");
document.write("Now the value of a is :" , a ++);
document.write("<br>");
document.write("<br>");
-- a ; //Unary operator pre decrement
document.write("The value of --a is:" , a);
document.write("<br>");
document.write("Now the value of a is :" , --a);
document.write("<br>");
document.write("<br>");
//Unary operator post decrement 
document.write("The value of a-- is:" , a--);
document.write("<br>");
document.write("Now the value of a is: " , a--);

Question No 2 
let a = 2;
let b = 1;
document.write("a is : = 2");
document.write("<br>");
document.write("b is : = 1");
document.write("<br>");
document.write("<br>");

console.log("--a is:", --a);
console.log("--a - --b is:" , --a - --b);
console.log("--a - --b + ++b" , --a - --b + ++b );
console.log("--a - --b + ++b + b--" , --a - --b + ++b + b-- );
document.write("Result is : 3"); 

Question No 3 
let userNmae;
userName = prompt("Please Enter your User Name");
alert("Welcome to our Website");

Question No 4 
let num = prompt("Enter any number") || 5;
{
    console.log(num , " * 1  =" , num * 1);
    console.log(num , " * 2  =" , num * 2);
    console.log(num , " * 3  =" , num * 3);
    console.log(num , " * 4  =" , num * 4);
    console.log(num , " * 5  =" , num * 5);
    console.log(num , " * 6  =" , num * 6);
    console.log(num , " * 7  =" , num * 7);
    console.log(num , " * 8  =" , num * 8);
    console.log(num , " * 9  =" , num * 9);
    console.log(num , " * 10 =" , num * 10);
} 

Question No 5 
let subject1 = prompt ("Enter Your Subject");
let subject2 = prompt ("Enter Your Subject");
let subject3 = prompt ("Enter Your Subject");
let totalMarks1 = 100 ;
let totalMarks2 = 100 ;
let totalMarks3 = 100 ;
let obtainedMarks1 = 86 ;
let obtainedMarks2 = parseInt( prompt("Enter Your Number "));
let obtainedMarks3 = parseInt( prompt("Enter Your Number "));
let per1 = obtainedMarks1 * 100 / 100 ;
let per2 = obtainedMarks2 * 100 / 100 ;
let per3 = obtainedMarks3 * 100 / 100 ;
let obTotal = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
let percentage = obTotal * 100 / 300 ;

document.write(`
  <table border="1">
    <tr>
      <th>Subject</th>
      <th>Total Marks</th>
      <th>Obtained Marks</th>
      <th> Percentage </th>
    </tr>
    <tr>
      <td>${subject1}</td>
      <td>${totalMarks1}</td>
      <td>${obtainedMarks1}</td>
      <td>${per1}%</td>
    </tr>
    <tr>
      <td>${subject2}</td>
      <td>${totalMarks2}</td>
      <td>${obtainedMarks2}</td>
      <td>${per2}%</td>
    </tr>
    <tr>
      <td>${subject3}</td>
      <td>${totalMarks3}</td>
      <td>${obtainedMarks3}</td>
      <td>${per3}%</td>
    </tr>
    <tr>
      <td></td>
      <td>${totalMarks1 * 3}</td>
      <td>${obTotal}</td>
      <td>${percentage}%</td>
    </tr>
  </table>
  <br>
`); */