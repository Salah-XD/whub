// const lrpopups = document.getElementsByClassName("lrpopup");

const pbn = document.getElementById("pbn");
const oos = document.getElementById("oos");
const prebookbtn = document.getElementById("pre_book");

// const loginblock = document.getElementsByClassName("loginblock");
function pbtn() {
  //   alert("Pre-booking is not available right now");

  // Show the pbn by adding the class
  oos.style.display = "none";
  pbn.style.opacity = 1;

  // After 4 seconds, hide the pbn by removing the class
  setTimeout(() => {
    pbn.style.opacity = 0;
  }, 2000);
}

// function mainlink() {
//   const user = firebase.auth().currentUser;

//   if (user) {
//     // User is already logged in, show the product not available div
//     loginblock.style.display = "none";
//     oos.style.display = "block";
//   } else {
//     // User is not logged in, show the login div
//     loginblock.style.display = "block";
//     oos.style.display = "none";
//   }
// }
