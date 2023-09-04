firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    // location.replace("index.html");
  } else {
    document.getElementById("user").innerHTML = "Hello, " + user.displayName;
    document.getElementById("userEmail").innerHTML = user.email;
  }
});

function logout() {
  firebase.auth().signOut();
}
