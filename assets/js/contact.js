
function sendMail(contactForm) {
  emailjs.send("service_vj63ygg","EmptyPantry", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS!", response);
            alert("Your message was sent! We will respond as soon as possible!");
            $('form').children('textarea').val('YOUR MESSAGE WAS SENT 🥑!').css('color','#49590c');
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
}
