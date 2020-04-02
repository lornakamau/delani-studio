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
/*
$(document).ready(function() {
    $(".section2").hover(function() {
      $(".carousel-caption").show();
    }, function(){
    $(".carousel-caption").hide();
      });
  });*/
  $(document).ready(function() {
    $("div.image-frame").hover(function() {
        $("#name").addClass("mask flex-center rgba-red-strong");
    });
});
/* resets form 
$("button").on('click', function(){
    $('form').each(function(){
      this.reset();
    }); */