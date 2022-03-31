boss=new Array();
boss_fire=new Array();

/*Boss_fire_b*/
var bossfire_on = function(it){
	boss[it] = document.getElementById("b"+it);
	if(en && boss[it] != null){
		document.getElementById("boss_fire").innerHTML += "<span id='eb_"+e_b+"'style='position:absolute; color: orange;'>|||</span>"
		document.getElementById("boss_fire").innerHTML += "<span id='eb_"+(e_b+1)+"'style='position:absolute; color: orange;'>|||</span>"
		boss[it] = document.getElementById("b"+it);
		
		initbossfire(e_b,parseFloat(boss[it].style.left),parseFloat(boss[it].style.top));
		e_b += 2;	
	}
	if(boss[it] != null)setTimeout("bossfire_on('"+it+"')",600);
}

var initbossfire = function(it,x,y){
	
	boss_fire[it] = document.getElementById("eb_"+it);
	boss_fire[it].style.fontSize = "4.5vmin";
	boss_fire[it].style.fontWeight = "bold";
	boss_fire[it].style.fontFamily = "Arial";
	boss_fire[it].style.zIndex = 1000;
	
	boss_fire[it+1] = document.getElementById("eb_"+(it+1));
	boss_fire[it+1].style.fontSize = "5vmin";
	boss_fire[it+1].style.fontWeight = "bold";
	boss_fire[it+1].style.fontFamily = "Arial";
	boss_fire[it+1].style.zIndex = 1000;
		
	boss_fire[it].style.left = (x + 10) + "%";
	boss_fire[it].style.top = (y + 30) + "%";	
	boss_fire[it+1].style.left = (x + 40) + "%";
	boss_fire[it+1].style.top = (y + 30) + "%";	
};

