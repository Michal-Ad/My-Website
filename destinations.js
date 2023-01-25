"use strict";

/**takes the user back to the top of the page when the button is clicked */
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
/** toggles the class "hidden" on the text box element when the corresponding image element is clicked
 * @param country - the country that was clicked
 */
function toggleTextBox(country) {
    const textBox = document.getElementById(`text-box-${country}`);
    if(textBox.style.display === 'block') {
        textBox.style.display = 'none';
    } else {
        textBox.style.display = 'block';
    }
}

/** pick a random country and takes the user to the chosen country's section */
function randomCountry() {
    const countries = ["Antarctica", "Austria", "Belgium", "Croatia", "Czech Republic", "Denmark", "Ecuador", "Finland", "France", "Germany", "Hungary", "Iceland", "Indonesia", "Italy", "The Netherlands", "Norway", "Panama", "Peru", "Portugal", "Slovenia", "South Africa", "Spain", "United Kingdom"];
    // Choose a random country
    const randomIndex = Math.floor(Math.random() * countries.length);
    const randomCountry = countries[randomIndex];

    // Scroll to the corresponding element on the page
    const elementId = randomCountry.toLowerCase().replace(" ", "-") + "-pic";
    const element = document.getElementById(elementId);
    const elementPosition = element.getBoundingClientRect();
    const offset = elementPosition.top - 80; // 100 pixels above the element
    window.scrollTo({
        top: offset,
        behavior: 'smooth'
    });
    
    // Show a message to the user
    alert("You should travel to " + randomCountry);
}
