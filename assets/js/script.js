// OWL carousel 
$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})
$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 940) {
            $(".category-menu").css("background", "#EEEEEE");
        } else {
            $(".category-menu").css("background", "transparent");
        }
    });
});
// ...start-price-onclick...
function pricing_annual() {
    document.getElementById("btn-lifetime").style.color = "black";
    document.getElementById("btn-lifetime").style.background = "transparent";
    document.getElementById("btn-annual").style.color = "white";
    document.getElementById("btn-annual").style.background = "#303841";
    document.getElementById("annual").style.display = "inherit";
    document.getElementById("lifetime").style.display = "none";
}
function pricing_lifetime() {
    document.getElementById("btn-lifetime").style.color = "white";
    document.getElementById("btn-lifetime").style.background = "#303841";
    document.getElementById("btn-annual").style.color = "black";
    document.getElementById("btn-annual").style.background = "transparent";
    document.getElementById("annual").style.display = "none";
    document.getElementById("lifetime").style.display = "inherit";
}
// ...end-price-onclick...