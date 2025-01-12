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