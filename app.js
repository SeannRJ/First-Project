const colorSwapButton = document.querySelector(".color-swap-button");

colorSwapButton.addEventListener("click", function() {
	const body = document.querySelectorAll("body")[0];

	const currentBgColor = body.style.backgroundColor;
	if (currentBgColor === "rgb(165, 165, 165)") {
		body.style.backgroundColor = "#000000";
		body.style.color = "#A5A5A5";
	} else {
		body.style.backgroundColor = "#A5A5A5";
		body.style.color = "#000000";
	}
});
