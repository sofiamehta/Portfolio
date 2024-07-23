const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 

hamburger.addEventListener('click', function () { 
	const hamIcon = this.querySelector('.hamburger-icon'); 
	const crossIcon = this.querySelector('.cross-icon'); 
	if (hamIcon.style.display === "none") { 
		hamIcon.style.display = "inline-block"
		menu.style.display = "none"
		crossIcon.style.display = "none"
	} 
	else { 
		crossIcon.style.display = "inline-block"
		hamIcon.style.display = "none"
		menu.style.display = "block"
	} 
}); 

// Select the heading element
const myHeading = document.getElementById('myHeading');

// Function to add fade-in animation
function fadeIn(element) {
  let opacity = 0;
  const interval = setInterval(() => {
    if (opacity < 1) {
      opacity += 0.1;
      element.style.opacity = opacity;
    } else {
      clearInterval(interval);
    }
  }, 100);
}

