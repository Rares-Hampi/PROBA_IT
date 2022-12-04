const login = document.getElementById("login");
const register = document.getElementById("register");
const page = document.getElementById("page");
const unlog = document.getElementById("dec");
const log = document.getElementById("log");
const reg = document.getElementById("reg");

function openLogin() {
  login.style.display = "block";
  register.style.display = "none";
  page.classList.add("page");
}
function closeLogin() {
  login.style.display = "none";
  page.classList.remove("page");
}
function openRegister() {
  register.style.display = "block";
  login.style.display = "none";
  page.classList.add("page");
}
function closeRegister() {
  register.style.display = "none";
  page.classList.remove("page");
}

function Login() {
  localStorage.setItem("Status", "Logat");
}

function disconect() {
  localStorage.setItem("Status", "Delogat");
}

const myTime = setInterval(check, 100);
function check() {
  if (localStorage.getItem("Status") == "Logat") {
    unlog.style.display = "block";
    log.style.display = "none";
    reg.style.display = "none";
  } else {
    unlog.style.display = "none";
    log.style.display = "block";
    reg.style.display = "block";
  }
}
