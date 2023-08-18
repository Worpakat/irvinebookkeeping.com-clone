/*___________MAX-WIDTH-ASSIGNING____________*/
const stepsMainContainer = document.querySelector('.steps-main-cta');
const stepsContainer = stepsMainContainer.querySelector('.steps-cta');
const explanationContainer = stepsMainContainer.querySelector('.explanation-cta');

const stepsContainerWidth = stepsContainer.offsetWidth;
stepsMainContainer.style.maxWidth = `${stepsContainerWidth}px`;
/*We made steps container's width to max width of all steps container*/


for (let i = 1; i < stepsContainer.children.length; i++) {
    stepsContainer.children[i].classList.toggle("clicked");
}

var previousSelection = stepsContainer.children[0]

stepsContainer.addEventListener("click", (event) => {
    target = event.target;

    if (target.tagName !== "LI") {
        return;
    }

    previousSelection.classList.toggle("clicked");
    explanationContainer.children[previousSelection.innerHTML[0] - 1].style.display = "none";

    target.classList.toggle("clicked");
    explanationContainer.children[target.innerHTML[0] - 1].style.display = "flex";
    
    previousSelection = target;
})
/*
.getting-started .steps-main-cta .steps-cta .clicked{ 
	border-top: 5px solid black;
	color: black;
}

We make a helper class: "clicked". And write top css part. At top click event code, we change 
selected and unselected steps border attributes by toggling on/off this class. All 4 step have this helper class. 
*/