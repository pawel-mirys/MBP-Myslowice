// variables
const responsiveNavbar = document.querySelector(".responsive-head");

const libAdress = document.querySelector(".lib-adress");
const libHours = document.querySelector(".lib-hours");
const libTel = document.querySelector(".lib-tel");
const libManager = document.querySelector(".lib-manager");

const lib1 = {
    adress: "Mysłowice-Brzezinka, ul. Laryska 5",
    hours: "Czynna codziennie w godz. 10.00 - 18.00.<br> W soboty nieczynna",
    tel: "tel." + " " + "0 32 2222-769",
    manager: "Kierownik:" + " " + "Jolanta Gądzik"
};
const lib2 = {
    adress: "Mysłowice, ul. Wielka Skotnica 84 a",
    hours: "Czynna codziennie w godz. 09.00 - 17.00.<br> W soboty nieczynna",
    tel: "tel." + " " + "510 025 984",
    manager: "Kierownik:" + " " + "mgr Beata Świdzińska"
};
const lib3 = {
    adress: "Mysłowice-Larysz, ul. Laryska 102",
    hours: "Czynna poniedziałki i piątki w godz. 10.00 - 15.00.<br> Wtorki, środy, czwartki w godz. 12.00 - 17.00.<br> W soboty nieczynna.",
    tel: "tel." + " " + "0 32 2226-559",
    manager: "Kierownik:" + " " + "Nina Brodziak"
};

// 
function navPopOut() {
    responsiveNavbar.classList.toggle('nav-click-out');
}


function selectedValue() {
    var libValue = document.getElementById("libs").value;
    switch (libValue) {
        case "1":
            libAdress.innerHTML = lib1.adress;
            libHours.innerHTML = lib1.hours;
            libTel.innerHTML = lib1.tel;
            libManager.innerHTML = lib1.manager;
            break;
        case "2":
            libAdress.innerHTML = lib2.adress;
            libHours.innerHTML = lib2.hours;
            libTel.innerHTML = lib2.tel;
            libManager.innerHTML = lib2.manager;
            break;
        case "3":
            libAdress.innerHTML = lib3.adress;
            libHours.innerHTML = lib3.hours;
            libTel.innerHTML = lib3.tel;
            libManager.innerHTML = lib3.manager;
            break;
    }
};



//  slick
$(document).ready(function() {
    $('.books-carousel').slick({
        arrows: true,
        accesibility: true,
        infinite: true,
        variableWidth: true,
        focusOnSelect: true,
        swipeToSlide: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '.prev-btn',
        nextArrow: '.next-btn',
    });
});
$(document).ready(function() {
    $('.news-carousel').slick({
        arrows: true,
        accesibility: true,
        infinite: true,
        variableWidth: true,
        focusOnSelect: true,
        swipeToSlide: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '.prev-news-button',
        nextArrow: '.next-news-button',
    });
});