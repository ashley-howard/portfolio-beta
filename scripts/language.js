var languageBtn = document.getElementById("languageBtn");
var languageScript = document.getElementById("language");

var typed1 = document.getElementById("typed1");
var typed2 = document.getElementById("typed2");
var typed3 = document.getElementById("typed3");

var scrollProjects = document.getElementById("scroll-projects");

var akinDesc = document.getElementById("a-kin-desc");

var sect2 = document.getElementById("sect2");

function languageEN() {
    // Home
    languageBtn.innerHTML = `Italiano`
    typed1.innerHTML = `Hi, I'm Ashley.`
    typed2.innerHTML = `I'm a front-end web developer, based in Trieste.`
    typed3.innerHTML = `Why not check out my projects below?`
    scrollProjects.innerHTML = `Projects`
    akinDesc.innerHTML = `Musician`
    sect2.innerHTML = `Services`
}

function languageIT() {
    // Home
    languageBtn.innerHTML = `English`
    typed1.innerHTML = `Ciao, sono Ashley.`
    typed2.innerHTML = `Lavoro come web developer "front-end" a Trieste.`
    typed3.innerHTML = `Dare uno sguardo ai progetti sotto!`
    scrollProjects.innerHTML = `Progetti`
    akinDesc.innerHTML = `Musicista`
    sect2.innerHTML = `Servizi`
}