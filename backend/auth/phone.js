function phoneAuth() {
  const prefix = document.getElementById("js_number-prefix").value;
  const number = document.getElementById("js_input-phonenumber").value;
  //   phnumber = Number(prefix + number);
  phnumber = prefix + number;
  console.log(phnumber);
}

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
