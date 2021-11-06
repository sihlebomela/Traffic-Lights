// By: trinitysenpai 
let redLight = document.querySelector(".red");
let orangeLight = document.querySelector(".orange");
let greenLight = document.querySelector(".green");
let lights = [redLight, orangeLight, greenLight];

function lightCycle() {
	turnOffAllLights(); //? turn off all lights 
	turnOnLight(redLight);
	setTimeout(() => {
		turnOffLight(redLight);
		turnOnLight(orangeLight);
	}, 2000);

	setTimeout(() => {
		turnOffLight(orangeLight);
		turnOnLight(greenLight);
	}, 4000);

	setTimeout(() => {
		lightCycle(); //repeat the function(recursion)
	}, 6000);
}

function turnOffAllLights() {
	lights.forEach(light => {
		turnOffLight(light);
	})
}

function turnOffLight(light) {
	light.style.opacity = 0.8;
	light.style.filter = "brightness(0.4)";
}

function turnOnLight(light) {
	light.style.opacity = 1;
	light.style.filter = "brightness(120)";
}

//call function to start code
lightCycle();