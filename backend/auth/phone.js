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
      console.log(confirmationResult);

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

// function codeverify() {
//   // const otp = document.getElementById("otpInput").value; // Replace "otpInput" with your OTP input field ID

//   // Use the stored confirmationResult to verify the OTP
//   window.confirmationResult
//     .confirm(otp)
//     .then(function (result) {
//       // OTP verification successful
//       console.log("Phone number verified successfully");
//       // You can access the authenticated user via `result.user`

//       // Handle further user authentication or redirection
//       // For example, you can redirect the user to a dashboard page
//       // window.location.href = "/dashboard.html";
//     })
//     .catch(function (error) {
//       // OTP verification failed
//       document.getElementById("error3").innerHTML =
//         "Invalid OTP. Please try again.";
//       console.error(error);
//     });
// }

function resendotp() {
  firebase.auth().signInWithPhoneNumber(phnumber, recaptchaVerifier);
}
