let body = document.body;
let ant = idCatch("anthena");
let antTwo = idCatch("anthena-two");
let capsule = idCatch("capsule");
let mainTank = idCatch("main-tank");
let mid = idCatch("mid");
let tank = idCatch("tank");
let engine = idCatch("engine");
let core = idCatch("core");
let fireContainer = idCatch("fire-container");
let liftBtn = idCatch("liftoff");
let btnOne = idCatch("btn-one");
let intro = idCatch("intro");
let plathform = idCatch("plathform");
let rocket = idCatch("rocket");
let halfModal = idCatch("half-modal");

rocket.style.display = "block";
plathform.style.display = "block";

ant.style.left = "22px";
antTwo.style.left = "23px";
capsule.style.left = "0px";
mainTank.style.left = "0px";
mid.style.left = "0px";
tank.style.left = "0px";
engine.style.left = "0px";
core.style.left = "13px";

//Intro fade in
setTimeout(() => {opacityPlus(intro);}, 500);

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
			z = 1;
		} else {
			z = 2;
		}

		let tempArr = [arg[i], z];
		shake(tempArr);
	}
}

//=========================================================

//engineStart
let fireOne = idCatch("fire-one");
let fireTwo = idCatch("fire-two");
let fireThree = idCatch("fire-three");
let fireFour = idCatch("fire-four");
let fireFive = idCatch("fire-five");
let fireSix = idCatch("fire-six");

let c = "-100px";
fireOne.style.bottom = c;
fireTwo.style.bottom = c;
fireThree.style.bottom = c;
fireFour.style.bottom = c;
fireFive.style.bottom = c;
fireSix.style.bottom = c;

function randomFire(obj, p){

	let m = setInterval(f, 5);
	let counter = 0;
	obj.style.bottom = -70*Math.round(Math.random());

	function f(){

		counter++;

		if((parseInt(obj.style.bottom) < -100) 
			|| (parseInt(obj.style.bottom) > -70)){

			obj.style.bottom = "-80px";
		} else {
			if(counter%30 == 0){
				p *= (-1);
			}

			obj.style.bottom = parseInt(obj.style.bottom) + p + "px";
		}
	}
}

function engineStart(...arg){

	for(let i = 0; i < arg.length; i++){
		let p = Math.round(Math.random()*3 + 1);
		randomFire(arg[i], p);
	}
}

//========================================================

//earthMover
let earth = idCatch("earth");
let mountainContainer = idCatch("mountain-container");

earth.style.bottom = "0px";
mountainContainer.style.bottom = "200px";

function earthMover(x, y){

	let m = setInterval(f, 20);
	let p = 3;
	let c = 0;

	function f(){
		if(c < -400){
			clearInterval(m);
		} else {
			x.style.bottom = parseInt(x.style.bottom) - p + "px";
			y.style.bottom = parseInt(y.style.bottom) - p + "px";
			c--;
		}
	}
}

//=========================================================

//SkyChange
body.style.backgroundColor = "rgb(135, 206, 235)";

function skyChange(obj){

	let m = setInterval(f, 20);

	let b = obj.style.backgroundColor.split(" ");
	let temp = (b[0]).split("(");
	b[0] = parseInt(temp[1]);
	b[1] = parseInt(b[1]);
	b[2] = parseInt(b[2]);
	let speedChange = [1, 1, 1];

	function f(){

		if((speedChange[0] == 0)&&(speedChange[1] == 0)
			&&(speedChange[2] == 0)){
			clearInterval(m);
		}

		for (var i = 0; i < speedChange.length; i++) {
			if(b[i] == 0){
				speedChange[0] = 0;
			}
		}

		for(let i = 0; i < speedChange.length; i++){
			b[i] -= speedChange[i];
		}

		obj.style.backgroundColor = "rgb("+b[0]+", "+b[1]+", "+b[2]+")";
	}
}

//=========================================================

//Explosion
explosionOne = idCatch("explosion-one");
explosionOne.style.height = "0px";
explosionOne.style.width = "0px";
explosionTwo = idCatch("explosion-two");
explosionTwo.style.height = "0px";
explosionTwo.style.width = "0px";
explosionThree = idCatch("explosion-three");
explosionThree.style.height = "0px";
explosionThree.style.width = "0px";
explosionFour = idCatch("explosion-four");
explosionFour.style.height = "0px";
explosionFour.style.width = "0px";

