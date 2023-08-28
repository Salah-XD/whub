document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    var recaptchaResponse = grecaptcha.getResponse();

    if (!recaptchaResponse) {
      event.preventDefault();
      alert("Please complete the reCAPTCHA.");
    } else {
      //need to code
    }
  });
