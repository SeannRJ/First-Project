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

const sections = document.querySelectorAll('.section');
let currentIndex = 0;

document.querySelector('.scroll-down').addEventListener('click', function() {
  if (currentIndex < sections.length - 1) {
    currentIndex++;
    sections[currentIndex].scrollIntoView({behavior: 'smooth'});
  }
});

document.querySelector('.scroll-up').addEventListener('click', function() {
  if (currentIndex > 0) {
    currentIndex--;
    sections[currentIndex].scrollIntoView({behavior: 'smooth'});
  }
});