function explosion(obj, limit){
 	
 	obj.style.display = "block";
	let m = setInterval(f, 8);
	let p = limit/100 + 1;
	let C = 0;
	

	function f(){
		if(C > 400){
			if(cloudsGo === false) {
				cloudsGo = true;
				clouds(15);
			}
			opacityMinus(obj);
 			clearInterval(m);
		} else {
			obj.style.height = parseInt(obj.style.height)
							+ parseInt(Math.ceil(p)) + "px";
			obj.style.width = parseInt(obj.style.width)
							+ parseInt(Math.ceil(p)) + "px";
			C++;
		}
	}
}

let cloudsGo = false;

function bum(){
	explosion(explosionOne, 50);
	explosion(explosionTwo, 100);
	explosion(explosionThree, 50);
	explosion(explosionFour, 100);
}

function plathformFall(obj, p, x) {
	let deg = 0;
	let m = setInterval(fall, 30);

	function fall() {
		if(deg > 90) {
			clearInterval(m);
		} else {
			deg = deg + x;
			obj.style.transform = "rotate(" + ((p)*deg) + "deg)";
		}
	}
}

//===========================================================

//Clouds
let cloudId = [];
let cloudNum = 15;
let cloudColor = ["whitesmoke", "#d5f0f3", "#c5f2f7", "#e3fbff"];

for(let i = 1; i <= cloudNum; i++){

	let para = document.createElement("div");
	para.setAttribute("id", "cloud" + i);
	document.body.appendChild(para);
	cloudId[i-1] = idCatch("cloud" + i);
	cloudId[i-1].style.position = "absolute";
	cloudId[i-1].style.zIndex = 10 + (-1)**(i);
	cloudId[i-1].style.display = "none";
	myCloud(cloudId[i-1]);
	cloudId[i-1].style.left = Math.round(Math.random()*window.innerWidth) + "px";
	cloudId[i-1].style.zIndex = 10 + (-1)**(i);
}

let cloudsEnd = false;

function drop(x){

    var M = setInterval(func, 50);
    x.style.top = "-150px";

    function func(){

        let r = parseInt(x.style.top);
        let y = 10;

        if((cloudsEnd == true) && (r > window.innerHeight + 100)){
        	clearInterval(M);
        	removeElement(x);
        } else {

	        if(r > window.innerHeight + 100){
	            r = 0;
	            x.style.height = Math.round(Math.random()*150) + 50 + "px";
	            x.style.width = Math.round(Math.random()*100) + 50 + "px";
	            x.style.top = "-150px";
	            x.style.left = (window.innerWidth*Math.random()) + "px";
	        } else if(r >= -150){
	            r += y;
	            x.style.top = r + "px";
	        }
	    }
    }
}

function clouds(cloudNum){
	if(cloudNum > 0){
		setTimeout(function(){
			displayOn(cloudId[cloudNum-1]);
			drop(cloudId[cloudNum-1]);
			clouds(cloudNum-1);
		}, 300);
	}
}

function myCloud(c) {

	let t1 = pointCreation(c, 40, 40);
	let t2 = pointCreation(c, -40, 40);
	let c2 = pointCreation(c, 0, 60);
	let p1 = pointCreation(c2, 40, 40);
	let p2 = pointCreation(c2, -40, 40);

	for(let i = 0; i < 3; i++) {
		cloudCreation(c);
		cloudCreation(t1);
		cloudCreation(t2);
		let k = Math.round(Math.random()) ? 1 : -1;
		c2.style.top = Math.round(Math.random()*65)*k + "px";
		cloudCreation(c2);
		cloudCreation(p1);
		cloudCreation(p2);
	}


	function pointCreation(parent, top, left) {
		let el = document.createElement("div");
		parent.appendChild(el);
		el.style.position = "absolute";
		el.style.top = top + "px";
		el.style.left = left + "px";
		return el;
	}

	function cloudCreation(parent) {

		let el = document.createElement("div");
		parent.appendChild(el);

		el.style.position = "absolute";
		el.style.width = Math.round(Math.random()*60) + 30 + "px";
		el.style.height = Math.round(Math.random()*60) + 30 + "px";
		let p1 = Math.round(Math.random()) ? 1 : -1;
		let p2 = Math.round(Math.random()) ? 1 : -1;
		el.style.top = Math.round(Math.random()*20)*p1 + "px";
		el.style.left = Math.round(Math.random()*20)*p2 + "px";
		let par = Math.round(Math.random()*(cloudColor.length - 1));
		el.style.backgroundColor = cloudColor[par];
		el.style.borderRadius = "10px"; 
	}
}

//===========================================================

