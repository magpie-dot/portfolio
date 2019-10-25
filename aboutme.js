 function homeClicked() {
    document.getElementById("home").style.display = "block";
    
    document.getElementById("about-me").style.display = "none";

    document.getElementById("interests").style.display = "none";

    document.getElementById("skills").style.display = "none";

    document.getElementById("projects").style.display = "none";
}

function aboutMeClicked() {
    document.getElementById("home").style.display = "none";
    
    document.getElementById("about-me").style.display = "flex";

    document.getElementById("interests").style.display = "none";

    document.getElementById("skills").style.display = "none";

    document.getElementById("projects").style.display = "none";
}

function interestsClicked() {
    document.getElementById("home").style.display = "none";
    
    document.getElementById("about-me").style.display = "none";

    document.getElementById("interests").style.display = "flex";

    document.getElementById("skills").style.display = "none";

    document.getElementById("projects").style.display = "none";
}

function skillsClicked() {
    document.getElementById("home").style.display = "none";
    
    document.getElementById("about-me").style.display = "none";

    document.getElementById("interests").style.display = "none";

    document.getElementById("skills").style.display = "flex";

    document.getElementById("projects").style.display = "none";
}

function projectsClicked() {
    document.getElementById("home").style.display = "none";
    
    document.getElementById("about-me").style.display = "none";

    document.getElementById("interests").style.display = "none";

    document.getElementById("skills").style.display = "none";

    document.getElementById("projects").style.display = "flex";
}