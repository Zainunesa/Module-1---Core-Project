// //  async function displayData() {
// //     const container = document.getElementById("data-container");

// //     try {
// //         // Fetch the JSON file
// //         const response = await fetch("EmployeeData.json");
// //         const data = await response.json();

// //         data.employeeInformation.forEach(item => {
// //             const card = document.createElement("div");
// //             card.className = "card m-2";

// //             card.innerHTML = `
// //                 <div class="card-body">
// //                     <h5 class="card-title">${item.name}</h5>
// //                     <p class="card-text">Position: ${item.position}</p>
// //                     <p class="card-text">Department: ${item.department}</p>
// //                     <p class="card-text">Salary: ${item.salary}</p>
// //                     <p class="card-text"> Employment History: ${item.employmentHistory}</p>
// //                     <p class="card-text"> Contact: ${item.contact}</p>

// //                 </div>
// //             `;
// //             container.appendChild(card);
// //         });
// //     } catch (error) {
// //         console.error("Error", error);
// //         container.innerHTML = "<p class='text-danger'>Error: Data not found.</p>";
// //     }
// // }

// // window.onload = displayData;

// // // Function to search employees by name
// //         function searchEmployee() {
// //             const result = employeeInformation.filter(employeeInformation => employeeInformation.id == searchInput);
// //             const searchTerm = document.getElementById('searchInput').value;
// //         }

// //         if (result) {
// //             document.getElementById('employeeList').innerHTML = `
// //                 <div>
// //                     <h3>${result.name}</h3>
// //                     <p>Position: ${result.position}</p>
// //                 </div>`;
// //         } else {
// //             document.getElementById('results').innerHTML = 'No employee found.';
// //         }

// //         console.log(result);

// async function displayData() {
//   const container = document.getElementById("data-container");

//   try {
//     // Fetch the JSON file
//     const response = await fetch("EmployeeData.json");
//     const data = await response.json();

//     // Display all employees initially
//     data.employeeInformation.forEach((item) => {
//       const card = document.createElement("div");
//       card.className = "card m-2";

//       card.innerHTML = `
//                     <div class="card-body">
//                         <h2 class="card-title"><strong>Name:</strong> ${item.name}</h2>
//                         <hr>
//                         <p class="card-text"><strong>Position:</strong> ${item.position}</p>
//                         <p class="card-text"><strong>Department:</strong> ${item.department}</p>
//                         <p class="card-text"><strong>Salary:</strong> R ${item.salary}</p>
//                         <p class="card-text"><strong>Employment History: </strong>${item.employmentHistory}</p>
//                         <p class="card-text"><strong>Contact:</strong> ${item.contact}</p>
//                     </div>
//                 `;
//       container.appendChild(card);
//     });

//     // Attach data to a global variable for search
//     window.employeeData = data.employeeInformation;
//   } catch (error) {
//     console.error("Error:", error);
//     container.innerHTML = "<p class='text-danger'>Error: Data not found.</p>";
//   }
// }

// async function searchEmployee() {
//   const searchInput = document.getElementById("searchInput").value.trim(); // Get search input value
//   const resultsContainer = document.getElementById("employeeList");

//   // Clear previous results
//   resultsContainer.innerHTML = "";

//   if (!searchInput) {
//     resultsContainer.innerHTML = `<p class='text-warning'>Please enter a valid employee ID to search.</p>`;
//     return;
//   }

//   // Search in the fetched employee data
//   const result = (window.employeeData || []).find(
//     (employee) => employee.employeeId.toString() === searchInput
//   );

//   if (result) {
//     resultsContainer.innerHTML = `
//                     <div class="card m-2">
//                         <div class="card-body">
//                             <h2 class="card-title"> Name: ${result.name}</h2>
//                             <hr>
//                             <p class="card-text"><strong>Position:</strong> ${result.position}</p>
//                             <p class="card-text"><strong>Department: </strong> ${result.department}</p>
//                             <p class="card-text"><strong>Salary: </strong> ${result.salary}</p>
//                             <p class="card-text"><strong>Employment History: </strong> ${result.employmentHistory}</p>
//                             <p class="card-text"><strong>Contact:</strong> ${result.contact}</p>
//                         </div>
//                     </div>
//                 `;
//   } else {
//     resultsContainer.innerHTML = `<p class='text-danger'>No employee found with ID ${searchInput}.</p>`;
//   }
// }

// window.onload = displayData;