//Illusion of speed
function speedIllusion(thisManyLines) {

	let lineId = [];
	let mArr = [];

	for(let i = 1; i <= thisManyLines; i++){

	    let para = document.createElement("div");
	    para.setAttribute("id", "line" + i);
	    para.setAttribute("class", "line-cl");
	    document.body.appendChild(para);
	    lineId[i-1] = idCatch("line" + i);
	    lineId[i-1].style.left = Math.round(window.innerWidth*Math.random()) + "px";
	    lineId[i-1].style.height = Math.round(Math.random()*200) + 100 + "px";
	    lineId[i-1].style.width = Math.round(Math.random()*2) + 1 + "px";
	    lineId[i-1].style.zIndex = 30;
	    lineId[i-1].style.top = "-300px";

	}

	function drop(x, speedParametar){

    	var M = setInterval(f, 50);
	
    	function f(){
	
    	    let r = parseInt(x.style.top);
    	    let H = window.innerHeight;
	
		    if(r > H){
		        r = 0;
		        x.style.top = "-300px";
		        x.style.left = (window.innerWidth*Math.random()) + "px";
		    } else if(r >= -300){
		        r += speedParametar;
		        x.style.top = r + "px";
		    }
		}
    }

    for (let i = 0; i < thisManyLines; i++) {
    	mArr[i] = Math.round(Math.random()*30 + 40);
    }

    for (let i = 0; i < thisManyLines; i++) {
    	drop(lineId[i], mArr[i]);
    }
}


//===========================================================

//Stars
function starlight(){

	let starId = [];
	let thisManyStars = 300;

	for(let i = 1; i <= thisManyStars; i++){
	    let para = document.createElement("div");
	    para.setAttribute("id", "star" + i);
	    para.setAttribute("class", "star-cl");
	    document.body.appendChild(para);
	    starId[i] = idCatch("star" + i);
	    if ((i%6 == 0) && (Math.round(Math.random()))) {
	    	let p = Math.round(Math.random()*5) + 4;
	    	starId[i].style.boxShadow = "0px 0px "
	    		 + p + "px 2px white";
	    }
	}

	let allTheStars = document.getElementsByClassName("star-cl");

	function positionChange(x) {
	    x.style.top = Math.round(Math.random()*100) + "%";
	    x.style.left = Math.round(Math.random()*100) + "%";
	}

	for(let i = 0; i < allTheStars.length; i++){
	    positionChange(starId[i+1]);
	}
}


//===========================================================

//Sequence of events
function phaseOne(){

	displayOn(rocket, plathform);
	shakesAll(ant, antTwo, capsule, mainTank, mid,
		 tank, engine, core);
	plathformFall(document.getElementById("line-container-3"), -1, 0.5);

	setTimeout(function(){
		displayOn(core, fireContainer);
		engineStart(fireOne, fireTwo, fireThree, fireFour, 
			fireFive, fireSix);
		phaseTwo();
	}, 2000);
}

function phaseTwo(){
	
	bum();
	plathformFall(document.getElementById("line-container-1"), -1, 2);
	plathformFall(document.getElementById("line-container-2"), 1, 0.5);
	earthMover(mountainContainer, earth);
	
	setTimeout(function(){
		phaseThree();
	}, 12000);
}

function phaseThree(){
	cloudsEnd = true;
	setTimeout(() => {

		removeElement(earth);
		removeElement(mountainContainer);
		skyChange(body);
		starlight();
		speedIllusion(17);
		setTimeout(() => {
			halfModal.style.display = "block";
		}, 3000);

	}, 2500);
}

btnOne.addEventListener("click", () => {
	phaseOne();
	displayOff(intro);
})

function reloadPage() {
	window.location = window.location;
}

//========================================================

//Helper functions
function displayOff(...arg){
    for(let i = 0; i < arg.length; i++){
        arg[i].style.display = "none";
    }
}

function displayOn(...arg){
    for(let i = 0; i < arg.length; i++){
        arg[i].style.display = "block";
    }
}

function idCatch(id){
	return document.getElementById(id);
}

function removeElement(element){
    element.parentNode.removeChild(element);
}

function opacityPlus(x){
    var y = 0;
    var M = setInterval(opacityChange, 20);

    function opacityChange(){
        if(y > 1){
            clearInterval(M);
        } else {
            y += 0.01;
            x.style.opacity = y;
        }
    }
}

function opacityMinus(x){
    var y = 1;
    x.style.opacity = 1;
    var M = setInterval(opacityChange, 20);

    function opacityChange(){
        if(y <= 0){
        	displayOff(x);
            clearInterval(M);
        } else {
            y -= 0.01;
            x.style.opacity = y;
        }
    }
}