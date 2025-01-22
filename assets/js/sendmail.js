const service_id = 'service_8s89rtl';
const template_id = 'template_m9l1yqc';
const publicKey = "gwqHHot8yWg3A2X3k";

document.addEventListener("DOMContentLoaded", function () {
    (function () {
        emailjs.init({
           publicKey: publicKey,
        })
    })();

    document.getElementById("form").addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById('name');
        const contact = document.getElementById('contact');
        const mail = document.getElementById('mail');
        const country = document.getElementById('country');
        const message = document.getElementById('message') || "";

        const templateParams = {
            name: name.value,
            contact: contact.value,
            mail: mail.value,
            country: country.value,
            message: message.value,
        };

        name.value = "";
        contact.value = "";
        mail.value = "";
        country.value = "";
        message.value = "";
    
        emailjs.send(service_id, template_id, templateParams)
            .then(function (response) {
                swal('Success! Your mail has been sent', 'Our team will be get back to you soon....', 'success', {
                    customClass: {
                        confirmButton: ".custom"
                    }
                });
            }, function (error) {
                console.log('FAILED...', error);
            });
    });

})