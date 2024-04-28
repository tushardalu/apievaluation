const BASE_URL = 'https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees';
let currentPage = 1;
let departmentFilter = '';
let genderFilter = '';
let sortOrder = '';


const employees = [
  { id: 1, name: 'Benson Yoell', gender: 'Male', department: 'HR', salary: 25000},
  { id: 2, name: 'Jane Smith', gender: 'Female', department: 'Marketing', salary: 25000 },
  { id: 3, name: 'Claudia Vasyukhin', gender: 'Male', department: 'Engineering', salary: 25000 },
  { id: 4, name: 'Brynn Wildblood', gender: 'Female', department: 'Finance', salary: 27000 },
  { id: 5, name: 'Elli Godlip', gender: 'Male', department: 'Operations', salary: 27000 },
  { id: 6, name: 'Rina Nasey', gender: 'Female', department: 'HR', salary: 27000 },
  { id: 7, name: 'Tobi Pizer', gender: 'Male', department: 'Marketing', salary: 30000 },
  { id: 8, name: 'llyssa Staning', gender: 'Female', department: 'Engineering', salary: 35000 },
  { id: 9, name: 'Monty Meers', gender: 'Male', department: 'Finance', salary: 35000 },
  { id: 10, name: 'Courtenay Risborough', gender: 'Female', department: 'Operations', salary: 35000 }
];


function fetchEmployees() {
 
  const startIndex = (currentPage - 1) * 10;
  const endIndex = Math.min(startIndex + 10, employees.length);
  const slicedEmployees = employees.slice(startIndex, endIndex);
  displayEmployees(slicedEmployees);
  updatePaginationButtons();
}


function displayEmployees(employees) {
  const employeeList = document.getElementById('employee-list');
  employeeList.innerHTML = '';
  employees.forEach((employee, index) => {
    const row = `<tr>
                  <td>${index + 1}</td>
                  <td>${employee.name}</td>
                  <td>${employee.gender}</td>
                  <td>${employee.department}</td>
                  <td>${employee.salary}</td>
                </tr>`;
    employeeList.innerHTML += row;
  });
}


function updatePaginationButtons() {
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage * 10 >= employees.length;
}


document.getElementById('department-filter').addEventListener('change', function() {
  departmentFilter = this.value;
  currentPage = 1;
  fetchEmployees();
});

document.getElementById('gender-filter').addEventListener('change', function() {
  genderFilter = this.value;
  currentPage = 1;
  fetchEmployees();
});

document.getElementById('sort-order').addEventListener('change', function() {
  sortOrder = this.value;
  currentPage = 1;
  fetchEmployees();
});


document.getElementById('prev-btn').addEventListener('click', function() {
  if (currentPage > 1) {
    currentPage--;
    fetchEmployees();
  }
});

document.getElementById('next-btn').addEventListener('click', function() {
  if (currentPage * 10 < employees.length) {
    currentPage++;
    fetchEmployees();
  }
});


fetchEmployees();