var move_bossfire = function(){
	
	if(en){
		for (var i=0 ; i < e_b ; i++){		
			boss_fire[i] = document.getElementById("eb_"+i);
			if(boss_fire[i] == null)continue;	
			if(parseFloat(boss_fire[i].style.top) > 100) remove("eb_"+i);
			boss_fire[i].style.top = (parseFloat(boss_fire[i].style.top) + 2) + "%";
			if(Math.abs(parseFloat(boss_fire[i].style.top) - (parseFloat(mine.style.top)+5)) < 6 && Math.abs(parseFloat(boss_fire[i].style.left) - (parseFloat(mine.style.left)+5)) < 6){
				boss_fire[i].style.top = "110%";
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
	setTimeout("move_bossfire()",100);
}

/*Boss_critical*/
var boss_critical = function(){
	
	boss[b-1] = document.getElementById("b"+(b-1));
	if(en && boss[b-1] != null){
		document.getElementById("boss").innerHTML += "<img id='critical' style='position:absolute; z-index:1100; width : 25%; top:"+20+"'></img>";
		
		critical = document.getElementById("critical");
		critical.src="./image/game/laser.png";
		
		boss = document.getElementById("b"+(b-1));
		
		critical.style.left = (parseFloat(boss.style.left) + 10) + "%";
		critical.style.top = (parseFloat(boss.style.top) + 30) + "%";

		if(parseFloat(critical.style.top) < (parseFloat(mine.style.top)+5) && Math.abs(parseFloat(critical.style.left) - (parseFloat(mine.style.left)+5)) < 10){
			hp.innerHTML -= (60-guard);
			if(parseInt(hp.innerHTML) <= 0){
				document.getElementById("hint").innerHTML = "Game Over";
				GoToEnd();
			}
			mine.src = "./image/game/injury.gif"
			setTimeout("document.getElementById('mine').src = './image/game/mine_"+color+".gif'",150);
		}
		
		setTimeout("remove('critical')",500);
	}
	
	setTimeout("boss_critical()",8000);
}


/*Create_boss*/
var Boss_create = function(){
	document.getElementById("boss").innerHTML += "<img id='b"+b+"' life='3000' style='position:absolute; width : 50%; top:"+20+"'></img>";
    document.getElementById("b"+(b++)).src="./image/game/boss.gif";
	initboss(b-1);
	bossfire_on(b-1);
	setTimeout("boss_critical()",8000);
	//if(en)setTimeout("Boss_create()",60000);
}

var initboss = function(it){
	
	boss[it] = document.getElementById("b"+it);
	boss[it].style.left = "30%";
	boss[it].style.top = "0%";
	boss[it].style.zIndex = 1200;
		
}

var moveboss = function(){
	
	if(en){
	
		for (var i=0 ; i < b ; i++){
			
			boss[i] = document.getElementById("b"+i);
			if(boss[i] == null || boss[i].src == "./image/game/explode.gif")continue;
	
			var speed=0.2;
			
			if(Math.round(Math.random()) == 1 && parseFloat(boss[i].style.left) < 60){
				boss[i].style.left = (parseFloat(boss[i].style.left) + speed) + "%";
				setTimeout(function(i) {boss[i].style.left = (parseFloat(boss[i].style.left) + speed) + "%";},50,i);
				setTimeout(function(i) {boss[i].style.left = (parseFloat(boss[i].style.left) + speed) + "%";},100,i);
				setTimeout(function(i) {boss[i].style.left = (parseFloat(boss[i].style.left) + speed) + "%";},150,i);
				setTimeout(function(i) {boss[i].style.left = (parseFloat(boss[i].style.left) + speed) + "%";},200,i);
				setTimeout(function(i) {boss[i].style.left = (parseFloat(boss[i].style.left) + speed) + "%";},250,i);
				setTimeout(function(i) {boss[i].style.left = (parseFloat(boss[i].style.left) + speed) + "%";},300,i);
				setTimeout(function(i) {boss[i].style.left = (parseFloat(boss[i].style.left) + speed) + "%";},350,i);
				setTimeout(function(i) {boss[i].style.left = (parseFloat(boss[i].style.left) + speed) + "%";},400,i);
				setTimeout(function(i) {boss[i].style.left = (parseFloat(boss[i].style.left) + speed) + "%";},450,i);
			}
			else if(parseFloat(boss[i].style.left) > 0){
				boss[i].style.left = (parseFloat(boss[i].style.left) - speed) + "%";
				setTimeout(function(i) {boss[i].style.left = (parseFloat(boss[i].style.left) - speed) + "%";},50,i);
				setTimeout(function(i) {boss[i].style.left = (parseFloat(boss[i].style.left) - speed) + "%";},100,i);
				setTimeout(function(i) {boss[i].style.left = (parseFloat(boss[i].style.left) - speed) + "%";},150,i);
				setTimeout(function(i) {boss[i].style.left = (parseFloat(boss[i].style.left) - speed) + "%";},200,i);
				setTimeout(function(i) {boss[i].style.left = (parseFloat(boss[i].style.left) - speed) + "%";},250,i);
				setTimeout(function(i) {boss[i].style.left = (parseFloat(boss[i].style.left) - speed) + "%";},300,i);
				setTimeout(function(i) {boss[i].style.left = (parseFloat(boss[i].style.left) - speed) + "%";},350,i);
				setTimeout(function(i) {boss[i].style.left = (parseFloat(boss[i].style.left) - speed) + "%";},400,i);
				setTimeout(function(i) {boss[i].style.left = (parseFloat(boss[i].style.left) - speed) + "%";},450,i);
	
			}
			if(Math.round(Math.random()) == 1 && parseFloat(boss[i].style.top) < (60)){
				boss[i].style.top = (parseFloat(boss[i].style.top) + speed) + "%";
				setTimeout(function(i) {boss[i].style.top = (parseFloat(boss[i].style.top) + speed) + "%";},50,i);
				setTimeout(function(i) {boss[i].style.top = (parseFloat(boss[i].style.top) + speed) + "%";},100,i);
				setTimeout(function(i) {boss[i].style.top = (parseFloat(boss[i].style.top) + speed) + "%";},150,i);
				setTimeout(function(i) {boss[i].style.top = (parseFloat(boss[i].style.top) + speed) + "%";},200,i);
				setTimeout(function(i) {boss[i].style.top = (parseFloat(boss[i].style.top) + speed) + "%";},250,i);
				setTimeout(function(i) {boss[i].style.top = (parseFloat(boss[i].style.top) + speed) + "%";},300,i);
				setTimeout(function(i) {boss[i].style.top = (parseFloat(boss[i].style.top) + speed) + "%";},350,i);
				setTimeout(function(i) {boss[i].style.top = (parseFloat(boss[i].style.top) + speed) + "%";},400,i);
				setTimeout(function(i) {boss[i].style.top = (parseFloat(boss[i].style.top) + speed) + "%";},450,i);
	
			}
			else if(parseFloat(boss[i].style.top) > 0){
				boss[i].style.top = (parseFloat(boss[i].style.top) - speed) + "%";
				setTimeout(function(i) {boss[i].style.top = (parseFloat(boss[i].style.top) - speed) + "%";},50,i);
				setTimeout(function(i) {boss[i].style.top = (parseFloat(boss[i].style.top) - speed) + "%";},100,i);
				setTimeout(function(i) {boss[i].style.top = (parseFloat(boss[i].style.top) - speed) + "%";},150,i);
				setTimeout(function(i) {boss[i].style.top = (parseFloat(boss[i].style.top) - speed) + "%";},200,i);
				setTimeout(function(i) {boss[i].style.top = (parseFloat(boss[i].style.top) - speed) + "%";},250,i);
				setTimeout(function(i) {boss[i].style.top = (parseFloat(boss[i].style.top) - speed) + "%";},300,i);
				setTimeout(function(i) {boss[i].style.top = (parseFloat(boss[i].style.top) - speed) + "%";},350,i);
				setTimeout(function(i) {boss[i].style.top = (parseFloat(boss[i].style.top) - speed) + "%";},400,i);
				setTimeout(function(i) {boss[i].style.top = (parseFloat(boss[i].style.top) - speed) + "%";},450,i);
	
			}
			
		}
	}
	setTimeout("moveboss()",270);
}