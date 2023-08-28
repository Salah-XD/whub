document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    location.replace("welcome.html");
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
        alert("Please complete the reCAPTCHA.");
        document.getElementById("error2").innerHTML = "Please click i'm not a robot"";
      } else {
        //need to code
      }
    });
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
      document.getElementById("error2").innerHTML = error.message;
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
