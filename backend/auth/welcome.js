firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    // location.replace("index.html"); // Redirect unauthorized users
  } else {
    const profile = user.displayName;
    const userProfilePicture = user.photoURL;

    document.getElementById("user").innerHTML = "Konichiwa, " + profile;
    document.getElementById("pfp").src = userProfilePicture;
    document.getElementById("userEmail").innerHTML = user.email;
  }
});

function logout() {
  firebase.auth().signOut();
}
