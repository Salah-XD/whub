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
      document.getElementById("error3").innerHTML = "OTP sent successfully";
      // Store the confirmation result for later use
      window.confirmationResult = confirmationResult;
      console.log(confirmationResult);
    })

    .catch(function (error) {
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

//verification-----------

function codeverify() {
  // const otp = document.getElementById("otpInput").value; // Replace "otpInput" with your OTP input field ID

  // Use the stored confirmationResult to verify the OTP
  confirmationResult
    .confirm(otp)
    .then(function (result) {
      // User signed in successfully.
      console.log("Phone number verified successfully" + result.user);
    })
    .then(function () {
      x.style.left = "-0%";
      y.style.left = "-120%";
    })
    .catch(function (error) {
      console.log(error);
      document.getElementById("error3").innerHTML = error.message;
    });
}

function resendotp() {
  firebase.auth().signInWithPhoneNumber(phnumber, recaptchaVerifier);
}
