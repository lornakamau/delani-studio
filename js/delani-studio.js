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
    $(".view").hover(function() {
      $(".name").show();
    }, function(){
    $(".name").hide();
      });
  });

  function sendMsg(){
    var name = $("#mce-FNAME").val();
    var email =$("#mce-EMAIL").val();
    var message=$("#mce-MMERGE2").val();
    if (name === "" || email === ""){
      alert("Please fill in the form!")
    } else{
    alert("Thank you " + name +  "! Your message has been received")
  };
  };