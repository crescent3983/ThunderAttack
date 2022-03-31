flight=new Array();
enemy_fire=new Array();

/*Enemy_fire*/
var enemyfire_on = function(it){
	flight[it] = document.getElementById("s"+it);
	if(en && flight[it] != null){
		document.getElementById("enemy_fire").innerHTML += "<span id='e"+(e++)+"' style='position:absolute; color:red;'>∥</span>"
		initenemyfire(e-1,parseInt(flight[it].style.left),parseInt(flight[it].style.top));
	}
	if(flight[it] != null)setTimeout("enemyfire_on('"+it+"')",2200);
}

var initenemyfire = function(it,x,y){
	
	enemy_fire[it] = document.getElementById("e"+it);
	enemy_fire[it].style.fontSize = "3vmin";
	enemy_fire[it].style.fontWeight = "bold";
	enemy_fire[it].style.fontFamily = "Arial";
	enemy_fire[it].style.zIndex = 1000;
		
	enemy_fire[it].style.left = (x + 1.5) + "%";
	enemy_fire[it].style.top = (y + 2) + "%";	
};

var move_enemyfire = function(){
	
	if(en){
		for (var i=0 ; i < e ; i++){
			
			enemy_fire[i] = document.getElementById("e"+i);
			if(enemy_fire[i] == null)continue;	
			if(parseInt(enemy_fire[i].style.top) > 100) remove("e"+i);
			enemy_fire[i].style.top = (parseInt(enemy_fire[i].style.top) + 2) + "%";
			if(Math.abs(parseInt(enemy_fire[i].style.top) - (parseInt(mine.style.top)+5)) < 5 && Math.abs(parseInt(enemy_fire[i].style.left) - (parseInt(mine.style.left)+5)) < 5){
				enemy_fire[i].style.top = "110%";
				hp.innerHTML -= (20-guard);
				if(parseInt(hp.innerHTML) <= 0){
					document.getElementById("hint").innerHTML = "Game Over";
					GoToEnd();
				}
				mine.src = "./image/game/injury.gif"
				setTimeout("document.getElementById('mine').src = './image/game/mine_"+color+".gif'",150);
			}
			
		}
	}
	setTimeout("move_enemyfire()",200);
}


/*Create_flight*/
var Flight_create = function(){
	if(en){
		document.getElementById("plane").innerHTML += "<img id='s"+f+"' life='20' style='position:absolute; height :18%; top:"+20+"'></img>";
	    document.getElementById("s"+(f++)).src="./image/game/enemy.gif";
		initflight(f-1);
		enemyfire_on(f-1);
	}
	if(timer_1) clearTimeout(timer_1);
	timer_1 = setTimeout("Flight_create()",3000);
}

var initflight = function(it){
	
	flight[it] = document.getElementById("s"+it);
	flight[it].style.left = (Math.random()*(80)+5) + "%";
	flight[it].style.top = (Math.random()*(10)+5) + "%";
	flight[it].style.zIndex=1000;
		
}

