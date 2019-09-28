var languageBtn = document.getElementById("languageBtn");
var languageScript = document.getElementById("language");
var typed1 = document.getElementById("typed1");
var typed2 = document.getElementById("typed2");
var typed3 = document.getElementById("typed3");
var area = document.getElementById("area");
var scrollProjects = document.getElementById("scroll-projects");
var akinDesc = document.getElementById("a-kin-desc");
var linkProj = document.getElementById("link-proj");
var linkAbout = document.getElementById("link-about");
var linkContact = document.getElementById("link-contact");


function languageEN() {
    // Button
    languageBtn.innerHTML = `EN`
    // Menu
    linkProj.innerHTML = `Projects`
    linkContact.innerHTML = `Contact`
    // Hero
    area.innerHTML = `Italy`
    typed1.innerHTML = `Hi there!`
    typed2.innerHTML = `I'm Ash.`
    typed3.innerHTML = `Why not check out some of my projects below?`
    // Projects
    scrollProjects.innerHTML = `Projects`
    akinDesc.innerHTML = `Musician`
}

function languageIT() {
    // Button
    languageBtn.innerHTML = `IT`
    // Menu
    linkProj.innerHTML = `Progetti`
    linkContact.innerHTML = `Contatti`
    // Hero
    area.innerHTML = `Italia`
    typed1.innerHTML = `Ciao!`
    typed2.innerHTML = `Sono Ash.`
    typed3.innerHTML = `Dai uno sguardo ai progetti qui sotto!`
    // Projects
    scrollProjects.innerHTML = `Progetti`
    akinDesc.innerHTML = `Musicista`
}