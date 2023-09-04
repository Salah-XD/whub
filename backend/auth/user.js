let userLoggedIn = false; // Track user's login state

document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    $(".loginblock").hide();
    userLoggedIn = true;
    $(".loginblock").hide();
    $(".profileblock").show();
    console.log("user logged in");

    // location.replace("welcome.html");
  } else {
    userLoggedIn = false;
    $(".loginblock").show();
    $(".profileblock").hide();
  }
});

function login() {
  // ----captcha.js----

  document
    .getElementById("loginForm")
    .addEventListener("submit", function (event) {
      var recaptchaResponse = grecaptcha.getResponse();

      if (!recaptchaResponse) {
        event.preventDefault();
        // alert("Please complete the reCAPTCHA.");
        document.getElementById("error").innerHTML =
          "Please click i'm not a robot";
      } else {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .catch((error) => {
            document.getElementById("error").innerHTML = error.message;
            document.getElementById("error2").innerHTML = error.message;
          });
      }
    });
}

function forgotPass() {
  const email = document.getElementById("email").value;
  firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(() => {
      alert("Reset link sent to your email id");
    })
    .catch((error) => {
      document.getElementById("error").innerHTML = error.message;
    });
}

// Get references to the input fields and the Next button
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("regemail");
const passwordInput = document.getElementById("regpassword");
const confirmPasswordInput = document.getElementsByName("confirmpassword")[0]; // Note: Using [0] to get the first matching element
const nextBtn = document.getElementById("next_btn");

function signUp() {
  const email = document.getElementById("regemail").value;
  const password = document.getElementById("regpassword").value;
  const name = document.getElementById("name").value;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function (result) {
      return result.user.updateProfile({
        displayName: name,
      });
    })
    .catch((error) => {
      nextBtn.setAttribute("disabled", "disabled");
      console.log("signup error");

      document.getElementById("error2").innerHTML = error.message;
    })
    .finally(() => {
      // Re-enable the "nextBtn" button after the signup attempt (whether success or failure)
      nextBtn.removeAttribute("disabled");
    });
}

// Add an event listener to the form inputs to check for changes
nameInput.addEventListener("input", validateForm);
emailInput.addEventListener("input", validateForm);
passwordInput.addEventListener("input", validateForm);
confirmPasswordInput.addEventListener("input", validateForm);

// Function to check if all required fields are filled
function validateForm() {
  const passwordValue = passwordInput.value.trim();
  const confirmPasswordValue = confirmPasswordInput.value.trim();

  if (
    nameInput.value.trim() !== "" &&
    emailInput.value.trim() !== "" &&
    passwordInput.value.trim() !== "" &&
    confirmPasswordInput.value.trim() !== ""
  ) {
    if (passwordValue !== confirmPasswordValue) {
      document.getElementById("error2").innerHTML =
        "Password and Confirm Password doesn't match";
    } else {
      document.getElementById("error2").innerHTML = null;
      signUp();
    }
    nextBtn.removeAttribute("disabled");
  } else {
    nextBtn.setAttribute("disabled", "disabled");
    document.getElementById("error2").innerHTML = "Fill all the fields";
  }
}

// Initial validation on page load
validateForm();
