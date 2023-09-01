///=====================testing=====================

// function phoneAuth() {
//   const prefix = document.getElementById("js_number-prefix").value;
//   const number = document.getElementById("js_input-phonenumber").value;
//   let phnumber = "+" + Number(prefix + number);
//   // phnumber = prefix + number;
//   console.log(phnumber);
//   firebase
//     .auth()
//     .signInWithPhoneNumber(number, window.recaptchaVerifier)
//     .then(function (confirmationResult) {
//       window.confirmationResult = confirmationResult;
//       coderesult = confirmationResult;
//       console.log(confirmationResult);
//       // document.getElementById('sender').style.display = 'none';
//       // document.getElementById('verifier').style.display = 'block';
//     })
//     .catch(function (error) {
//       document.getElementById("error3").innerHTML = error.message;
//       console.log(error);
//     });
// }

///=====================testing2=====================
// ///invisible recaptcha

// render();
// function render() {
//   window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
//     "recaptcha-container",
//     { size: "invisible" }
//   );
//   recaptchaVerifier.render();
// }

// function phoneAuth() {
//   var number = document.getElementById("phnumber").value;
//   firebase
//     .auth()
//     .signInWithPhoneNumber(number, window.recaptchaVerifier)
//     .then(function (confirmationResult) {
//       window.confirmationResult = confirmationResult;
//       coderesult = confirmationResult;
//       // document.getElementById('sender').style.display = 'none';
//       // document.getElementById('verifier').style.display = 'block';
//     })
//     .catch(function (error) {
//       alert(error.message);
//     });
// }

//==========main code=======

function phoneAuth() {
  const prefix = document.getElementById("js_number-prefix").value;
  const number = document.getElementById("js_input-phonenumber").value;
  const phnumber = prefix + number; // Correctly format the phone number
  console.log(phnumber);

  // Use the initialized recaptchaVerifier
  const recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
    "recaptcha-container",
    {
      size: "invisible",
      callback: function (response) {
        // reCAPTCHA solved, continue with authentication
        sendVerificationCode(phnumber);
      },
    }
  );

  // Start phone number authentication
  firebase
    .auth()
    .signInWithPhoneNumber(phnumber, recaptchaVerifier)
    .then(function (confirmationResult) {
      // Store the confirmation result for later use
      window.confirmationResult = confirmationResult;

      document.getElementById("error3").innerHTML = "OTP sent successfully";
    })
    .catch(function (error) {
      document.getElementById("error3").innerHTML = error.message;
      console.log(error);
    });
}

// Render invisible reCAPTCHA
// render();
// function render() {
//   window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
//     "recaptcha-container",
//     { size: "invisible" }
//   );
//   recaptchaVerifier.render();
// }

///verification-----------

function codeverify() {
  var code = document.getElementById("verificationcode").value;
  coderesult
    .confirm(code)
    .then(function () {
      document.getElementsByClassName("p-conf")[0].style.display = "block";
      document.getElementsByClassName("n-conf")[0].style.display = "none";
    })
    .catch(function () {
      document.getElementsByClassName("p-conf")[0].style.display = "none";
      document.getElementsByClassName("n-conf")[0].style.display = "block";
    });
}
