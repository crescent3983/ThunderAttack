flight_2=new Array();
enemy_fire_2=new Array();

/*Enemy_fire_2*/
var enemyfire_on_2 = function(it){
	flight_2[it] = document.getElementById("s2_"+it);
	if(en && flight_2[it] != null){
		document.getElementById("enemy_fire_2").innerHTML += "<span id='e2_"+(e_2++)+"'style='position:absolute; color: orchid;'>▼</span>"
		initenemyfire_2(e_2-1,parseFloat(flight_2[it].style.left),parseFloat(flight_2[it].style.top));
	}
	if(flight_2[it] != null)setTimeout("enemyfire_on_2('"+it+"')",1800);
}

var initenemyfire_2 = function(it,x,y){
	
	enemy_fire_2[it] = document.getElementById("e2_"+it);
	enemy_fire_2[it].style.fontSize = "4vmin";
	enemy_fire_2[it].style.fontWeight = "bold";
	enemy_fire_2[it].style.fontFamily = "Arial";
	enemy_fire_2[it].style.zIndex = 1000;
		
	enemy_fire_2[it].style.left = (x + 1.5) + "%";
	enemy_fire_2[it].style.top = (y + 2) + "%";	
};

var move_enemyfire_2 = function(){
	
	if(en){
		for (var i=0 ; i < e_2 ; i++){
			
			enemy_fire_2[i] = document.getElementById("e2_"+i);
			if(enemy_fire_2[i] == null)continue;	
			if(parseFloat(enemy_fire_2[i].style.top) > 100) remove("e2_"+i);
			enemy_fire_2[i].style.top = (parseFloat(enemy_fire_2[i].style.top) + 2) + "%";
			enemy_fire_2[i].style.left = (parseFloat(enemy_fire_2[i].style.left) + lftrght*Math.sin(crds)) + "%";
			if(Math.abs(parseFloat(enemy_fire_2[i].style.top) - (parseFloat(mine.style.top)+5)) < 5 && Math.abs(parseFloat(enemy_fire_2[i].style.left) - (parseFloat(mine.style.left)+5)) < 5){
				enemy_fire_2[i].style.top = "110%";
				hp.innerHTML -= (30-guard);
				if(parseInt(hp.innerHTML) <= 0){
					document.getElementById("hint").innerHTML = "Game Over";
					GoToEnd();
				}
				mine.src = "./image/game/injury.gif"
				setTimeout("document.getElementById('mine').src = './image/game/mine_"+color+".gif'",150);
			}
			
		}
		crds += 0.4;
	}
	setTimeout("move_enemyfire_2()",100);
}


/*Create_flight_2*/
var Flight_create_2 = function(){
	if(en){
		document.getElementById("plane_2").innerHTML += "<img id='s2_"+f_2+"' life='10' style='position:absolute; height :18%; top:"+20+"'></img>";
	    document.getElementById("s2_"+(f_2++)).src="./image/game/enemy_2.gif";
		initflight_2(f_2-1);
		enemyfire_on_2(f_2-1);
	}
	if(timer_2) clearTimeout(timer_2);
	timer_2 = setTimeout("Flight_create_2()",5000);
}

var initflight_2 = function(it){
	
	flight_2[it] = document.getElementById("s2_"+it);
	flight_2[it].style.left = (Math.random()*(80)+5) + "%";
	flight_2[it].style.top = (Math.random()*(10)+5) + "%";
	flight_2[it].style.zIndex=1100;
		
}

