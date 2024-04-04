function initListeners() {
  // Anonymous function is `function () {}`
  // This form is becoming more popular though `(e) => {}`

  // POINTER EVENTS IN JQUERY!!!  -----------------------
  // $("nav a").on("click", (e) => {
  //   // A Let variable is in a local scope, while var is more global.
  //   let ruff = e.currentTarget.id;

  //   // `` these are called back-ticks
  //   // They are used to make template literals.

  //   // $("#app").append(ruff);
  //   // $("#app").prepend(ruff);
  //   // $("#app").text(ruff);
  //   $("#app").html(`<p>${ruff}</p>`);

  //   console.log("event", ruff, e);
  //   $(e.currentTarget).slideUp();
  // });

  var mobileNavOpen = false;
  $("#mobile-nav-links").slideUp(0, () => {
    jQuery("#mobile-nav-links").css("opacity", "1");
  });

  $("#hamburger-nav-btn").on("click", (e) => {
    // A Let variable is in a local scope, while var is more global.
    let ruff = e.currentTarget.id;

    // `` these are called back-ticks
    // They are used to make template literals.

    // $("#app").append(ruff);
    // $("#app").prepend(ruff);
    // $("#app").text(ruff);
    // $("#app").html(`<p>${ruff}</p>`);

    console.log("event", ruff, e);
    if (!mobileNavOpen) {
      $("#mobile-nav-links").slideDown();
      mobileNavOpen = true;
    } else {
      $("#mobile-nav-links").slideUp();
      mobileNavOpen = false;
    }
  });
}

$(document).ready(function () {
  // console.log("woah.");
  initListeners();
});
