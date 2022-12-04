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
  disableScroll();
}
function closeLogin() {
  login.style.display = "none";
  page.classList.remove("page");
  enableScroll();
}
function openRegister() {
  register.style.display = "block";
  login.style.display = "none";
  page.classList.add("page");
  disableScroll();
}
function closeRegister() {
  register.style.display = "none";
  page.classList.remove("page");
  enableScroll();
}

function Login() {
  localStorage.setItem("Status", "Logat");
  enableScroll();
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

function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
    (window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    });
}

function enableScroll() {
  window.onscroll = function () {};
}
