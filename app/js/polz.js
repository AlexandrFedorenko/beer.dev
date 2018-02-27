//filter slider
$("#slider2").slider({
    min: 0,
    max: 20,
    values: [3, 16],
    range: true,
    stop: function (event, ui) {
        $("#minSmol").html($("#slider2").slider("values", 0));
        $("#maxSmol").html($("#slider2").slider("values", 1));
    },
    slide: function (event, ui) {
        $("#minSmol").html($("#slider2").slider("values", 0));
        $("#maxSmol").html($("#slider2").slider("values", 1));
    }
});
$("#slider").slider({
    animate: true,
    min: 0,
    max: 10000,
    values: [300, 5000],
    range: true,
    stop: function (event, ui) {
        $("#minCost").html($("#slider").slider("values", 0));
        $("#maxCost").html($("#slider").slider("values", 1));
    },
    slide: function (event, ui) {
        $("#minCost").html($("#slider").slider("values", 0));
        $("#maxCost").html($("#slider").slider("values", 1));
    }
});