var toggle = "off";
var slideIndex = 1


showSlides();
slideNavigator(slideCurrent);






/*nextButton.click(plusSlides(slideIndex));
prevButton.click(prevSlide(slideIndex));*/

/*function plusSlides (n) {
    showSlides(slideIndex += n);
}

function prevSlide (n) {
    showSlides(slideIndex -= n);
}*/

function showSlides () {
    var slides = document.getElementsByClassName("slide");

    for (i = 0; i < slides.length; i++){
       slides[i].style.display = "none";
    }

    
    slideIndex++
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    var slideCurrent = slides[slideIndex - 1];
    slideCurrent.style.display = "flex";
    setTimeout(() => {
        showSlides();
    }, 5000);

    

};


      

$("#navbutton").click(openNav);

function openNav () {
    
    if (toggle === "off") {
        $("#nav-links").removeClass("nav-row");
        $("#nav-links").addClass("nav-column");
        $("#navbutton").removeClass("nav-button")
        $("#navbutton").addClass("nav-open")
        $("#navmenu").removeClass("nav-menu");
        toggle = "on"
    }
    else {
        $("#nav-links").addClass("nav-row");
        $("#nav-links").removeClass("nav-column");
        $("#navbutton").addClass("nav-button");
        $("#navbutton").removeClass("nav-open")
        $("#navmenu").addClass("nav-menu");
        toggle = "off";
    }
}

