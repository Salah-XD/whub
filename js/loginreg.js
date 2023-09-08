$(document).ready(function () {
  $("a.close_lrpopup").click(function () {
    $(".lrpopup").fadeOut();
    $(".outofstock").fadeOut();
    $(".loginblock").fadeOut();
    $(".registerblock").fadeOut();
  });

  $("a.login_btn").click(function () {
    if (userLoggedIn) {
      // User is logged in, show profile
      $(".loginblock").hide();
      $(".profileblock").fadeIn();
    } else {
      // User is not logged in, show login form
      $(".loginblock").fadeIn();
      $(".profileblock").hide();
    }
    $(".lrpopup").fadeIn();
    // $(".loginblock").fadeIn();
    $(".registerblock").hide();
    $(this).addClass("active");
    $("a.register_btn").removeClass("active");
  });
  $("a.mainlink").click(function () {
    // alert("test");
    if (!userLoggedIn) {
      // alert("if");
      $("a.login_btn").click();
    } else {
      // alert("else");
      $(".loginblock").hide();
      $(".oos").fadeIn();
    }
  });
  $("a.register_btn").click(function () {
    $(".lrpopup").fadeIn();
    $(".loginblock").hide();
    $(".registerblock").fadeIn();
    $(this).addClass("active");
    $("a.login_btn").removeClass("active");
  });
});
let y = document.getElementById("reg");
let x = document.getElementById("phno");
function phno() {
  x.style.left = "-0%";
  y.style.left = "-120%";
}