var moveflight_2 = function(){
	
	if(en){
		for (var i=0 ; i < f_2 ; i++){
			
			flight_2[i] = document.getElementById("s2_"+i);
			if(flight_2[i] == null || flight_2[i].src == "./image/game/explode.gif")continue;
			if(parseFloat(flight_2[i].style.top) > 80){
				remove("s2_"+i);
				continue;
			}
	
			var speed=0.3;
			
			if(Math.round(Math.random()) == 1 && parseFloat(flight_2[i].style.left) < 90){
				flight_2[i].style.left = (parseFloat(flight_2[i].style.left) + speed) + "%";
				setTimeout(function(i) {flight_2[i].style.left = (parseFloat(flight_2[i].style.left) + speed) + "%";},50,i);
				setTimeout(function(i) {flight_2[i].style.left = (parseFloat(flight_2[i].style.left) + speed) + "%";},100,i);
				setTimeout(function(i) {flight_2[i].style.left = (parseFloat(flight_2[i].style.left) + speed) + "%";},150,i);
				setTimeout(function(i) {flight_2[i].style.left = (parseFloat(flight_2[i].style.left) + speed) + "%";},200,i);
				setTimeout(function(i) {flight_2[i].style.left = (parseFloat(flight_2[i].style.left) + speed) + "%";},250,i);
				setTimeout(function(i) {flight_2[i].style.left = (parseFloat(flight_2[i].style.left) + speed) + "%";},300,i);
				setTimeout(function(i) {flight_2[i].style.left = (parseFloat(flight_2[i].style.left) + speed) + "%";},350,i);
				setTimeout(function(i) {flight_2[i].style.left = (parseFloat(flight_2[i].style.left) + speed) + "%";},400,i);
				setTimeout(function(i) {flight_2[i].style.left = (parseFloat(flight_2[i].style.left) + speed) + "%";},450,i);
			}
			else if(parseFloat(flight_2[i].style.left) > 10){
				flight_2[i].style.left = (parseFloat(flight_2[i].style.left) - speed) + "%";
				setTimeout(function(i) {flight_2[i].style.left = (parseFloat(flight_2[i].style.left) - speed) + "%";},50,i);
				setTimeout(function(i) {flight_2[i].style.left = (parseFloat(flight_2[i].style.left) - speed) + "%";},100,i);
				setTimeout(function(i) {flight_2[i].style.left = (parseFloat(flight_2[i].style.left) - speed) + "%";},150,i);
				setTimeout(function(i) {flight_2[i].style.left = (parseFloat(flight_2[i].style.left) - speed) + "%";},200,i);
				setTimeout(function(i) {flight_2[i].style.left = (parseFloat(flight_2[i].style.left) - speed) + "%";},250,i);
				setTimeout(function(i) {flight_2[i].style.left = (parseFloat(flight_2[i].style.left) - speed) + "%";},300,i);
				setTimeout(function(i) {flight_2[i].style.left = (parseFloat(flight_2[i].style.left) - speed) + "%";},350,i);
				setTimeout(function(i) {flight_2[i].style.left = (parseFloat(flight_2[i].style.left) - speed) + "%";},400,i);
				setTimeout(function(i) {flight_2[i].style.left = (parseFloat(flight_2[i].style.left) - speed) + "%";},450,i);
	
			}
			if(Math.round(Math.random()) == 1){
				flight_2[i].style.top = (parseFloat(flight_2[i].style.top) + speed) + "%";
				setTimeout(function(i) {flight_2[i].style.top = (parseFloat(flight_2[i].style.top) + speed) + "%";},50,i);
				setTimeout(function(i) {flight_2[i].style.top = (parseFloat(flight_2[i].style.top) + speed) + "%";},100,i);
				setTimeout(function(i) {flight_2[i].style.top = (parseFloat(flight_2[i].style.top) + speed) + "%";},150,i);
				setTimeout(function(i) {flight_2[i].style.top = (parseFloat(flight_2[i].style.top) + speed) + "%";},200,i);
				setTimeout(function(i) {flight_2[i].style.top = (parseFloat(flight_2[i].style.top) + speed) + "%";},250,i);
				setTimeout(function(i) {flight_2[i].style.top = (parseFloat(flight_2[i].style.top) + speed) + "%";},300,i);
				setTimeout(function(i) {flight_2[i].style.top = (parseFloat(flight_2[i].style.top) + speed) + "%";},350,i);
				setTimeout(function(i) {flight_2[i].style.top = (parseFloat(flight_2[i].style.top) + speed) + "%";},400,i);
				setTimeout(function(i) {flight_2[i].style.top = (parseFloat(flight_2[i].style.top) + speed) + "%";},450,i);
	
			}
			else if(parseFloat(flight_2[i].style.top) > 10){
				flight_2[i].style.top = (parseFloat(flight_2[i].style.top) - speed) + "%";
				setTimeout(function(i) {flight_2[i].style.top = (parseFloat(flight_2[i].style.top) - speed) + "%";},50,i);
				setTimeout(function(i) {flight_2[i].style.top = (parseFloat(flight_2[i].style.top) - speed) + "%";},100,i);
				setTimeout(function(i) {flight_2[i].style.top = (parseFloat(flight_2[i].style.top) - speed) + "%";},150,i);
				setTimeout(function(i) {flight_2[i].style.top = (parseFloat(flight_2[i].style.top) - speed) + "%";},200,i);
				setTimeout(function(i) {flight_2[i].style.top = (parseFloat(flight_2[i].style.top) - speed) + "%";},250,i);
				setTimeout(function(i) {flight_2[i].style.top = (parseFloat(flight_2[i].style.top) - speed) + "%";},300,i);
				setTimeout(function(i) {flight_2[i].style.top = (parseFloat(flight_2[i].style.top) - speed) + "%";},350,i);
				setTimeout(function(i) {flight_2[i].style.top = (parseFloat(flight_2[i].style.top) - speed) + "%";},400,i);
				setTimeout(function(i) {flight_2[i].style.top = (parseFloat(flight_2[i].style.top) - speed) + "%";},450,i);
	
			}
			
		}
	}
	setTimeout("moveflight_2()",300);
} 