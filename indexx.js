// Open the sign-in modal
function openSignIn() {
    document.getElementById("signInModal").style.display = "block";
  }
  
  // Close the sign-in modal
  function closeSignIn() {
    document.getElementById("signInModal").style.display = "none";
  }
  
  // Open the sign-up modal
  function openSignUp() {
    document.getElementById("signUpModal").style.display = "block";
  }
  
  // Close the sign-up modal
  function closeSignUp() {
    document.getElementById("signUpModal").style.display = "none";
  }
  
  // Validate the sign-in form
  function validateSignIn() {
    // Add your validation logic here
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Example validation: Check if email and password are not empty
    if (email === "" || password === "") {
      alert("Please fill in all fields.");
      return false;
    }
  
    // Additional validation can be performed here
  
    // If validation is successful, you can perform sign-in actions
    signIn();
  
    // Prevent form submission
    return false;
  }
  
  // Validate the sign-up form
  function validateSignUp() {
    // Add your validation logic here
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Example validation: Check if name, email, and password are not empty
    if (name === "" || email === "" || password === "") {
      alert("Please fill in all fields.");
      return false;
    }
  
    // Additional validation can be performed here
  
    // If validation is successful, you can perform sign-up actions
    signUp();
  
    // Prevent form submission
    return false;
  }
  
  // Example function for sign-in
  function signIn() {
    // Implement sign-in logic here
    console.log("Sign In");
  }
  
  // Example function for sign-up
  function signUp() {
    // Implement sign-up logic here
    console.log("Sign Up");
  }
  