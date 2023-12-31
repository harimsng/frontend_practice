const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ["images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg", "images/pic4.jpg", "images/pic5.jpg"];

/* Declaring the alternative text for each image file */
const images_alt = ["blue eye", "stone", "flower", "egyptian wall painting", "butterfly"];

/* Looping through images */
for (let index = 0; index < images.length; ++index) {
	const imgElem = document.createElement("img");

	imgElem.setAttribute('src', images[index]);
	imgElem.setAttribute('alt', images_alt[index]);
	thumbBar.appendChild(imgElem);
}
thumbBar.addEventListener("click", (event) => {
	displayedImage.setAttribute('src', event.target.getAttribute('src'));
	displayedImage.setAttribute('alt', event.target.getAttribute('alt'));
});

btn.addEventListener("click", () => {
	if (btn.textContent === "Darken") {
		overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
		btn.textContent = "Brighten";
	}
	else {
		overlay.style.backgroundColor = "rgba(0,0,0,0)";
		btn.textContent = "Darken";
	}
});

/* Wiring up the Darken/Lighten button */
