// By: trinitysenpai 
var redLight = document.querySelector(".red");
var orangeLight = document.querySelector(".orange");
var greenLight = document.querySelector(".green");

function lightCycle() {
	turn_off_allLights(); //? turn off all lights
	turn_on_redLight();
	setTimeout(() => {
		turn_off_redLight();
		turn_on_orangeLight();
	}, 2000);

	setTimeout(() => {
		turn_off_orangeLight();
		turn_on_greenLight();
	}, 4000);

	setTimeout(() => {
		lightCycle(); //repeat the function(recursion)
	}, 6000);
}

//! functions to turn on lights
function turn_on_redLight() {
	redLight.style.opacity = 1;
	redLight.style.filter = "brightness(120)";
}

function turn_on_orangeLight() {
	orangeLight.style.opacity = 1;
	orangeLight.style.filter = "brightness(120)";
}

function turn_on_greenLight() {
	greenLight.style.opacity = 1;
	greenLight.style.filter = "brightness(120)";
}

//! function to turn off lights
function turn_off_redLight() {
	redLight.style.opacity = 0.8;
	redLight.style.filter = "brightness(0.4)";
}

function turn_off_orangeLight() {
	orangeLight.style.opacity = 0.8;
	orangeLight.style.filter = "brightness(0.4)";
}

function turn_off_greenLight() {
	greenLight.style.opacity = 0.8;
	greenLight.style.filter = "brightness(0.4)";
}

function turn_off_allLights() {
	turn_off_redLight();
	turn_off_orangeLight();
	turn_off_greenLight();
}

//call function to start code
lightCycle();