function getWhatsAppButton(){
    const whatsappButton = document.createElement("a");
                
    whatsappButton.href = "https://wa.me/918799228648?text=Hello%2C%20I%20want%20to%20know%20more%20about%20studying%20abroad.";
    whatsappButton.className = "whatsapp-float-btn";
    whatsappButton.target = "_blank";
    whatsappButton.innerHTML = '<i class="fab fa-whatsapp"></i>';

    document.body.appendChild(whatsappButton);
}

function setActiveClass(){
    const currentPage = window.location.pathname.split("/").pop();

    const navLinks = {
        "about.html": "nav-about",
        "services.html": "nav-services",
        "contact.html": "nav-contact",
        "uk.html": "nav-uk",
        "usa.html": "nav-usa",
        "finland.html": "nav-finland",
        "germany.html": "nav-germany",
        "france.html": "nav-france",
        "denmark.html": "nav-denmark",
        "ireland.html": "nav-ireland",
        "dubai.html": "nav-dubai",
        "ielts-test.html" : "nav-ielts",
        "pte-test.html" : "nav-pte",
        "duolingo-test.html" : "nav-duolingo",
        "toefl-test.html" : "nav-toefl",
        "gmat-test.html" : "nav-gmat",
        "gre-test.html" : "nav-gre",
    };

    if (navLinks[currentPage]) {
        document.getElementById(navLinks[currentPage]).classList.add("active");
    }
}