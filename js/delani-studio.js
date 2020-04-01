$(document).ready(function() {
    $(".design").click(function() {
        $(".design-icon").toggle();
        $(".design-description").toggle();
    });
    $(".development").click(function() {
        $(".development-icon").toggle();
        $(".development-description").toggle();
    });
    $(".product").click(function() {
        $(".product-icon").toggle();
        $(".product-description").toggle();
    });
});
$(document).ready(function() {
    $(".work1").hover(function() {
        $("#name1").addClass("mask flex-center rgba-black-light");
    });
    $("div.image-frame").hover(function() {
        $(".classAdd2").addClass("mask flex-center rgba-blue-light");
    });
    $("div.image-frame").hover(function() {
        $(".classAdd2").addClass("mask flex-center rgba-blue-light");
    });
});
