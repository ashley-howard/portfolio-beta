var languageBtn = document.getElementById("languageBtn");
var languageScript = document.getElementById("language");
const menuIcon = document.getElementById("menu-icon");

window.onload = function () {
  document.getElementById("hero").focus();
};

if (localStorage.getItem('language') === 'en') {
  languageEN();
  languageBtn.value = 'en';
}
else {
  languageIT();
  languageBtn.value = 'it';
}

var typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  typeSpeed: 50
});

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.body.style.background = "#b6b6b6";
  document.body.style.transition = "all 2s";
  filter.style.display = "block";
  filter.onclick = function () { closeNav() };
  menuIcon.innerHTML = `<i class="fas fa-circle-notch"></i>`
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.background = "#fff";
  document.body.style.transition = "all 2s";
  filter.style.display = "none";
  menuIcon.innerHTML = `<i class="fab fa-creative-commons-nd"></i>`
}

function changeLanguage() {
  if (languageBtn.value === 'en') {
    languageBtn.value = 'it';
    languageBtn.innerHTML = 'English';
  }
  else {
    languageBtn.value = 'en';
    languageBtn.innerHTML = 'Italiano';
  }
  localStorage.setItem('language', languageBtn.value);
  location.reload();
}