"use strict";

/** validate that the user filled all the required fields */
function validation() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    if (name == "" || email == "" || message == "") {
        alert("Please fill in all fields.");
        return false;
    }
    return true;
}

/** compose and send an email using the values the user filled in the contact form.
 * Called when the user submits the form and expects an email to be sent.
 * Open the default email client with the constructed email ready to be sent.
 */
function openMail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    window.location.href = "mailto:michal.ad@post.runi.ac.il?subject=Email from " + name
         + "&body=" + message + "%0D%0A%0D%0AFrom: " + name + "%0D%0AEmail: " + email;
}

/** takes the user back to the top of the page when the button is clicked */
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
  


  