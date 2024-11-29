document.addEventListener("DOMContentLoaded", () => {
  const splashScreen = document.getElementById("splash-screen");
  const mainContent = document.getElementById("main-content");

  // Show splash screen for 3 seconds, then display main content
  setTimeout(() => {
    splashScreen.style.display = "none"; // Hide splash screen
    mainContent.style.display = "block"; // Show the main content (login form)
  }, 3000);
});

// Example user database for Pichincha Estudios
const users = {
  angie: { password: "angie123", page: "angie.html" },
  jorge: { password: "jorge123", page: "jorge.html" },
  family: { password: "family123", page: "family.html" },
};

// Event listener for login form
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from refreshing the page

  // Get input values
  const username = document.getElementById("username").value.toLowerCase(); // Convert username to lowercase
  const password = document.getElementById("password").value;

  // Check if the user exists and the password matches
  if (users[username] && users[username].password === password) {
    // Redirect to the user's page (adjust for Pichincha Estudios content)
    window.location.replace(users[username].page); // Using replace() to change location
  } else {
    // Show error message
    const errorMessage = document.getElementById("error-message");
    errorMessage.style.display = "block";
  }
});
