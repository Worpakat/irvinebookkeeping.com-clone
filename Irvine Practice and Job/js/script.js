var oldYPos = window.scrollY;
const topbar = document.getElementById("topbar");
var previousDirection = "up"


const getScrollDirection = () => {
	const currentYPos = window.scrollY; //Get current Y position
	let direcion = ""

	direcion = oldYPos > currentYPos ? "up" : "down"; //Check scroll down or up 

	oldYPos = currentYPos; //Save current to old Y position.

	return { direcion, currentYPos };
}

var checkPoint = 0
var calculate = false;
const CONSTANT_CHANGE_AMOUNT = 250;

window.addEventListener("scroll", () => {
	/*This method identifies scroll direction. Calculates if topbar should be visible or hidden
	and does that.*/
	const returnValues = getScrollDirection();
	currentY = returnValues.currentYPos;
	direction = returnValues.direcion;

	const scrollDirChanged = direction == previousDirection ? false : true;


	if (scrollDirChanged) {
		checkPoint = window.scrollY;
		calculate = true;
	}

	if (calculate && currentY - checkPoint > +CONSTANT_CHANGE_AMOUNT) {
		//		topbar.style.transform = "translateY(-100%)"

		topbar.style.opacity = 0;
		topbar.style.pointerEvents = "none"; //Disable interaction.
		calculate = false;
	}
	else if (calculate && currentY - checkPoint < -CONSTANT_CHANGE_AMOUNT) {
		//		topbar.style.transform = "translateY(0%)"

		topbar.style.opacity = 1;
		topbar.style.pointerEvents = "auto"; //Enable interaction.
		calculate = false;
	}

	previousDirection = direction;
});



//==================================================================================================================
/*________________FIXED GO UP BUTTON__________*/

const goUpBtn = document.getElementById("go_up_btn")

function scrollToTop(speed) {
	topbar.style.opacity = 1;
	topbar.style.pointerEvents = "auto"; 
	
	const currentPosition = window.scollY;
	const distance = currentPosition;
	const interval = 10; // Adjust the interval duration (ms) as needed
	const increment = speed * (interval / 1000); // Calculate increment per interval
	
	const scrollInterval = setInterval(function () {
		if (window.scrollY <= 0) {
			clearInterval(scrollInterval); // Stop the interval when reaching the top
		}
		else {
			window.scrollBy(0, -increment);
		}
	}, interval);
}

goUpBtn.addEventListener("click", () => {
	scrollToTop(2000);
})