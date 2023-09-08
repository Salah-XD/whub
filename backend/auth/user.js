let userLoggedIn = false; // Track user's login state

document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
});
const prebookbtn = document.getElementById("pre_book");

const pbn = document.getElementById("pbn");
const oos = document.getElementById("oos");

// const loginblock = document.getElementsByClassName("loginblock");
prebookbtn.addEventListener("click", function () {
  //   alert("Pre-booking is not available right now");

  // Show the pbn by adding the class
  pbn.style.opacity = 1;

  // After 4 seconds, hide the pbn by removing the class
  setTimeout(() => {
    pbn.style.opacity = 0;
  }, 2000);
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    $(".loginblock").hide();
    userLoggedIn = true;
    $(".lrpopup").hide();
    // $(".registerblock").hide();
    // $(".profileblock").show();
    console.log("user logged in");

    // User is logged in
    const notification = document.getElementById("notification");

    // Show the notification by adding the class
    notification.style.opacity = 1;

    // After 4 seconds, hide the notification by removing the class
    setTimeout(() => {
      notification.style.opacity = 0;
    }, 2000);

    // location.replace("welcome.html");
  } else {
    userLoggedIn = false;
    $(".loginblock").show();
    $(".profileblock").hide();
    // 4000 milliseconds = 4 seconds
  }
});
const lrpopups = document.getElementsByClassName("lrpopup");
const outofstock = document.getElementsByClassName("outofstock");

const loginblock = document.getElementsByClassName("loginblock");

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
          })
          .finally(() => {
            // Re-enable the "nextBtn" button after the signup attempt (whether success or failure)
            nextBtn.removeAttribute("disabled");
            for (let i = 0; i < lrpopups.length; i++) {
              lrpopups[i].style.display = "none";
            }

            for (let i = 0; i < loginblock.length; i++) {
              loginblock[i].style.display = "none";
            }
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

  const lrpopups = document.getElementsByClassName("lrpopup");
  const registerblocks = document.getElementsByClassName("registerblock");
  let x = document.getElementById("reg");
  let y = document.getElementById("phno");
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
      for (let i = 0; i < lrpopups.length; i++) {
        lrpopups[i].style.display = "none";
      }

      for (let i = 0; i < registerblocks.length; i++) {
        registerblocks[i].style.display = "none";
      }
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
    }
    nextBtn.removeAttribute("disabled");
  } else {
    nextBtn.setAttribute("disabled", "disabled");
    document.getElementById("error2").innerHTML = "Fill all the fields";
  }
}

// Initial validation on page load
validateForm();

///google authenticatio//////
// const auth = getAuth();

// const googlelogin = () => {
//   const googleProvider = new firebase.auth.GoogleAuthProvider();

//   auth
//     .signInWithPopup(googleProvider)
//     .then(() => {
//       window.location.assign("./profile");
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

// import {
//   getAuth,
//   GoogleAuthProvider,
//   signInWithPopup,
// } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";
// const auth = getAuth(app);
// auth.languageCode = "en";
// console.log(auth);

// const provider = new GoogleAuthProvider();
// console.log(provider);

// //----- Google login code start
// function glogin() {
//   alert("success");
// }
const linker = document.getElementById("linker");
linker.addEventListener("click", function mainlink() {
  const user = firebase.auth().currentUser;
  alert("success");

  if (user) {
    // User is already logged in, show the product not available div
    // loginblock.style.display = "none";
    // oos.style.display = "block";
    $(".outofstock").show();
    $(".loginblock").hide();
  } else {
    // User is not logged in, show the login div
    // loginblock.style.display = "block";
    //oos.style.display = "none";
    $(".outofstock").hide();
    $(".loginblock").show();
  }
});
