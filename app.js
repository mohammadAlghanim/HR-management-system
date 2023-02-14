'use strict';
class Employee {
  constructor(fullName, department, level, imageUrl, id) {
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.id = id;
  }

  // Render prototype function
  render() {
    const container = document.getElementById("employeeContainer");
    
    const card = document.createElement("div");
    card.classList.add("employee-card");
    container.appendChild(card);
    

    const image = document.createElement("img");
    image.src = this.imageUrl;
    image.alt = `src,${this.fullName}'s photo`;
    card.appendChild(image);

    const name = document.createElement("h4");
    name.textContent = this.fullName;
    card.appendChild(name);

    const department = document.createElement("p");
    department.textContent = `Department: ${this.department}`;
    card.appendChild(department);

    const level = document.createElement("p");
    level.textContent = `Level: ${this.level}`;
    card.appendChild(level);

    const id = document.createElement("p");
    id.textContent = `ID: ${this.id}`;
    card.appendChild(id);
  }
}

// Function for generating unique four digits employee id number
function generateEmployeeId() {
  return Math.floor(1000 + Math.random() * 9000);
}

// Event listener for getting data from form
let form = document.getElementById("employeeForm");
form.addEventListener('submit', newHE);
function newHE(event){
  event.preventDefault();
  const fullName = event.target.fullName.value;
  const department = event.target.department.value;
  const level = event.target.level.value;
  const imageUrl = event.target.imageUrl.value;
  const id = generateEmployeeId();
  
  const employee = new Employee(fullName, department, level,imageUrl, id);
  employee.render();
}