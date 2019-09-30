var lightBulb = document.getElementById('lightbulb');

function lights(status) {
    // turn lights on
    if (status === 'on') {
        // change status to off
        lightBulb.attributes.onclick.nodeValue = `lights('off')`;

        // change lightbulb colour to orange/yellow


        // change title to on


        // change website to dark mode


    }

    // turn lights off
    else {
        // change status to on
        lightBulb.attributes.onclick.nodeValue = `lights('on')`;

        // change lightbulb colour back to gray


        // change title to off


        // change website to light mode


    }
}