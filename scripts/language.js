var languageBtn = document.getElementById("languageBtn");
var languageScript = document.getElementById("language");

var typed1 = document.getElementById("typed1");
var typed2 = document.getElementById("typed2");
var typed3 = document.getElementById("typed3");

var area = document.getElementById("area");

var scrollProjects = document.getElementById("scroll-projects");

var akinDesc = document.getElementById("a-kin-desc");

var sect2 = document.getElementById("sect2");


function languageEN() {
    // Home
    languageBtn.innerHTML = `Italiano`
    typed1.innerHTML = `Hi there!`
    typed2.innerHTML = `I'm Ash.`
    typed3.innerHTML = `Why not check out some of my projects below?`
    scrollProjects.innerHTML = `Projects`
    akinDesc.innerHTML = `Musician`
    sect2.innerHTML = `Services`
    area.innerHTML = `<i class="fas fa-map-marker-alt"></i> Italy`
}

function languageIT() {
    // Home
    languageBtn.innerHTML = `English`
    typed1.innerHTML = `Ciao!`
    typed2.innerHTML = `Sono Ash.`
    typed3.innerHTML = `Dare uno sguardo ai progetti sotto!`
    scrollProjects.innerHTML = `Progetti`
    akinDesc.innerHTML = `Musicista`
    sect2.innerHTML = `Servizi`
    area.innerHTML = `<i class="fas fa-map-marker-alt"></i> Italia`
}