$(function() {
    // no dragstart img
    $("img, a").on("dragstart", function(event) { event.preventDefault(); });
});

//header-top
$("#open").click(function (e) {
    e.preventDefault();
    if (screen.width <= '768'){
        $(".magaz-dropdown").slideToggle();
    }
});



