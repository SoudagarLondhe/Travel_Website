

document.addEventListener("DOMContentLoaded", function () {
  let navbarPath = "pages/navbar.html"; // Default path for index.html

  // If the script is running from a file inside /pages/, adjust the path
  if (window.location.pathname.includes("/pages/")) {
    navbarPath = "../pages/navbar.html";
  }

  fetch(navbarPath)
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-container").innerHTML = data;
    })
    .catch(error => console.error("Error loading navbar:", error));
});
