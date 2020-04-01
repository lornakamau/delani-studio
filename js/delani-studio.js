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
