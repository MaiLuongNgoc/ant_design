function goToElement(id) {
	var offset = $("#" + id).offset().top;
	$("html, body").animate({ scrollTop: offset });
}

function showAdvanceSearch() {
	$("#advance-search").fadeIn(100);
}

function hideAdvanceSearch() {
	$("#advance-search").fadeOut(100);
}