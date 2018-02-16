$(function() {
    // no dragstart img
    $("img, a").on("dragstart", function(event) { event.preventDefault(); });
});

//header-top
$(".open").click(function (e) {
    e.preventDefault();
    if (screen.width <= '768'){
        $(this).find(".magaz-dropdown").slideToggle();
    }
});

//burger
$(".burger-menu").click(function () {
    $(this).toggleClass("menu-on");
    $('.menu').slideToggle();
    $('.header').toggleClass('bg');
});

//slider main
$('.owl-carousel').owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplaySpeed:300
})