// // function addEmployee() {
// //   // Get the new employee details from input fields
// //   const name = document.getElementById("newEmployeeName").value;
// //   const position = document.getElementById("newEmployeePosition").value;
// //   const department = document.getElementById("newEmployeeDepartment").value;
// //   const salary = document.getElementById("newEmployeeSalary").value;

// //   // Simple validation to ensure inputs are filled
// //   if (!name || !position || !department || !salary) {
// //     alert("Please fill in all the fields.");
// //     return;
// //   }

// //   // Create a new employee card
// //   const container = document.getElementById("data-container");
// //   const card = document.createElement("div");
// //   card.className = "card m-2";

// //   card.innerHTML = `
// //     <div class="card-body">
// //       <h2 class="card-title"><strong>Name:</strong> ${name}</h2>
// //       <hr>
// //       <p class="card-text"><strong>Position:</strong> ${position}</p>
// //       <p class="card-text"><strong>Department:</strong> ${department}</p>
// //       <p class="card-text"><strong>Salary:</strong> R ${salary}</p>
// //     </div>
// //   `;

// //   // Add the new card to the container
// //   container.appendChild(card);

// //   // Clear the input fields
// //   document.getElementById("newEmployeeName").value = "";
// //   document.getElementById("newEmployeePosition").value = "";
// //   document.getElementById("newEmployeeDepartment").value = "";
// //   document.getElementById("newEmployeeSalary").value = "";

// //   alert("Employee added successfully!");
// // }

// NEW VERSION (WEEKEND - CHAT GPT)
async function displayData() {
  const container = document.getElementById("data-container");

  try {
    // Fetch the JSON file
    const response = await fetch("EmployeeData.json");
    const data = await response.json();

    // Display all employees initially
    data.employeeInformation.forEach((item) => {
      const card = document.createElement("div");
      card.className = "card m-2";
      //  card m-2 is built in styling (keyword)

      card.innerHTML = `
          <div class="card-body">
              <h4 class="card-01"><strong>Name:</strong> ${item.name}</h4>
              <hr>
              <p class="card-text"><strong>Position:</strong> ${item.position}</p>
              <p class="card-text"><strong>Department:</strong> ${item.department}</p>
              <p class="card-text"><strong>Salary:</strong> R ${item.salary}</p>
              <p class="card-text"><strong>Employment History:</strong> ${item.employmentHistory}</p>
              <p class="card-text"><strong>Contact:</strong> ${item.contact}</p>
              <!-- Performance Review Button -->
              <button id="performance-review-btn" class="btn btn-success" onclick="openPerformanceReview('${item.employeeId}')">Performance Review</button>
          </div>
        `;
      container.appendChild(card);
    });

    // Attach data to a global variable for search
    window.employeeData = data.employeeInformation;
  } catch (error) {
    console.error("Error:", error);
    container.innerHTML = "<p class='text-danger'>Error: Data not found.</p>";
  }
}

async function searchEmployee() {
  const searchInput = document.getElementById("searchInput").value.trim(); // Get search input value
  const resultsContainer = document.getElementById("employeeList");

  // Clear previous results
  resultsContainer.innerHTML = "";

  if (!searchInput) {
    resultsContainer.innerHTML = `<p class='text-warning'>Please enter a valid employee ID to search.</p>`;
    return;
  }

  // Search in the fetched employee data
  const result = (window.employeeData || []).find(
    (employee) => employee.employeeId.toString() === searchInput
  );

  if (result) {
    resultsContainer.innerHTML = `
          <div class="card m-2">
              <div class="card-body">
                  <h2 class="card-title">Name: ${result.name}</h2>
                  <hr>
                  <p class="card-text"><strong>Position:</strong> ${result.position}</p>
                  <p class="card-text"><strong>Department:</strong> ${result.department}</p>
                  <p class="card-text"><strong>Salary:</strong> ${result.salary}</p>
                  <p class="card-text"><strong>Employment History:</strong> ${result.employmentHistory}</p>
                  <p class="card-text"><strong>Contact:</strong> ${result.contact}</p>
                  <!-- Performance Review Button -->
                  <button class="btn btn-success" onclick="openPerformanceReview('${result.employeeId}')">Performance Review</button>
              </div>
          </div>
      `;
  } else {
    resultsContainer.innerHTML = `<p class='text-danger'>No employee found with ID ${searchInput}.</p>`;
  }
}

// Function to open the performance review page (new tab)
function openPerformanceReview(employeeId) {
  const reviewUrl = `performance.html?employeeId=${employeeId}`;
  window.open(reviewUrl, "_blank");
}

window.onload = displayData;

