
document.addEventListener("DOMContentLoaded", function () {
  const navbarContainer = document.getElementById("navbar-container");

  // Determine correct navbar path based on current location
  let navbarPath = "pages/navbar.html"; // Default for index.html

  if (window.location.pathname.includes("/pages/")) {
    navbarPath = "../pages/navbar.html"; // If inside the "pages/" folder
  }

  // Fetch and insert the navbar dynamically
  fetch(navbarPath)
    .then(response => response.text())
    .then(data => {
      navbarContainer.innerHTML = data;

      // Reinitialize menu toggle after navbar is loaded
      addNavbarEventListeners();
    })
    .catch(error => console.error("Error loading navbar:", error));

  // Function to add event listeners for mobile navbar toggle
  function addNavbarEventListeners() {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const menuIcon = document.getElementById("menu-icon");
    const dropdowns = document.querySelectorAll(".dropdown");

    if (!menuToggle || !navMenu || !menuIcon) return;

    // Toggle mobile menu & change icon
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");

      // Toggle between hamburger and close (X) icon
      if (navMenu.classList.contains("active")) {
        menuIcon.classList.replace("ri-menu-line", "ri-close-line");
      } else {
        menuIcon.classList.replace("ri-close-line", "ri-menu-line");
      }
    });

    // Toggle dropdowns on click (for mobile)
    dropdowns.forEach(dropdown => {
      dropdown.addEventListener("click", function (e) {
        e.stopPropagation();
        this.classList.toggle("active");
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        navMenu.classList.remove("active");
        menuIcon.classList.replace("ri-close-line", "ri-menu-line"); // Reset to hamburger icon
        dropdowns.forEach(dropdown => dropdown.classList.remove("active"));
      }
    });
  }
});




// document.addEventListener("DOMContentLoaded", function () {
//   const menuToggle = document.getElementById("menu-toggle");
//   const navMenu = document.getElementById("nav-menu");
//   const menuIcon = document.getElementById("menu-icon");
//   const dropdowns = document.querySelectorAll(".dropdown");

//   // Determine correct navbar path based on current location
//   let navbarPath = "pages/navbar.html"; // Default for index.html

//   if (window.location.pathname.includes("/pages/")) {
//     navbarPath = "../pages/navbar.html"; // If inside the "pages/" folder
//   }

//   // Fetch and insert the navbar dynamically
//   fetch(navbarPath)
//     .then(response => response.text())
//     .then(data => {
//       document.getElementById("navbar-container").innerHTML = data;

//       // Reinitialize menu toggle after navbar is loaded
//       addNavbarEventListeners();
//     })
//     .catch(error => console.error("Error loading navbar:", error));

//   // Function to add event listeners for mobile navbar toggle
//   function addNavbarEventListeners() {
//     const menuToggle = document.getElementById("menu-toggle");
//     const navMenu = document.getElementById("nav-menu");
//     const dropdowns = document.querySelectorAll(".dropdown");

//     if (menuToggle) {
//       menuToggle.addEventListener("click", () => {
//         navMenu.classList.toggle("active");
//       });
//     }

//     // Toggle dropdowns on click (for mobile)
//     dropdowns.forEach(dropdown => {
//       dropdown.addEventListener("click", function (e) {
//         e.stopPropagation();
//         this.classList.toggle("active");
//       });
//     });

//     // Close menu when clicking outside
//     document.addEventListener("click", function (e) {
//       if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
//         navMenu.classList.remove("active");
//         dropdowns.forEach(dropdown => dropdown.classList.remove("active"));
//       }
//     });
//   }
// });


// // document.addEventListener("DOMContentLoaded", function () {
// //   let navbarPath = "pages/navbar.html"; // Default path for index.html

// //   // If the script is running from a file inside /pages/, adjust the path
// //   if (window.location.pathname.includes("/pages/")) {
// //     navbarPath = "../pages/navbar.html";
// //   }

// //   fetch(navbarPath)
// //     .then(response => response.text())
// //     .then(data => {
// //       document.getElementById("navbar-container").innerHTML = data;
// //     })
// //     .catch(error => console.error("Error loading navbar:", error));
// // });
