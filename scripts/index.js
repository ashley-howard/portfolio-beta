var languageBtn = document.getElementById("languageBtn");

//let languageStoreValue = localStorage.getItem('language') === 'en' ? languageBtn.value = 'en' : languageBtn.value = 'it';

var languageScript = document.getElementById("language");
window.onload = function () {
  document.getElementById("hero").focus();
};

if (localStorage.getItem('language') === 'en') {
  // or if this value is true, load a function that loads the italian 
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
    // and refresh page
     window.location.reload();

  }
  else {
    languageBtn.value = 'en';
    localStorage.setItem('language', languageBtn.value);
    languageScript.src = 'scripts/english.js'
    languageBtn.innerHTML = 'Italiano';
    // and refresh page
     window.location.reload();
  }
}