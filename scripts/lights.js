var lightBulb = document.getElementById('lightbulb');

function lights(status) {
    // turn lights on
    if (status === 'on') {
        // change status to off
        lightBulb.attributes.onclick.nodeValue = `lights('off')`;

        // change lightbulb colour to orange/yellow
        // lightBulb.style.color = "#ffbc00";

        // change title to on
        lightBulb.attributes.title.nodeValue = `Lights on`;

        // change website to dark mode


    }

    // turn lights off
    else {
        // change status to on
        lightBulb.attributes.onclick.nodeValue = `lights('on')`;

        // change lightbulb colour back to gray
        // lightBulb.style.color = "#666";

        // change title to off
        lightBulb.attributes.title.nodeValue = `Lights off`;

        // change website to light mode


    }
}