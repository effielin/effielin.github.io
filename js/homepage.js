// function whenThePageIsReadyToRunMe() {
// 	alert("this worked!");
// }

// function makeAlert(message) {
// 	alert(message);
// }


function makePost(text) {
	var outterDiv = document.createElement("div");
	outterDiv.className = "col offset-l3 l6 offset-m2 m8 s12";
	var cardDiv = document.createElement("div");
	cardDiv.className = "card";
	var cardContentDiv = document.createElement("div");
	cardContentDiv.className = "card-content";
	var textNode = document.createTextNode(text);
	cardContentDiv.appendChild(textNode);
	cardDiv.appendChild(cardContentDiv);
	outterDiv.appendChild(cardDiv);
	return outterDiv
}


document.getElementById("post-row")
// document.getElementByClassName("")


$(document).ready(function(){
	// alert("this worked!");
	// $(".ball").click(function(){
	// 	var originalMargin = $(this).css("margin-left");
	// 	// console.log(originalMargin);
	// 	// console.log(originalMargin + 20);
	// 	var marginNum = originalMargin.slice(0, originalMargin.length - 2);

	// 	var newMargin = parseInt(marginNum) + 20;

	// 	$(this).css("margin-left", newMargin + "px");
	// 	// console.log($(this.css("margin-left")));
	// })


	// $(".tab").click(function () {
	// 	$(".content").hide();
	// 	var clickedTab = $(this).attr("data-contentid");
	// 	$(clickedTab).show();
	// })


	$(".button-collapse").sideNav();

	$("#makePostButton").click(function(){
		var newText = $(".materialize-textarea").val();
		if (!newText)
		var newPost = makePost(newText);
		var postRow = document.getElementById("post-row");
		// postRow.appendChild(newPost);
		postRow.insertBefore(newPost, postRow.firstChild);
	});
});








