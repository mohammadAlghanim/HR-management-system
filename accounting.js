'use strict';
let acc = [];
function getempolyees(){
  let arrJ =localStorage.getItem("employees");
  if(arrJ !== null){
    acc = JSON.parse(arrJ);
  }
}

getempolyees();

function sumSalery(arr){
  let sum=0;
  arr.forEach((e) => {
    sum += e.salery; 
    
  });
  return sum;
}

function avgSalery (arr){
  return Math.floor(sumSalery(arr) !== 0 ? sumSalery(arr) / arr.length : 0);
}

function render(){
  const first = document.getElementById("table");
  first.innerHTML= "";

  const container = document.createElement("div");
  first.appendChild(container);
  container.classList.add("container");

  const table =document.createElement("table");
  container.appendChild(table);
  table.setAttribute("border","4");
  table.setAttribute("width","200px");

  
 const headerR =document.createElement("tr");
 table.appendChild(headerR);
 headerR.classList.add("tableHeader");

 const th1= document.createElement("th");
 headerR.appendChild(th1);
 th1.textContent= "Department";

 const th2= document.createElement("th");
 headerR.appendChild(th2);
 th2.textContent= "Number of employees";

 const th3= document.createElement("th");
 headerR.appendChild(th3);
 th3.textContent= "Average salary";

 const th4= document.createElement("th");
 headerR.appendChild(th4);
 th4.textContent= "Total salery";
/********************* ********/
const secondeR =document.createElement("tr");
table.appendChild(secondeR);

const td1 = document.createElement("td");
secondeR.appendChild(td1);
td1.textContent= "Administration";

let admin = acc.filter((e) => e.department === "Administration");

const td2 = document.createElement("td");
secondeR.appendChild(td2);
td2.textContent= admin.length;

const td3 = document.createElement("td");
secondeR.appendChild(td3);
td3.textContent= avgSalery(admin);

const td4 = document.createElement("td");
secondeR.appendChild(td4);
td4.textContent= sumSalery(admin);
/********** ********/

const theerdR =document.createElement("tr");
table.appendChild(theerdR);

const td11 = document.createElement("td");
theerdR.appendChild(td11);
td11.textContent= "Marketing";

let admin1 = acc.filter((e) => e.department === "Marketing");

const td12 = document.createElement("td");
theerdR.appendChild(td12);
td12.textContent= admin1.length;

const td13 = document.createElement("td");
theerdR.appendChild(td13);
td13.textContent= avgSalery(admin1);

const td14 = document.createElement("td");
theerdR.appendChild(td14);
td14.textContent= sumSalery(admin1);
/******* ***********/
const four =document.createElement("tr");
table.appendChild(four);

const td112 = document.createElement("td");
four.appendChild(td112);
td112.textContent= "Development";

let admin12 = acc.filter((e) => e.department === "Development");

const td122 = document.createElement("td");
four.appendChild(td122);
td122.textContent= admin12.length;

const td133 = document.createElement("td");
four.appendChild(td133);
td133.textContent= avgSalery(admin12);

const td144 = document.createElement("td");
four.appendChild(td144);
td144.textContent= sumSalery(admin12);
/***************** **************/
 
const five =document.createElement("tr");
table.appendChild(five);

const td1122 = document.createElement("td");
five.appendChild(td1122);
td1122.textContent= "Finance";

let admin123 = acc.filter((e) => e.department === "Finance");

const td1222 = document.createElement("td");
five.appendChild(td1222);
td1222.textContent= admin123.length;

const td1333 = document.createElement("td");
five.appendChild(td1333);
td1333.textContent= avgSalery(admin123);

const td1444 = document.createElement("td");
five.appendChild(td1444);
td1444.textContent= sumSalery(admin123);

 

}




render();

