document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const toggleLogin = document.getElementById("toggleLogin");
    const toggleSignup = document.getElementById("toggleSignup");
  
    // Toggle between login and signup forms
    function toggleForms() {
      loginForm.classList.toggle("hidden");
      signupForm.classList.toggle("hidden");
    }
  
    // Handle toggle click events
    toggleLogin.addEventListener("click", function(event) {
      event.preventDefault();
      toggleForms();
    });
  
    toggleSignup.addEventListener("click", function(event) {
      event.preventDefault();
      toggleForms();
    });
  
    // Handle form submissions
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
      // Handle login logic here
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      console.log("Login - Username:", username, "Password:", password);
    });
  
    signupForm.addEventListener("submit", function(event) {
      event.preventDefault();
      // Handle signup logic here
      const newUsername = document.getElementById("newUsername").value;
      const newPassword = document.getElementById("newPassword").value;
      console.log("Signup - Username:", newUsername, "Password:", newPassword);
    });
  });
  