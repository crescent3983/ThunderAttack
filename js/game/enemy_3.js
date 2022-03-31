flight_3=new Array();
enemy_fire_3=new Array();

/*Enemy_fire_3*/
var enemyfire_on_3 = function(it){
	flight_3[it] = document.getElementById("s3_"+it);
	if(en && flight_3[it] != null){
		document.getElementById("enemy_fire_3").innerHTML += "<span id='e3_"+(e_3++)+"'style='position:absolute; color: green;'>★</span>"
		initenemyfire_3(e_3-1,parseFloat(flight_3[it].style.left),parseFloat(flight_3[it].style.top));
	}
	if(flight_3[it] != null)setTimeout("enemyfire_on_3('"+it+"')",1100);
}

var initenemyfire_3 = function(it,x,y){
	
	enemy_fire_3[it] = document.getElementById("e3_"+it);
	enemy_fire_3[it].style.fontSize = "4vmin";
	enemy_fire_3[it].style.fontWeight = "bold";
	enemy_fire_3[it].style.fontFamily = "Arial";
	enemy_fire_3[it].style.zIndex = 1000;
		
	enemy_fire_3[it].style.left = (x + 1.5) + "%";
	enemy_fire_3[it].style.top = (y + 2) + "%";
};

var move_enemyfire_3 = function(){
	
	if(en){
		for (var i=0 ; i < e_3 ; i++){
			
			enemy_fire_3[i] = document.getElementById("e3_"+i);
			if(enemy_fire_3[i] == null)continue;	
			if(parseFloat(enemy_fire_3[i].style.top) > 100) remove("e3_"+i);
			enemy_fire_3[i].style.top = (parseFloat(enemy_fire_3[i].style.top) + 1) + "%";
			enemy_fire_3[i].style.left = (parseFloat(enemy_fire_3[i].style.left) + 1) + "%";
			if(Math.abs(parseFloat(enemy_fire_3[i].style.top) - (parseFloat(mine.style.top)+5)) < 5 && Math.abs(parseFloat(enemy_fire_3[i].style.left) - (parseFloat(mine.style.left)+5)) < 5){
				enemy_fire_3[i].style.top = "110%";
				hp.innerHTML -= (40-guard);
				if(parseInt(hp.innerHTML) <= 0){
					document.getElementById("hint").innerHTML = "Game Over";
					GoToEnd();
				}
				mine.src = "./image/game/injury.gif"
				setTimeout("document.getElementById('mine').src = './image/game/mine_"+color+".gif'",150);
			}
			
		}
	}
	setTimeout("move_enemyfire_3()",80);
}


/*Create_flight_3*/
var Flight_create_3 = function(){
	if(en){
		document.getElementById("plane_3").innerHTML += "<img id='s3_"+f_3+"' life='50' style='position:absolute; height :18%; top:"+20+"'></img>";
	    document.getElementById("s3_"+(f_3++)).src="./image/game/enemy_3.gif";
		initflight_3(f_3-1);
		enemyfire_on_3(f_3-1);
	}
	if(timer_3) clearTimeout(timer_3);
	timer_3 = setTimeout("Flight_create_3()",15000);
}

var initflight_3 = function(it){
	
	flight_3[it] = document.getElementById("s3_"+it);
	flight_3[it].style.left = (Math.random()*(80)+5) + "%";
	flight_3[it].style.top = "0%";
	flight_3[it].style.zIndex=1100;
		
}

var moveflight_3 = function(){
	
	if(en){
		for (var i=0 ; i < f_3 ; i++){
			
			flight_3[i] = document.getElementById("s3_"+i);
			if(flight_3[i] == null || flight_3[i].src == "./image/game/explode.gif")continue;
			if(parseFloat(flight_3[i].style.top) > 80){
				remove("s3_"+i);
				continue;
			}
			var speed=0.5;	
			flight_3[i].style.top = (parseFloat(flight_3[i].style.top) + speed) + "%";
			
		}
	}
	setTimeout("moveflight_3()",100);
}