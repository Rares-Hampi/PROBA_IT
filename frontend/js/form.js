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
  (scrollTop = window.pageYOffset || document.documentElement.scrollTop),
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

const regex_email = /^[a-zA-Z0-9._~-]+@stud.acs.upb.ro$/;

const valid_reg_nume = () => {
  if (inputUsername.value.length > 3) {
    return true;
  } else {
    return false;
  }
};
const valid_reg_email = () => {
  if (regex_email.test(inputEmail.value)) {
    return true;
  } else {
    return false;
  }
};
const valid_reg_pswd = () => {
  if (inputParola.value.length > 3) {
    return true;
  } else {
    return false;
  }
};

form_reg.addEventListener("submit", (e) => {
  console.log("submit");
  e.preventDefault();

  reg_valid();
});

function reg_valid() {
  if (valid_reg_email() && valid_reg_nume() && valid_reg_pswd()) {
    localStorage.setItem("Status", "Logat");
    register.style.display = "none";
    page.classList.remove("page");
    enableScroll();
    form_reg.reset();

    return true;
  } else {
    if (!valid_reg_nume()) {
      alert("numele nu respecta cerintele");

      inputUsername.focus();

      return false;
    }
    if (!valid_reg_pswd()) {
      alert("parola nu respecta cerintele");

      inputParola.focus();
      return false;
    }
    if (!valid_reg_email()) {
      alert("emailul nu respecta cerintele");

      inputEmail.focus();
      return false;
    }

    localStorage.setItem("Status", "Delogat");
    return false;
  }
}

//!log validation

const valid_pswd = () => {
  console.log(logParola.value.length);
  if (logParola.value.length > 5) {
    return true;
  } else {
    return false;
  }
};

const valid_n = () => {
  if (logName.value.length > 3) {
    console.log(logName.value.length);
    return true;
  } else {
    return false;
  }
};

form_log.addEventListener("submit", (e) => {
  console.log("submit");
  e.preventDefault();

  log_valid();
});

function log_valid() {
  if (valid_n() && valid_pswd()) {
    localStorage.setItem("Status", "Logat");
    login.style.display = "none";
    page.classList.remove("page");
    enableScroll();
    form_log.reset();

    return true;
  } else {
    if (!valid_n()) {
      alert("numele nu respecta cerintele");

      logName.focus();

      return false;
    }
    if (!valid_pswd()) {
      alert("parola nun respecta cerintele");

      logParola.focus();
      return false;
    }
    localStorage.setItem("Status", "Delogat");
    return false;
  }
}
