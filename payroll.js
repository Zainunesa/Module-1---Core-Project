let payrollData = [];
let employeeInfo = [];
let dataLoaded = false;

// Payroll data will load from JSON file
fetch("payroll_data.json")
  // Converts the data into a format that JavaScript can use
  .then((response) => response.json())
  .then((data) => {
    payrollData = data.payrollData;
    checkDataLoaded();
    console.log("Payroll Data:", payrollData);
    displayPayrollData(data.payrollData);
  })
  .catch((error) => console.error("Error loading data", error));

fetch("employee_info.json")
  .then((response) => response.json())
  .then((data) => {
    employeeInfo = data.employeeInformation;
    checkDataLoaded();
    console.log("Employee Info:", employeeInfo);
    displayPayrollData(payrollData);
  })
  .catch((error) =>
    console.error("Error loading employee information:", error)
  );

function checkDataLoaded() {
  if (payrollData.length && employeeInfo.length) {
    dataLoaded = true;
    displayPayrollData(payrollData); // Only display once both datasets are loaded
  }
}

// Function to display the payroll data in table format
function displayPayrollData(payrollData) {
  // Select the table body of the table

  const tableBody = document.querySelector("#payrollTable tbody");
  tableBody.innerHTML = "";

  // Loop through the payroll data and create table rows

  payrollData.forEach((employeePayroll) => {
    const employeeDetails = employeeInfo.find(
      (employee) => employee.employeeId === employeePayroll.employeeId
    );

    console.log(
      `Looking for employeeId ${employeePayroll.employeeId}`,
      employeeDetails
    );

    // Create table row for each employee
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${employeePayroll.employeeId}</td>
            <td>${employeeDetails ? employeeDetails.name : "N/A"}</td>
            <td><input type="number"  value="${
              employeePayroll.hoursWorked
            }" data-id="${employeePayroll.employeeId}" class="hours"></td>
            <td><input type="number" value="${
              employeePayroll.leaveDeductions
            }" data-id="${employeePayroll.employeeId}" class="deductions"></td>
            <td id="salary-${employeePayroll.employeeId}">R ${
      employeePayroll.finalSalary
    }</td>
            <td><button onclick="generatePayslip(${
              employeePayroll.employeeId
            })">Generate Payslip</button></td>
        `;
    // Append the new row to the table body
    tableBody.appendChild(row);
  });
  // Attach event listeners to inputs for hours worked and leave deductions
  attachEventListeners(payrollData);
}

// Event listeners that detects changes in the inputs
function attachEventListeners(payrollData) {
  const hoursInputs = document.querySelectorAll(".hours");
  const deductionsInputs = document.querySelectorAll(".deductions");

  // Attach an event listener to each hours input to detect when the value has changed
  hoursInputs.forEach((input) => {
    input.addEventListener("change", () =>
      updateSalary(input, payrollData, "hoursWorked")
    );
  });

  // Attach an event listener to each deductions input to detect when the value has changed
  deductionsInputs.forEach((input) => {
    input.addEventListener("change", () =>
      updateSalary(input, payrollData, "leaveDeductions")
    );
  });
}

// updateSalary function updates the relevant data annd recalculates the salary
function updateSalary(input, payrollData, field) {
  const employeeId = parseInt(input.getAttribute("data-id"));
  const newValue = Math.max(parseInt(input.value) || 0, 0);

  // Find the employee in the payroll data
  const employee = payrollData.find(
    (employee) => employee.employeeId === employeeId
  );

  // Check if the leave deductions doesn't exceed hours worked
  if (field === "leaveDeductions" && newValue > employee.hoursWorked) {
    // If deductions exceeds hours worked an alert will pop up and revert the values back to the original
    alert("Leave deductions cannot exceed hours worked.");
    input.value = employee.leaveDeductions;
    return;
  }
  // Update either hoursWorked or leaveDeductions field with the new values
  employee[field] = newValue;

  // Recalculate the final salary based on the updated field values
  const newSalary = calculateFinalSalary(
    employee.hoursWorked,
    employee.leaveDeductions
  );
  employee.finalSalary = newSalary;

  // Update the displayed salary in the table for the corresponding employee
  document.getElementById(`salary-${employeeId}`).innerText = newSalary;
}

const hourlyRate = 500;

// Function to calculate the final salary
function calculateFinalSalary(hoursWorked, leaveDeductions) {
  // Makes sure the salary is never a negative
  return Math.max((hoursWorked - leaveDeductions) * hourlyRate, 0);
}

function generatePayslip(employeeId) {
  const employeePayroll = payrollData.find(
    (employee) => employee.employeeId === employeeId
  );
  const employeeDetails = employeeInfo.find(
    (info) => info.employeeId === employeeId
  );

  if (!employeePayroll || !employeeDetails) {
    alert("Employee not found");
    return;
  }

  const payslipWindow = window.open("", "_blank");
  payslipWindow.document.write(`
        <html>
        <head>
            <title>Payslip for Employee ${employeeDetails.name}</title>
            <style>
                body {
                    font-family: 'Roboto', sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #000000;
                    color: #FFFFFF;
                    text-align: center;
                }
                table {
                    width: 60%;
                    margin: 20px auto;
                    border-collapse: collapse;
                    background-color: #040046;
                    color: #FFFFFF;
                    border-radius: 10px;
                    overflow: hidden;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.6);
                }
                th, td {
                    padding: 15px;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    text-align: center;
                }
                th {
                    background-color: #3333FF;
                    text-transform: uppercase;
                    font-size: 1.2rem;
                }
                td {
                    background-color: rgba(255, 255, 255, 0.1);
                    font-size: 1rem;
                }
                h1 {
                    font-size: 2rem;
                    color: #FFFFFF;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
                }
                p {
                    margin: 10px;
                    font-size: 1rem;
                    color: #CCCCCC;
                }
                @media (max-width: 768px) {
                    table {
                        width: 90%;
                    }
                    th, td {
                        font-size: 0.9rem;
                        padding: 10px;
                    }
                    h1 {
                        font-size: 1.5rem;
                    }
                }
            </style>
        </head>
        <body>
            <h1>Payslip</h1>
            <table>
                <tr>
                    <th>Employee Name:</th>
                    <td>${employeeDetails.name}</td>
                </tr>
                <tr>
                    <th>Job Position:</th>
                    <td>${employeeDetails.position}</td>
                </tr>
                <tr>
                    <th>Employee ID:</th>
                    <td>${employeePayroll.employeeId}</td>
                </tr>
                <tr>
                    <th>Hours Worked</th>
                    <td>${employeePayroll.hoursWorked}</td>
                </tr>
                <tr>
                    <th>Leave Deductions</th>
                    <td>${employeePayroll.leaveDeductions}</td>
                </tr>
                <tr>
                    <th>Final Salary (R)</th>
                    <td>${employeePayroll.finalSalary.toFixed(2)}</td>
                </tr>
            </table>
            <p>Generated on: ${new Date().toLocaleDateString()}</p>
        </body>
        </html>
    `);
  payslipWindow.document.close();
}