var moveflight = function(){
	
	if(en){
		for (var i=0 ; i < f ; i++){
			
			flight[i] = document.getElementById("s"+i);
			if(flight[i] == null || flight[i].src == "./image/game/explode.gif")continue;
			if(parseInt(flight[i].style.top) > 80){
				remove("s"+i);
				continue;
			}

			var speed=0.3;
			
			if(Math.round(Math.random()) == 1 && parseInt(flight[i].style.left) < 90){
				flight[i].style.left = (parseFloat(flight[i].style.left) + speed) + "%";
				setTimeout(function(i) {flight[i].style.left = (parseFloat(flight[i].style.left) + speed) + "%";},50,i);
				setTimeout(function(i) {flight[i].style.left = (parseFloat(flight[i].style.left) + speed) + "%";},100,i);
				setTimeout(function(i) {flight[i].style.left = (parseFloat(flight[i].style.left) + speed) + "%";},150,i);
				setTimeout(function(i) {flight[i].style.left = (parseFloat(flight[i].style.left) + speed) + "%";},200,i);
				setTimeout(function(i) {flight[i].style.left = (parseFloat(flight[i].style.left) + speed) + "%";},250,i);
				setTimeout(function(i) {flight[i].style.left = (parseFloat(flight[i].style.left) + speed) + "%";},300,i);
				setTimeout(function(i) {flight[i].style.left = (parseFloat(flight[i].style.left) + speed) + "%";},350,i);
				setTimeout(function(i) {flight[i].style.left = (parseFloat(flight[i].style.left) + speed) + "%";},400,i);
				setTimeout(function(i) {flight[i].style.left = (parseFloat(flight[i].style.left) + speed) + "%";},450,i);
			}
			else if(parseInt(flight[i].style.left) > 10){
				flight[i].style.left = (parseInt(flight[i].style.left) - speed) + "%";
				setTimeout(function(i) {flight[i].style.left = (parseFloat(flight[i].style.left) - speed) + "%";},50,i);
				setTimeout(function(i) {flight[i].style.left = (parseFloat(flight[i].style.left) - speed) + "%";},100,i);
				setTimeout(function(i) {flight[i].style.left = (parseFloat(flight[i].style.left) - speed) + "%";},150,i);
				setTimeout(function(i) {flight[i].style.left = (parseFloat(flight[i].style.left) - speed) + "%";},200,i);
				setTimeout(function(i) {flight[i].style.left = (parseFloat(flight[i].style.left) - speed) + "%";},250,i);
				setTimeout(function(i) {flight[i].style.left = (parseFloat(flight[i].style.left) - speed) + "%";},300,i);
				setTimeout(function(i) {flight[i].style.left = (parseFloat(flight[i].style.left) - speed) + "%";},350,i);
				setTimeout(function(i) {flight[i].style.left = (parseFloat(flight[i].style.left) - speed) + "%";},400,i);
				setTimeout(function(i) {flight[i].style.left = (parseFloat(flight[i].style.left) - speed) + "%";},450,i);
			}
			if(Math.round(Math.random()) == 1){
				flight[i].style.top = (parseInt(flight[i].style.top) + speed) + "%";
				setTimeout(function(i) {flight[i].style.top = (parseFloat(flight[i].style.top) + speed) + "%";},50,i);
				setTimeout(function(i) {flight[i].style.top = (parseFloat(flight[i].style.top) + speed) + "%";},100,i);
				setTimeout(function(i) {flight[i].style.top = (parseFloat(flight[i].style.top) + speed) + "%";},150,i);
				setTimeout(function(i) {flight[i].style.top = (parseFloat(flight[i].style.top) + speed) + "%";},200,i);
				setTimeout(function(i) {flight[i].style.top = (parseFloat(flight[i].style.top) + speed) + "%";},250,i);
				setTimeout(function(i) {flight[i].style.top = (parseFloat(flight[i].style.top) + speed) + "%";},300,i);
				setTimeout(function(i) {flight[i].style.top = (parseFloat(flight[i].style.top) + speed) + "%";},350,i);
				setTimeout(function(i) {flight[i].style.top = (parseFloat(flight[i].style.top) + speed) + "%";},400,i);
				setTimeout(function(i) {flight[i].style.top = (parseFloat(flight[i].style.top) + speed) + "%";},450,i);
			}
			else if(parseInt(flight[i].style.top) > 10){
				flight[i].style.top = (parseInt(flight[i].style.top) - speed) + "%";
				setTimeout(function(i) {flight[i].style.top = (parseFloat(flight[i].style.top) - speed) + "%";},50,i);
				setTimeout(function(i) {flight[i].style.top = (parseFloat(flight[i].style.top) - speed) + "%";},100,i);
				setTimeout(function(i) {flight[i].style.top = (parseFloat(flight[i].style.top) - speed) + "%";},150,i);
				setTimeout(function(i) {flight[i].style.top = (parseFloat(flight[i].style.top) - speed) + "%";},200,i);
				setTimeout(function(i) {flight[i].style.top = (parseFloat(flight[i].style.top) - speed) + "%";},250,i);
				setTimeout(function(i) {flight[i].style.top = (parseFloat(flight[i].style.top) - speed) + "%";},300,i);
				setTimeout(function(i) {flight[i].style.top = (parseFloat(flight[i].style.top) - speed) + "%";},350,i);
				setTimeout(function(i) {flight[i].style.top = (parseFloat(flight[i].style.top) - speed) + "%";},400,i);
				setTimeout(function(i) {flight[i].style.top = (parseFloat(flight[i].style.top) - speed) + "%";},450,i);
			}
			
		}
	}
	setTimeout("moveflight()",300);
}