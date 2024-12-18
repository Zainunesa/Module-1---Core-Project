document
  .querySelector(".login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username == "HR admin" && password == "123456") {
      alert(`Welcome, ${username}!`);
      window.location.href = "dashboard.html";
    } else {
      alert("Please enter correct password");
    }
  });
