/**
 * Copyright (c) NAVER Corp.
 */

$(function() {
	var html = [];
	// make list
	for(var i=0; i<200; i++) {
		html.push("<li class='list check_visible'>#");
		html.push(i+1);
		html.push("</li>");
	}
	$("#content").html(html.join(""));
	var visibleView = new eg.Visible(document,{
		targetClass : "check_visible",
		expandSize : 0
	}).on("change", function(e) {
		console.log(e);
		// process visible elements
		$(e.visible).addClass("visible");
		// process invisible elements
		$(e.invisible).removeClass("visible");
	});
	// bind scroll event
	visibleView.observe(200);


	var visible = new eg.Visible("#view",{
		targetClass : "check_visible",
		expandSize : 0
	}).on("change", function(e) {
		// process visible elements
		$(e.visible).addClass("visible");
		// process invisible elements
		$(e.invisible).removeClass("visible");
	});
	//visible.observe({delay: 200});

	window.vv = visibleView;
	window.v = visible;
});
