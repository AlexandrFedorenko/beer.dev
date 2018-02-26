$(function () {
    // no dragstart img
    $("img, a").on("dragstart", function (event) {
        event.preventDefault();
    });
});

//header-top
$(".open").click(function (e) {
    e.preventDefault();
    if (screen.width <= '768') {
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
$('.owl-main').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplaySpeed: 300
});

//slider 2

$('.owl-items').owlCarousel({
    nav: true,
    navText: ["", ""],
    loop: true,

    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            autoplay: true,
            autoplaySpeed: 300,
            nav: false
        },
        992: {
            items: 1,
            autoplay: true,
            autoplaySpeed: 300,
            nav: false
        },
        1000: {
            nav: true,
            items: 2
        }
    }
});

// button click to up
$(".to-top").on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),

        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});
// callback form
$('.popup-with-form').magnificPopup({
    type: 'inline',
    focus: '#name'
});

//popups

$(document).ready(function () {

    getAge();

    function getAge() {
        var localValue = sessionStorage.getItem('myKey');

        if (localValue != 1) {
            $.magnificPopup.open({
                items: {
                    src: '#form-popup2',
                    type: 'inline'
                },
                closeBtnInside: true
            });
        }
    }
});

function closeMod(e) {
    e.preventDefault();
    window.top.close();
}

function closeMod2(e) {
    e.preventDefault();
    var myValue = 1;
    sessionStorage.setItem('myKey', myValue);
    $.magnificPopup.close();
}

$('.butons-right').click(closeMod);
$('.butons-left').click(closeMod2);


//item img popup
$('.image-popup').magnificPopup({
    type: 'image'
});

// item input
var inpText = document.querySelector('.inp-item');
var inpTextCount = 0;

function setMinus() {
    if (inpTextCount <= 0) {
        inpText.innerHTML = "0";
    } else {
        inpTextCount--;
        inpText.value = inpTextCount;
    }
}

function setPlus() {
    inpTextCount++;
    inpText.value = inpTextCount;
}


//filter slider
$("#slider2").slider({
    min: 0,
    max: 10,
    values: [2, 5],
    range: true,
    stop: function (event, ui) {
        $("input#minSmol").val($("#slider2").slider("values", 0));
        $("input#maxSmol").val($("#slider2").slider("values", 1));
    },
    slide: function (event, ui) {
        $("input#minSmol").val($("#slider2").slider("values", 0));
        $("input#maxSmol").val($("#slider2").slider("values", 1));
    }
});
$("#slider").slider({
    min: 0,
    max: 1000,
    values: [50, 500],
    range: true,
    stop: function (event, ui) {
        $("input#minCost").val($("#slider").slider("values", 0));
        $("input#maxCost").val($("#slider").slider("values", 1));
    },
    slide: function (event, ui) {
        $("input#minCost").val($("#slider").slider("values", 0));
        $("input#maxCost").val($("#slider").slider("values", 1));
    }
});

