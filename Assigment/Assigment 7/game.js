window.onload = pageLoad;

function pageLoad(){
	document.getElementById('start').onclick = startGame;
}

function startGame(){

	var numbox = parseInt(document.getElementById('numbox').value);
	
	if (Number.isInteger(numbox) && numbox > 0) {
		alert("Ready");
		clearScreen();
		addBox();
		timeStart();
	}else{
		alert("Please enter only positive integers!");
		document.getElementById("numbox").value = "";
	}
}

function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; // 0.5 minute
	var second = min*60; 
	var timeLeft = second;
	var clock = document.getElementById('clock');
	clock.innerHTML = timeLeft;
	//setting timer using setInterval function
	timer = setInterval(timeCount, TIMER_TICK);
	
	function timeCount(){
		var allbox = document.querySelectorAll("#layer div");
		// จัดการเกี่ยวกับเวลา เช่น ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ 
		if (allbox.length > 0) {
			timeLeft--;
			clock.innerHTML = timeLeft;
		}

		// ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่จะขึ้นว่า You win!
		// ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่ จะบอกว่า Game over และทำการ clear screen
        if (allbox.length === 0) {
            clearInterval(timer);
			clearScreen();
            alert("You win!");
        } else if (timeLeft <= 0) {
            clearInterval(timer);
			clearScreen();
            alert("Game over!");
        }
	}
}

function addBox(){
	// สร้างกล่องตาม input ที่เราใส่ 
	var numbox = parseInt(document.getElementById('numbox').value);
	var gameLayer = document.getElementById('layer');
	var colorDrop = document.getElementById('color').value;
	for (var i =0; i<numbox;i++){
		var tempbox = document.createElement('div');
		tempbox.className = 'square ' + colorDrop;
		tempbox.id = "box"+i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		//add element to HTML node
		gameLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}

function bindBox(box){
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function(){
		box.remove();
	}
}

function clearScreen(){
	// ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ
	var allbox = document.querySelectorAll("#layer div");

	//delete all  div
	for (var i=0;i<allbox.length;i++){
		allbox[i].remove();
	}
}




