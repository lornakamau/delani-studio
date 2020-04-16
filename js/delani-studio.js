$(document).ready(function () { //allow for toggling between icon and description
	$(".design").click(function () {
		$(".design-icon").toggle();
		$(".design-description").toggle();
	});
	$(".development").click(function () {
		$(".development-icon").toggle();
		$(".development-description").toggle();
	});
	$(".product").click(function () {
		$(".product-icon").toggle();
		$(".product-description").toggle();
	});
});

$(document).ready(function () { //hover effect for portfolio images
	$(".view").hover(function () {
		$(".name").show();
	}, function () {
		$(".name").hide();
	});
});

function sendMsg() {
	var name = $("#mce-FNAME").val();
	var email = $("#mce-EMAIL").val();
	var message = $("#mce-MMERGE2").val();
	if (name === "" || email === "") {
		alert("Please fill in all fields!")
	} else {
		alert("Thank you " + name + "! Your message has been received. We shall get back to you shortly.");
		document.getElementById("mc-embedded-subscribe-form").reset();
	};
};