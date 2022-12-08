const login = document.getElementById("login");
const register = document.getElementById("register");
const page = document.getElementById("page");
const unlog = document.getElementById("dec");
const log = document.getElementById("log");
const reg = document.getElementById("reg");
const form_log = document.getElementById("form_log");
const form_reg = document.getElementById("form_reg");

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
  form_log.reset();
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
  form_reg.reset();
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

//! form register validation
const inputEmail = document.getElementById("email");
const inputUsername = document.getElementById("username");
const inputParola = document.getElementById("parola");
const logParola = document.getElementById("log_parola");
const logName = document.getElementById("log_name");
const reg_btn = document.getElementById("reg_btn");

let valid_mail = false;
let valid_nume = false;
let valid_parola = false;
const regex_email =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

inputParola.addEventListener("change", (e) => {
  e.preventDefault();

  if (inputParola.value.length > 5) {
    valid_parola = true;
    reg_btn.disable = "false";
  } else {
    valid_parola = false;
    reg_btn.disable = "true";
  }
  console.log(valid_parola);
});
inputUsername.addEventListener("change", (e) => {
  e.preventDefault();

  if (inputUsername.value.length > 3) {
    valid_nume = true;
    reg_btn.disable = "false";
  } else {
    valid_nume = false;
    reg_btn.disable = "true";
  }
  console.log(valid_nume);
});
inputEmail.addEventListener("change", (e) => {
  e.preventDefault();
  if (inputEmail.value.match(regex_email)) {
    valid_mail = true;
    reg_btn.disable = "false";
  } else {
    valid_mail = false;
    reg_btn.disable = "true";
  }
});

form_reg.addEventListener("submit", (e) => {
  e.preventDefault();

  if (reg_btn.disable == "false") {
    localStorage.setItem("Status", "Logat");
    enableScroll();
    console.log("merge");
  } else {
    register.style.display = "block";
    login.style.display = "none";
    page.classList.add("page");
    disableScroll();
    localStorage.setItem("Status", "Delogat");
    console.log("nu merge");
  }
});

logParola.addEventListener("change", (e) => {
  e.preventDefault();

  if (logParola.value.length > 5) {
    valid_parola = true;
  } else {
    valid_parola = false;
  }
  console.log(valid_parola);
});
logName.addEventListener("change", (e) => {
  e.preventDefault();

  if (logName.value.length > 3) {
    valid_nume = true;
  } else {
    valid_nume = false;
  }
  console.log(valid_nume);
});

function Login() {
  if (valid_nume && valid_parola) {
    localStorage.setItem("Status", "Logat");
    enableScroll();
  } else {
    login.style.display = "block";
    register.style.display = "none";
    page.classList.add("page");
    disableScroll();
    localStorage.setItem("Status", "Delogat");
    console.log("eroare");
  }
}
