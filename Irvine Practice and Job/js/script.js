var oldYPos = window.pageYOffset;
const topbar = document.getElementById("topbar");
var previousDirection = "up"


const getScrollDirection = () => {
	const currentYPos = window.pageYOffset; //Get current Y position
	let direcion = ""

	direcion = oldYPos > currentYPos ? "up" : "down"; //Check scroll down or up 
	
	oldYPos = currentYPos; //Save current to old Y position.
	
	return {direcion, currentYPos};
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
	
	
	if (scrollDirChanged){
		checkPoint = window.pageYOffset;
		calculate = true;
		console.log("TEST: DIRECTION CHNAGED")
	}
	
	if (calculate && currentY - checkPoint > +CONSTANT_CHANGE_AMOUNT){
//		topbar.style.transform = "translateY(-100%)"
		
		topbar.style.opacity = 0;
		topbar.style.pointerEvents = "none";
		calculate = false;
	}
	else if (calculate && currentY - checkPoint < -CONSTANT_CHANGE_AMOUNT){
//		topbar.style.transform = "translateY(0%)"
		
		topbar.style.opacity = 1;
		topbar.style.pointerEvents = "auto";
		calculate = false;
	}
	
	previousDirection = direction;
});