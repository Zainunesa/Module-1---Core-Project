// Dummy data for performance reviews
const performanceData = [
  {
    name: "Sibongile Nkosi",
    position: "Software Engineer",
    score: 85,
    comments: "Consistent performer",
  },
  {
    name: "Lungile Moyo",
    position: "HR Manager",
    score: 78,
    comments: "Improved significantly",
  },
  {
    name: "Thabo Molefe",
    position: "Quality Analyst",
    score: 92,
    comments: "Outstanding leadership",
  },
  {
    name: "Keshav Naidoo",
    position: "Sales Representative",
    score: 88,
    comments: "Creative designs",
  },
  {
    name: "Zanele Khumalo",
    position: "UI/UX Designer",
    score: 85,
    comments: "Consistent performer",
  },
  {
    name: "Sipho Zulu",
    position: "QA Tester",
    score: 78,
    comments: "Improved significantly",
  },
  {
    name: "Naledi Moeketsi",
    position: "DevOps Engineer",
    score: 92,
    comments: "Outstanding leadership",
  },
  {
    name: "Farai Gumbo",
    position: "Content Strategist",
    score: 88,
    comments: "Creative designs",
  },
  {
    name: "Karabo Dlamini",
    position: "Accountant",
    score: 85,
    comments: "Consistent performer",
  },
  {
    name: "Fatima Patel",
    position: "Customer Support Lead",
    score: 78,
    comments: "Improved significantly",
  },
];

// THIS IS OPTIONAL -THINK ABOUT IT
// Function to add rows to the performance table
function populateTable() {
  const urlParams = new URLSearchParams(window.location.search);

  // Access specific query parameters by their key
  const paramValue = urlParams.get("employeeId");

  // Get the <tbody> part of the table
  const tableBody = document.querySelector("#performance-table tbody");

  // Get the current employee's data
  const employee = performanceData[paramValue - 1];

  // Create a new row (<tr>)
  const row = document.createElement("tr");

  // Add table cells (<td>) for each piece of data
  const nameCell = document.createElement("td");
  nameCell.textContent = employee.name;

  const positionCell = document.createElement("td");
  positionCell.textContent = employee.position;

  const scoreCell = document.createElement("td");
  scoreCell.textContent = employee.score;

  const commentsCell = document.createElement("td");
  commentsCell.textContent = employee.comments;

  // Add all the cells to the row
  row.appendChild(nameCell);
  row.appendChild(positionCell);
  row.appendChild(scoreCell);
  row.appendChild(commentsCell);

  // Add the row to the table
  tableBody.appendChild(row);
}

// Call the function to populate the table when the page loads
populateTable();
