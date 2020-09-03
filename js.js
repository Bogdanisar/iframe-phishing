
let displayedURL = "https://www.amtso.org/check-desktop-phishing-page/";

let urlParams = new URLSearchParams(window.location.search);
if (urlParams.has("URL")) {
	displayedURL = urlParams.get("URL");
}

console.log(displayedURL);

document.addEventListener("DOMContentLoaded", function(event) {
	document.getElementById("main-iframe").src = displayedURL;
});


