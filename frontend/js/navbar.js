const navbar = document.getElementById("navbar");
const icon = document.getElementById("nav_icon");

icon.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("merge");
  if (navbar.className === "nav") {
    navbar.className += " responsive";
  } else {
    navbar.className = "nav";
  }
});
