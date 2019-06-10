var languageBtn = document.getElementById("languageBtn");
var languageScript = document.getElementById("language");

var typed1 = document.getElementById("typed1");
var typed2 = document.getElementById("typed2");
var typed3 = document.getElementById("typed3");
var typed4 = document.getElementById("typed4");

var akinDesc = document.getElementById("a-kin-desc");

var sect2 = document.getElementById("sect2");

function languageEN() {
    languageBtn.innerHTML = `Italiano`
    typed1.innerHTML = `Hi.`
    typed2.innerHTML = `I'm Ashley.`
    typed3.innerHTML = `I'm a front-end web developer, based in Trieste.`
    typed4.innerHTML = `Why not check out my projects below?`

    akinDesc.innerHTML = `Musician`

    sect2.innerHTML = `Section 2`
}

function languageIT() {
    languageBtn.innerHTML = `English`
    typed1.innerHTML = `Ciao.`
    typed2.innerHTML = `Sono Ashley.`
    typed3.innerHTML = `Lavoro come web developer "front-end" a Trieste.`
    typed4.innerHTML = `Dare uno sguardo ai progetti sotto!`

    akinDesc.innerHTML = `Musicista`

    sect2.innerHTML = `Parte due`
}