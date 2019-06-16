var languageBtn = document.getElementById("languageBtn");
var languageScript = document.getElementById("language");
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

function changeLanguage() {
  if (languageBtn.value === 'en') {
    languageBtn.value = 'it';
    localStorage.setItem('language', languageBtn.value);
    languageScript.src = 'scripts/italiano.js'
    languageBtn.innerHTML = 'English';
    window.location.reload();
  }
  else {
    languageBtn.value = 'en';
    localStorage.setItem('language', languageBtn.value);
    languageScript.src = 'scripts/english.js'
    languageBtn.innerHTML = 'Italiano';
    window.location.reload();
  }
}