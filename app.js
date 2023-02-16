'use strict';
let employees = JSON.parse(localStorage.getItem("employees")) || [];
class Employee {
  constructor(fullName, department, level, imageUrl, id) {
    this.fullName = fullName;
    this.department = department;
    this.level = level.toLowerCase();
    this.imageUrl = imageUrl;
    this.id = id;
    this.salery = 0;
    employees.push(this);
  }
    salary1(){
      switch (this.level) {
        case "junior":
          this.salery = Math.floor(Math.random() * (1000 - 500+1)) + 500;
          break;
        case "mid-senior":
          this.salery = Math.floor(Math.random() * (1500 - 1000+1)) + 1000;
          break;
        case "senior":
          this.salery = Math.floor(Math.random() * (2000 - 1500+1)) + 1500;
          break;
        default:
          break;
      }
      return this.salery;
    }
  
}

// Render prototype function
function render() {
  const container = document.getElementById("employeeContainer");
  container.innerHTML = '';

  for (let i = 0; i < employees.length; i++) {
    const card = document.createElement("div");
    card.classList.add("employee-card");
    container.appendChild(card);

    const image = document.createElement("img");
    image.src = employees[i].imageUrl;
    image.alt = `src,${employees[i].fullName}'s photo`;
    card.appendChild(image);

    const name = document.createElement("h4");
    name.textContent = employees[i].fullName;
    card.appendChild(name);

    const department = document.createElement("p");
    department.textContent = `Department: ${employees[i].department}`;
    card.appendChild(department);

    const level = document.createElement("p");
    level.textContent = `Level: ${employees[i].level}`;
    card.appendChild(level);

    const id = document.createElement("p");
    id.textContent = `ID: ${employees[i].id}`;
    card.appendChild(id);

    const salery= document.createElement("p");
    salery.textContent = `salery ${employees[i].salery}$`;
    card.appendChild(salery);

  }



  
}

function generateEmployeeId() {
  return Math.floor(1000 + Math.random() * 9000);
}

let form = document.getElementById("employeeForm");
form.addEventListener('submit', newHE);
function newHE(event) {
  event.preventDefault();
  const fullName = event.target.fullName.value;
  const department = event.target.department.value;
  const level = event.target.level.value;
  const imageUrl = event.target.imageUrl.value;
  const id = generateEmployeeId();

  const employee = new Employee(fullName, department, level, imageUrl, id);
  employee.salary1();
  localStorage.setItem("employees", JSON.stringify(employees));
  render();
}

render();