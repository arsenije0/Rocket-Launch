let ant = idCatch("anthena");
let antTwo = idCatch("anthena-two");
let capsule = idCatch("capsule");
let mainTank = idCatch("main-tank");
let mid = idCatch("mid");
let tank = idCatch("tank");
let engine = idCatch("engine");
let core = idCatch("core");

function idCatch(id){
	return document.getElementById(id);
}

ant.style.left = "35px";
antTwo.style.left = "30px";
capsule.style.left = "-5px";
mainTank.style.left = "-5px";
mid.style.left = "-3px";
tank.style.left = "-5px";
engine.style.left = "-5px";
core.style.left = "15px";

shakesAll(ant, antTwo, capsule, mainTank, mid, tank, engine, core);

function shake([obj, z]){
	let m = setInterval(f, 100);
	let turn = true;
	let x = z;

	function f(){
		if(turn === true){
			obj.style.left = parseInt(obj.style.left) + z + "px";
			turn = false;
			z = -x;
		} else {
			obj.style.left = parseInt(obj.style.left) + z + "px";
			turn = true;
			z = x;
		}
	}
}

function shakesAll(...arg){

	let z = 0;

	for(let i = 0; i < arg.length; i++){

		if(i%2 == 0){
			z = 3;
		} else {
			z = 4;
		}

		let tempArr = [arg[i], z];
		shake(tempArr);
	}
}


/*========================================================*/

let rocket = idCatch("rocket");
let activeRocket = false;
rocket.style.bottom = "200px";

function liftoff(obj) {

 	let m  = setInterval(f, 20);
 	let z = 3;

 	function f(){
 		if(activeRocket === false) {
 			obj.style.bottom = "200px";
 			clearInterval(m);
 		} else {
	 		if(parseInt(obj.style.bottom) > window.innerHeight + 150) {
	 			obj.style.bottom = "-520px";// 520px ~ height of the rocket
	 		}
	 		obj.style.bottom = parseInt(obj.style.bottom) + z + "px";
	 	}
 	}
}

function toggleRocket(btn) {
	if(activeRocket === true) {
		activeRocket = false;
		btn.innerHTML = "LIFTOFF";
	} else {
		activeRocket = true;
		liftoff(rocket);
		btn.innerHTML = "RESET";
	}
}

/*=========================================================*/

//Fire

let fireOne = idCatch("fire-one");
let fireTwo = idCatch("fire-two");
let fireThree = idCatch("fire-three");
let fireFour = idCatch("fire-four");
let fireFive = idCatch("fire-five");
let fireSix = idCatch("fire-six");

fireOne.style.bottom = "-145px";
fireTwo.style.bottom = "-145px";
fireThree.style.bottom = "-145px";
fireFour.style.bottom = "-145px";
fireFive.style.bottom = "-145px";
fireSix.style.bottom = "-145px";

function randomFire(obj, p){

	let m = setInterval(f, 5);
	let counter = 0;
	obj.style.bottom = -100*Math.round(Math.random());

	function f(){

		counter++;

		if((parseInt(obj.style.bottom) < -145) 
			|| (parseInt(obj.style.bottom) > -30)){

			obj.style.bottom = "-130px";
		} else {
			if(counter%20 == 0){
				p *= (-1);
			}

			obj.style.bottom = parseInt(obj.style.bottom) + p + "px";
		}
	}
}

function engineStart(...arg){

	for(let i = 0; i < arg.length; i++){
		let p = Math.round(Math.random()*4 + 1);
		randomFire(arg[i], 1);
	}
}

engineStart(fireOne, fireTwo, fireThree, fireFour, fireFive, fireSix);