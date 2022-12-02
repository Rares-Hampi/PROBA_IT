const login = document.getElementById("login");
const register = document.getElementById("register");
const page = document.getElementById("page");

function openLogin() {
  login.style.display = "block";
  page.classList.add("page");
}
function closeLogin() {
  login.style.display = "none";
  page.classList.remove("page");
}
function openRegister() {
  register.style.display = "block";
  page.classList.add("page");
}
function closeRegister() {
  register.style.display = "none";
  page.classList.remove("page");
}
