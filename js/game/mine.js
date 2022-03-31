fire=new Array();
fire_2=new Array();
fire_3=new Array();
critical=new Array();

/*My_fire_1*/
var Fire_on = function(){
	if(parseInt(weapon_1_num.innerHTML) > 0){
		weapon_1_num.innerHTML -= 1;
		document.getElementById("fire").innerHTML += "<span id='f"+(h++)+"'style='position:absolute; color:cyan;'>||</span>"
		initfire(h-1,parseFloat(mine.style.left),parseFloat(mine.style.top));
		if(!off)setTimeout("Fire_on()",300);
	}
}

var initfire = function(it,x,y){
	
	fire[it] = document.getElementById("f"+it);
	fire[it].style.fontSize = "3vmin";
	fire[it].style.fontWeight = "bold";
	fire[it].style.fontFamily = "Arial";
	fire[it].style.zIndex = 1000;
		
	fire[it].style.left = (x + 3) + "%";
	fire[it].style.top = (y) + "%";	
};

var movefire = function(){
	
	if(en){
		for (var i=0 ; i < h ; i++){	
			fire[i] = document.getElementById("f"+i);
			if(fire[i] == null)continue;	
			if(parseFloat(fire[i].style.top) < 0) remove("f"+i);
			fire[i].style.top = (parseFloat(fire[i].style.top)-2) + "%";
			for(var j=0 ; j < f ; j++){
				flight[j] = document.getElementById("s"+j);
				if(flight[j] == null || flight[j].getAttribute("life") <= 0)continue;
				if(Math.abs(parseFloat(fire[i].style.top) - (parseFloat(flight[j].style.top)+5)) < 5 && Math.abs(parseFloat(fire[i].style.left) - (parseFloat(flight[j].style.left)+5)) < 5){
					fire[i].style.top = -20;
					life = flight[j].getAttribute("life");
					life -= 10;
					flight[j].setAttribute("life", life);  
					if(life <= 0){
						kill_1 = 1;
						if(color == "red")hp.innerHTML = parseFloat(hp.innerHTML) + 10;
						flight[j].src = "./image/game/explode.gif"
						score.innerHTML = parseFloat(score.innerHTML) + 100;
						setTimeout("remove('s'+'"+j+"')",700);
					}				
				}
			}
			for(var j=0 ; j < f_2 ; j++){
				flight_2[j] = document.getElementById("s2_"+j);
				if(flight_2[j] == null || flight_2[j].getAttribute("life") <= 0)continue;
				if(Math.abs(parseFloat(fire[i].style.top) - (parseFloat(flight_2[j].style.top)+5)) < 5 && Math.abs(parseFloat(fire[i].style.left) - (parseFloat(flight_2[j].style.left)+5)) < 5){
					fire[i].style.top = -20;
					life = flight_2[j].getAttribute("life");
					life -= 10;
					flight_2[j].setAttribute("life", life);
					if(life <= 0){
						kill_2 = 1;
						if(color == "red")hp.innerHTML = parseFloat(hp.innerHTML) + 10;
						flight_2[j].src = "./image/game/explode.gif"
						score.innerHTML = parseFloat(score.innerHTML) + 150;
						setTimeout("remove('s2_'+'"+j+"')",700);
					}
				}
			}
			for(var j=0 ; j < f_3 ; j++){
				flight_3[j] = document.getElementById("s3_"+j);
				if(flight_3[j] == null || flight_3[j].getAttribute("life") <= 0)continue;
				if(Math.abs(parseFloat(fire[i].style.top) - (parseFloat(flight_3[j].style.top)+5)) < 5 && Math.abs(parseFloat(fire[i].style.left) - (parseFloat(flight_3[j].style.left)+5)) < 5){
					fire[i].style.top = -20;
					life = flight_3[j].getAttribute("life");
					life -= 10;
					flight_3[j].setAttribute("life", life);
					if(life <= 0){
						kill_3 = 1;
						if(color == "red")hp.innerHTML = parseFloat(hp.innerHTML) + 10;
						flight_3[j].src = "./image/game/explode.gif"
						score.innerHTML = parseFloat(score.innerHTML) + 200;
						setTimeout("remove('s3_'+'"+j+"')",700);
					}
				}
			}
			boss[b-1] = document.getElementById("b"+(b-1));
			if(boss[b-1] == null || boss[b-1].getAttribute("life") <= 0)continue;
			if(Math.abs(parseFloat(fire[i].style.top) - (parseFloat(boss[b-1].style.top)+20)) < 20 && Math.abs(parseFloat(fire[i].style.left) - (parseFloat(boss[b-1].style.left)+20)) < 20){
				fire[i].style.top = -20;
				life = boss[b-1].getAttribute("life");
				life -= 10;
				boss[b-1].setAttribute("life", life);
				if(life <= 0){
					kill_4 = 1;
					if(color == "red")hp.innerHTML = parseFloat(hp.innerHTML) + 10;				
					setTimeout("boss['"+b+"'-1].src = explode.src",100);	
					score.innerHTML = parseFloat(score.innerHTML) + 500;
					setTimeout("remove('b'+'"+(b-1)+"')",1000);
					document.getElementById("hint").innerHTML = "You Win!!";
					setTimeout("GoToEnd()",1200);
				}
				else{
					boss[b-1].src = "./image/game/boss_injury.gif"
					setTimeout("document.getElementById('b'+'"+(b-1)+"').src = './image/game/boss.gif'",100);
				}
			}
		}
	}
	setTimeout("movefire()",70);
}
/*My_fire_2*/
var Fire_on_2 = function(){
	var fire_2 = document.getElementById("fire_2");
	
	for(var i=0 ; i < 8 ; i++)
		fire_2.innerHTML += "<span id='f2_"+(h_2+i)+"'style='position:absolute; color:orange;'>●</span>"
	
	initfire_2(h_2,parseFloat(mine.style.left),parseFloat(mine.style.top));
	h_2+=8;
	if(!off)setTimeout("Fire_on_2()",600);
}

var initfire_2 = function(it,x,y){
	
	for(var i=it,k=0 ; k<8 ; k++,i++){
		fire_2[i] = document.getElementById("f2_"+i);
		fire_2[i].style.fontSize = "3vmin";
		fire_2[i].style.fontWeight = "bold";
		fire_2[i].style.fontFamily = "Arial";
		fire_2[i].style.zIndex = 1000;
	}
		
	fire_2[it].style.left = (x + 4) + "%";
	fire_2[it].style.top = (y - 3) + "%";
	fire_2[it+1].style.left = (x + 8) + "%";
	fire_2[it+1].style.top = (y - 3) + "%";
	fire_2[it+2].style.left = (x + 8) + "%";
	fire_2[it+2].style.top = (y) + "%";
	fire_2[it+3].style.left = (x + 8) + "%";
	fire_2[it+3].style.top = (y + 3) + "%";
	fire_2[it+4].style.left = (x + 4) + "%";
	fire_2[it+4].style.top = (y + 3) + "%";
	fire_2[it+5].style.left = (x) + "%";
	fire_2[it+5].style.top = (y + 3) + "%";
	fire_2[it+6].style.left = (x) + "%";
	fire_2[it+6].style.top = (y) + "%";
	fire_2[it+7].style.left = (x) + "%";
	fire_2[it+7].style.top = (y - 3)+ "%";
};

var movefire_2 = function(){
	
	if(en){
		for (var i=0 ; i < h_2 ; i+=8){
			for(var l=0 ; l < 8 ; l++){
				fire_2[i+l] = document.getElementById("f2_"+(i+l));
				if(fire_2[i+l] == null)continue;	
				if(parseFloat(fire_2[i+l].style.top) < 0 || parseFloat(fire_2[i+l].style.top) > 100 || parseFloat(fire_2[i+l].style.left) < 0 || parseFloat(fire_2[i+l].style.left) > 100) remove("f2_"+(i+l));
			}
			if(fire_2[i] != null)fire_2[i].style.top = (parseFloat(fire_2[i].style.top)-2) + "%";
			if(fire_2[i+2] != null)fire_2[i+2].style.left = (parseFloat(fire_2[i+2].style.left)+1) + "%";
			if(fire_2[i+4] != null)fire_2[i+4].style.top = (parseFloat(fire_2[i+4].style.top)+1) + "%";
			if(fire_2[i+6] != null)fire_2[i+6].style.left = (parseFloat(fire_2[i+6].style.left)-1) + "%";
			
			if(fire_2[i+1] != null)fire_2[i+1].style.top = (parseFloat(fire_2[i+1].style.top)-1) + "%";
			if(fire_2[i+1] != null)fire_2[i+1].style.left = (parseFloat(fire_2[i+1].style.left)+1) + "%";
			if(fire_2[i+3] != null)fire_2[i+3].style.top = (parseFloat(fire_2[i+3].style.top)+1) + "%";
			if(fire_2[i+3] != null)fire_2[i+3].style.left = (parseFloat(fire_2[i+3].style.left)+1) + "%";
			if(fire_2[i+5] != null)fire_2[i+5].style.top = (parseFloat(fire_2[i+5].style.top)+1) + "%";
			if(fire_2[i+5] != null)fire_2[i+5].style.left = (parseFloat(fire_2[i+5].style.left)-1) + "%";
			if(fire_2[i+7] != null)fire_2[i+7].style.top = (parseFloat(fire_2[i+7].style.top)-1) + "%";
			if(fire_2[i+7] != null)fire_2[i+7].style.left = (parseFloat(fire_2[i+7].style.left)-1) + "%";
			
			for(var l=0 ; l < 8 ; l++){
				for(var j=0 ; j < f ; j++){
					flight[j] = document.getElementById("s"+j);
					if(fire_2[i+l] == null)continue;
					if(flight[j] == null || flight[j].getAttribute("life") <= 0)continue;
					if(Math.abs(parseFloat(fire_2[i+l].style.top) - (parseFloat(flight[j].style.top)+5)) < 5 && Math.abs(parseFloat(fire_2[i+l].style.left) - (parseFloat(flight[j].style.left)+5)) < 5){
						fire_2[i+l].style.top = -20;
						life = flight[j].getAttribute("life");
						life -= 100;
						flight[j].setAttribute("life", life);  
						if(life <= 0){
							kill_1 = 1;
							if(color == "red")hp.innerHTML = parseFloat(hp.innerHTML) + 10;
							flight[j].src = "./image/game/explode.gif"
							score.innerHTML = parseFloat(score.innerHTML) + 100;
							setTimeout("remove('s'+'"+j+"')",700);
						}
					}
				}
				for(var j=0 ; j < f_2 ; j++){
					flight_2[j] = document.getElementById("s2_"+j);
					if(fire_2[i+l] == null)continue;
					if(flight_2[j] == null || flight_2[j].getAttribute("life") <= 0)continue;
					if(Math.abs(parseFloat(fire_2[i+l].style.top) - (parseFloat(flight_2[j].style.top)+5)) < 5 && Math.abs(parseFloat(fire_2[i+l].style.left) - (parseFloat(flight_2[j].style.left)+5)) < 5){
						fire_2[i+l].style.top = -20;
						life = flight_2[j].getAttribute("life");
						life -= 100;
						flight_2[j].setAttribute("life", life);
						if(life <= 0){
							kill_2 = 1;
							if(color == "red")hp.innerHTML = parseFloat(hp.innerHTML) + 10;
							flight_2[j].src = "./image/game/explode.gif"
							score.innerHTML = parseFloat(score.innerHTML) + 150;
							setTimeout("remove('s2_'+'"+j+"')",700);
						}
					}
				}
				for(var j=0 ; j < f_3 ; j++){
					flight_3[j] = document.getElementById("s3_"+j);
					if(fire_2[i+l] == null)continue;
					if(flight_3[j] == null || flight_3[j].getAttribute("life") <= 0)continue;
					if(Math.abs(parseFloat(fire_2[i+l].style.top) - (parseFloat(flight_3[j].style.top)+5)) < 5 && Math.abs(parseFloat(fire_2[i+l].style.left) - (parseFloat(flight_3[j].style.left)+5)) < 5){
						fire_2[i+l].style.top = -20;
						life = flight_3[j].getAttribute("life");
						life -= 100;
						flight_3[j].setAttribute("life", life);
						if(life <= 0){
							kill_3 = 1;
							if(color == "red")hp.innerHTML = parseFloat(hp.innerHTML) + 10;
							flight_3[j].src = "./image/game/explode.gif"
							score.innerHTML = parseFloat(score.innerHTML) + 200;
							setTimeout("remove('s3_'+'"+j+"')",700);
						}
					}
				}
				boss[b-1] = document.getElementById("b"+(b-1));
				if(boss[b-1] == null || boss[b-1].getAttribute("life") <= 0)continue;
				if(fire_2[i+l] == null)continue;
				if(Math.abs(parseFloat(fire_2[i+l].style.top) - (parseFloat(boss[b-1].style.top)+20)) < 20 && Math.abs(parseFloat(fire_2[i+l].style.left) - (parseFloat(boss[b-1].style.left)+20)) < 20){
					fire_2[i+l].style.top = -20;
					life = boss[b-1].getAttribute("life");
					life -= 100;
					boss[b-1].setAttribute("life", life);
					if(life <= 0){
						kill_4 = 1;
						if(color == "red")hp.innerHTML = parseFloat(hp.innerHTML) + 10;				
						setTimeout("boss['"+b+"'-1].src = explode.src",100);	
						score.innerHTML = parseFloat(score.innerHTML) + 500;
						setTimeout("remove('b'+'"+(b-1)+"')",1000);
						document.getElementById("hint").innerHTML = "You Win!!";
						setTimeout("GoToEnd()",1200);
					}
					else{
						boss[b-1].src = "./image/game/boss_injury.gif"
						setTimeout("document.getElementById('b'+'"+(b-1)+"').src = './image/game/boss.gif'",100);
					}
				}
			}
		}
	}
	setTimeout("movefire_2()",120);
}

/*My_fire_3*/
var Fire_on_3 = function(){
	if(parseInt(weapon_2_num.innerHTML) > 0){
		weapon_2_num.innerHTML -= 1;
		document.getElementById("fire_3").innerHTML += "<span id='f3_"+h_3+"'style='position:absolute; color:lime;'>│</span>"
		document.getElementById("fire_3").innerHTML += "<span id='f3_"+(h_3+1)+"'style='position:absolute; color:lime;'>│</span>"
		
		initfire_3(h_3,parseFloat(mine.style.left),parseFloat(mine.style.top));
		h_3+=2;
		if(!off)setTimeout("Fire_on_3()",250);
	}
}

var initfire_3 = function(it,x,y){
	
	for(var i=it,k=0 ; k<2 ; k++,i++){
		fire_3[i] = document.getElementById("f3_"+i);
		fire_3[i].style.fontSize = "3vmin";
		fire_3[i].style.fontFamily = "Arial";
		fire_3[i].style.fontWeight = "bold";
		fire_3[i].style.zIndex = 1000;
	}
	
	
	fire_3[it].style.top = (y + 2) + "%";
	fire_3[it].style.left = x + "%";
	fire_3[it+1].style.top = (y + 2) + "%";
	fire_3[it+1].style.left = (x + 6) + "%";
};

var movefire_3 = function(){
	
	if(en){
		for (var i=0 ; i < h_3 ; i+=2){
			
			for(var l=0 ; l < 2 ; l++){
				fire_3[i+l] = document.getElementById("f3_"+(i+l));
				if(fire_3[i+l] == null)continue;	
				if(parseFloat(fire_3[i+l].style.top) < 0 || parseFloat(fire_3[i+l].style.top) > 100) remove("f3_"+(i+l));
			}
			if(fire_3[i] != null)fire_3[i].style.top = (parseFloat(fire_3[i].style.top)-2) + "%";
			if(fire_3[i+1] != null)fire_3[i+1].style.top = (parseFloat(fire_3[i+1].style.top)-2) + "%";
			
			for(var l=0 ; l < 2 ; l++){
				for(var j=0 ; j < f ; j++){
					flight[j] = document.getElementById("s"+j);
					if(fire_3[i+l] == null)continue;
					if(flight[j] == null || flight[j].getAttribute("life") <= 0)continue;
					if(Math.abs(parseFloat(fire_3[i+l].style.top) - (parseFloat(flight[j].style.top)+5)) < 5 && Math.abs(parseFloat(fire_3[i+l].style.left) - (parseFloat(flight[j].style.left)+5)) < 5){
						fire_3[i+l].style.top = -20;
						life = flight[j].getAttribute("life");
						life -= 10;
						flight[j].setAttribute("life", life);  
						if(life <= 0){
							kill_1 = 1;
							if(color == "red")hp.innerHTML = parseFloat(hp.innerHTML) + 10;
							flight[j].src = "./image/game/explode.gif"
							score.innerHTML = parseFloat(score.innerHTML) + 100;
							setTimeout("remove('s'+'"+j+"')",700);
						}
					}
				}
				for(var j=0 ; j < f_2 ; j++){
					flight_2[j] = document.getElementById("s2_"+j);
					if(fire_3[i+l] == null)continue;
					if(flight_2[j] == null || flight_2[j].getAttribute("life") <= 0)continue;
					if(Math.abs(parseFloat(fire_3[i+l].style.top) - (parseFloat(flight_2[j].style.top)+5)) < 5 && Math.abs(parseFloat(fire_3[i+l].style.left) - (parseFloat(flight_2[j].style.left)+5)) < 5){
						fire_3[i+l].style.top = -20;
						life = flight_2[j].getAttribute("life");
						life -= 10;
						flight_2[j].setAttribute("life", life);
						if(life <= 0){
							kill_2 = 1;
							if(color == "red")hp.innerHTML = parseFloat(hp.innerHTML) + 10;
							flight_2[j].src = "./image/game/explode.gif"
							score.innerHTML = parseFloat(score.innerHTML) + 150;
							setTimeout("remove('s2_'+'"+j+"')",700);
						}
					}
				}
				for(var j=0 ; j < f_3 ; j++){
					flight_3[j] = document.getElementById("s3_"+j);
					if(fire_3[i+l] == null)continue;
					if(flight_3[j] == null || flight_3[j].getAttribute("life") <= 0)continue;
					if(Math.abs(parseFloat(fire_3[i+l].style.top) - (parseFloat(flight_3[j].style.top)+5)) < 5 && Math.abs(parseFloat(fire_3[i+l].style.left) - (parseFloat(flight_3[j].style.left)+5)) < 5){
						fire_3[i+l].style.top = -20;
						life = flight_3[j].getAttribute("life");
						life -= 10;
						flight_3[j].setAttribute("life", life);
						if(life <= 0){
							kill_3 = 1;
							if(color == "red")hp.innerHTML = parseFloat(hp.innerHTML) + 10;
							flight_3[j].src = "./image/game/explode.gif"
							score.innerHTML = parseFloat(score.innerHTML) + 200;
							setTimeout("remove('s3_'+'"+j+"')",700);
						}
					}
				}
				boss[b-1] = document.getElementById("b"+(b-1));
				if(boss[b-1] == null || boss[b-1].getAttribute("life") <= 0)continue;
				if(fire_3[i+l] == null)continue;
				if(Math.abs(parseFloat(fire_3[i+l].style.top) - (parseFloat(boss[b-1].style.top)+20)) < 20 && Math.abs(parseFloat(fire_3[i+l].style.left) - (parseFloat(boss[b-1].style.left)+20)) < 20){
					fire_3[i+l].style.top = -20;
					life = boss[b-1].getAttribute("life");
					life -= 10;
					boss[b-1].setAttribute("life", life);
					if(life <= 0){
						kill_4 = 1;
						if(color == "red")hp.innerHTML = parseFloat(hp.innerHTML) + 10;				
						setTimeout("boss['"+b+"'-1].src = explode.src",100);	
						score.innerHTML = parseFloat(score.innerHTML) + 500;
						setTimeout("remove('b'+'"+(b-1)+"')",1000);
						document.getElementById("hint").innerHTML = "You Win!!";
						setTimeout("GoToEnd()",1200);
					}
					else{
						boss[b-1].src = "./image/game/boss_injury.gif"
						setTimeout("document.getElementById('b'+'"+(b-1)+"').src = './image/game/boss.gif'",100);
					}
				}
			}
		}
	}
	setTimeout("movefire_3()",120);
}


/*Critical_attack*/
var critical_on = function(){
	
	for(var i=0 ; i < 8 ; i++){
		document.getElementById("critical").innerHTML += "<img id='c"+(c+i)+"'style='position:absolute; color:yellow;'></img>"
		document.getElementById("c"+(c+i)).src = "./image/game/critical.gif";
	}
	
	initcritical(c,parseFloat(mine.style.left),parseFloat(mine.style.top));
	c+=8;
	movecritical();	
}

var initcritical = function(it,x,y){
	
	for(var i=it,k=0 ; k<8 ; k++,i++){
		critical[i] = document.getElementById("c"+i);
		critical[i].style.zIndex = 1000;
	}
		
	critical[it].style.left = (x + 5) + "%";
	critical[it].style.top = (y - 5)+ "%";
	critical[it+1].style.left = (x + 10) + "%";
	critical[it+1].style.top = (y - 5) + "%";
	critical[it+2].style.left = (x + 10) + "%";
	critical[it+2].style.top = (y) + "%";	
	critical[it+3].style.left = (x + 10) + "%";
	critical[it+3].style.top = (y + 5) + "%";
	critical[it+4].style.left = (x + 5) + "%";
	critical[it+4].style.top = (y + 5) + "%";
	critical[it+5].style.left = (x) + "%";
	critical[it+5].style.top = (y + 5) + "%";
	critical[it+6].style.left = (x) + "%";
	critical[it+6].style.top = (y) + "%";
	critical[it+7].style.left = (x) + "%";
	critical[it+7].style.top = (y - 5) + "%";
};


function move(){
	for(var l=0 ; l < 8 ; l++){
		critical[(c-8)+l] = document.getElementById("c"+((c-8)+l));
	}
	
	if(critical[(c-8)] != null)critical[(c-8)].style.top = (parseFloat(critical[(c-8)].style.top) - 2) + "%";
	if(critical[(c-8)+2] != null)critical[(c-8)+2].style.left = (parseFloat(critical[(c-8)+2].style.left) + 2) + "%";
	if(critical[(c-8)+4] != null)critical[(c-8)+4].style.top = (parseFloat(critical[(c-8)+4].style.top) + 2) + "%";
	if(critical[(c-8)+6] != null)critical[(c-8)+6].style.left = (parseFloat(critical[(c-8)+6].style.left) - 2) + "%";
	
	if(critical[(c-8)+1] != null)critical[(c-8)+1].style.top = (parseFloat(critical[(c-8)+1].style.top) - 2) + "%";
	if(critical[(c-8)+1] != null)critical[(c-8)+1].style.left = (parseFloat(critical[(c-8)+1].style.left) + 2) + "%";
	if(critical[(c-8)+3] != null)critical[(c-8)+3].style.top = (parseFloat(critical[(c-8)+3].style.top) + 2) + "%";
	if(critical[(c-8)+3] != null)critical[(c-8)+3].style.left = (parseFloat(critical[(c-8)+3].style.left) + 2) + "%";
	if(critical[(c-8)+5] != null)critical[(c-8)+5].style.top = (parseFloat(critical[(c-8)+5].style.top) + 2) + "%";
	if(critical[(c-8)+5] != null)critical[(c-8)+5].style.left = (parseFloat(critical[(c-8)+5].style.left) - 2) + "%";
	if(critical[(c-8)+7] != null)critical[(c-8)+7].style.top = (parseFloat(critical[(c-8)+7].style.top) - 2) + "%";
	if(critical[(c-8)+7] != null)critical[(c-8)+7].style.left = (parseFloat(critical[(c-8)+7].style.left) - 2) + "%";
}

function finish(){
	for(var l=0 ; l < 8 ; l++){
		critical[(c-8)+l].src = explode.src;
		critical[(c-8)+l].style.left = (parseFloat(critical[(c-8)+l].style.left) - 15) + "%";
		critical[(c-8)+l].style.top = (parseFloat(critical[(c-8)+l].style.top) - 12) + "%";
		setTimeout("remove('c'+'"+(c+l-8)+"')",700);
	}	
	
	
		for(var j=0 ; j < f ; j++){
			flight[j] = document.getElementById("s"+j);
			if(flight[j] == null || flight[j].getAttribute("life") <= 0)continue;
			
			life = flight[j].getAttribute("life");
			life -= 40;
			flight[j].setAttribute("life", life);  
			if(life <= 0){
				kill_1 = 1;
				if(color == "red")hp.innerHTML = parseFloat(hp.innerHTML) + 10;
				flight[j].src = "./image/game/explode.gif"
				score.innerHTML = parseFloat(score.innerHTML) + 100;
				setTimeout("remove('s'+'"+j+"')",700);
			}
		}
		for(var j=0 ; j < f_2 ; j++){
			flight_2[j] = document.getElementById("s2_"+j);
			if(flight_2[j] == null || flight_2[j].getAttribute("life") <= 0)continue;
			
			life = flight_2[j].getAttribute("life");
			life -= 40;
			flight_2[j].setAttribute("life", life);
			if(life <= 0){
				kill_2 = 1;
				if(color == "red")hp.innerHTML = parseFloat(hp.innerHTML) + 10;
				flight_2[j].src = "./image/game/explode.gif"
				score.innerHTML = parseFloat(score.innerHTML) + 150;
				setTimeout("remove('s2_'+'"+j+"')",700);
			}

		}
		for(var j=0 ; j < f_3 ; j++){
			flight_3[j] = document.getElementById("s3_"+j);
			if(flight_3[j] == null || flight_3[j].getAttribute("life") <= 0)continue;

			life = flight_3[j].getAttribute("life");
			life -= 40;
			flight_3[j].setAttribute("life", life);
			if(life <= 0){
				kill_3 = 1;
				if(color == "red")hp.innerHTML = parseFloat(hp.innerHTML) + 10;
				flight_3[j].src = "./image/game/explode.gif"
				score.innerHTML = parseFloat(score.innerHTML) + 200;
				setTimeout("remove('s3_'+'"+j+"')",700);
			}

		}
		boss[b-1] = document.getElementById("b"+(b-1));
		if(boss[b-1] == null || boss[b-1].getAttribute("life") <= 0)return;
		
		life = boss[b-1].getAttribute("life");
		life -= 40;
		boss[b-1].setAttribute("life", life);
		if(life <= 0){
			kill_4 = 1;
			if(color == "red")hp.innerHTML = parseFloat(hp.innerHTML) + 10;				
			setTimeout("boss['"+b+"'-1].src = explode",100);	
			score.innerHTML = parseFloat(score.innerHTML) + 500;
			setTimeout("remove('b'+'"+(b-1)+"')",1000);
			document.getElementById("hint").innerHTML = "You Win!!";
			setTimeout("GoToEnd()",1200);
		}
		else{
			boss[b-1].src = "./image/game/boss_injury.gif"
			setTimeout("document.getElementById('b'+'"+(b-1)+"').src = './image/game/boss.gif'",100);
		}

}

var movecritical = function(){
	
		for(var l=0 ; l < 8 ; l++){
			critical[(c-8)+l] = document.getElementById("c"+((c-8)+l));
		}
			
		setTimeout("move()",50);
		setTimeout("move()",100);
		setTimeout("move()",150);
		setTimeout("move()",200);
		setTimeout("move()",250);
		setTimeout("move()",300);
		setTimeout("move()",350);
		setTimeout("move()",400);
		setTimeout("move()",450);
		setTimeout("move()",500);
		setTimeout("move()",550);
		setTimeout("move()",600);
		setTimeout("move()",650);
		setTimeout("move()",700);
		
		setTimeout("finish()",750);
		
}

/*Special*/

var special_on = function(){
	
	setTimeout(function() {    
        context.beginPath();
        context.clearRect(0, 0, window_width, window_height);
        
        if(parseInt(weapon_3_num.innerHTML) <= 0){
        	return;
        }
        
        weapon_3_num.innerHTML -= 1;
        
        context.moveTo(window_width*(parseFloat(mine.style.left)+5)*0.01 , window_height*(parseFloat(mine.style.top)+8)*0.01);
        
        controlX1 = Math.floor(Math.random()*200);
        controlY1 = Math.floor(Math.random()*200);
        controlX2 = Math.floor(Math.random()*200);
        controlY2 = Math.floor(Math.random()*200);
        
        for(var j=0 ; j < f ; j++){
			flight[j] = document.getElementById("s"+j);
			if(flight[j] == null || flight[j].getAttribute("life") <= 0)continue;
			
			endX = parseFloat(flight[j].style.left) + 5;
	       endY = parseFloat(flight[j].style.top) + 5;
	       context.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, window_width*endX*0.01, window_height*endY*0.01);
	       console.log("%f %f %f %f", window_width*(parseFloat(mine.style.left)+5)*0.01, window_height*(parseFloat(mine.style.top)+5)*0.01, window_width*endX*0.01, window_height*endY*0.01);
	       context.stroke();        
	       // 每 20 毫秒重繪
	       if(!off)special = setTimeout(arguments.callee, 100);
	        
			life = flight[j].getAttribute("life");
			life -= 2;
			flight[j].setAttribute("life", life);  
			if(life <= 0){
				kill_1 = 1;
				if(color == "red")hp.innerHTML = parseFloat(hp.innerHTML) + 10;
				flight[j].src = "./image/game/explode.gif"
				score.innerHTML = parseFloat(score.innerHTML) + 100;
				setTimeout("remove('s'+'"+j+"')",700);
			}
			return;
		}
		for(var j=0 ; j < f_2 ; j++){
			flight_2[j] = document.getElementById("s2_"+j);
			if(flight_2[j] == null || flight_2[j].getAttribute("life") <= 0)continue;
			
			endX = parseFloat(flight_2[j].style.left) + 5;
	       endY = parseFloat(flight_2[j].style.top) + 5;
	       context.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, window_width*endX*0.01, window_height*endY*0.01);
	       context.stroke();        
	       // 每 20 毫秒重繪
	       if(!off)special = setTimeout(arguments.callee, 100);
			
			life = flight_2[j].getAttribute("life");
			life -= 2;
			flight_2[j].setAttribute("life", life);
			if(life <= 0){
				kill_2 = 1;
				if(color == "red")hp.innerHTML = parseFloat(hp.innerHTML) + 10;
				flight_2[j].src = "./image/game/explode.gif"
				score.innerHTML = parseFloat(score.innerHTML) + 150;
				setTimeout("remove('s2_'+'"+j+"')",700);
			}
			return;
		}
		for(var j=0 ; j < f_3 ; j++){
			flight_3[j] = document.getElementById("s3_"+j);
			if(flight_3[j] == null || flight_3[j].getAttribute("life") <= 0)continue;

			endX = parseFloat(flight_3[j].style.left) + 5;
	       endY = parseFloat(flight_3[j].style.top) + 5;
	       context.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, window_width*endX*0.01, window_height*endY*0.01);
	       context.stroke();        
	       // 每 20 毫秒重繪
	       if(!off)special = setTimeout(arguments.callee, 100);
			
			life = flight_3[j].getAttribute("life");
			life -= 2;
			flight_3[j].setAttribute("life", life);
			if(life <= 0){
				kill_3 = 1;
				if(color == "red")hp.innerHTML = parseFloat(hp.innerHTML) + 10;
				flight_3[j].src = "./image/game/explode.gif"
				score.innerHTML = parseFloat(score.innerHTML) + 200;
				setTimeout("remove('s3_'+'"+j+"')",700);
			}
			return;
		}
		boss[b-1] = document.getElementById("b"+(b-1));
		if(boss[b-1] == null || boss[b-1].getAttribute("life") <= 0){
			controlX1 = parseFloat(mine.style.left) + 5;
	       controlY1 = 1;
	       controlX2 = parseFloat(mine.style.left) + 5;
	       controlY2 = 2;
			endX = parseFloat(mine.style.left) + 5;
			endY = 0;
			context.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, window_width*endX*0.01, window_height*endY*0.01);
	       context.stroke();        
	       // 每 20 毫秒重繪
	       if(!off)special = setTimeout(arguments.callee, 100);
	       return;
		}
		
		endX = parseFloat(boss[b-1].style.left) + 40;
       endY = parseFloat(boss[b-1].style.top) + 40;
       context.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, window_width*endX*0.01, window_height*endY*0.01);
       context.stroke();        
       // 每 20 毫秒重繪
       if(!off)special = setTimeout(arguments.callee, 100);
		
		life = boss[b-1].getAttribute("life");
		life -= 10;
		boss[b-1].setAttribute("life", life);
		if(life <= 0){
			kill_4 = 1;
			if(color == "red")hp.innerHTML = parseFloat(hp.innerHTML) + 10;				
			setTimeout("boss['"+b+"'-1].src = explode.src",100);	
			score.innerHTML = parseFloat(score.innerHTML) + 500;
			setTimeout("remove('b'+'"+(b-1)+"')",1000);
			document.getElementById("hint").innerHTML = "You Win!!";
			setTimeout("GoToEnd()",1200);
		}
		else{
			boss[b-1].src = "./image/game/boss_injury.gif"
			setTimeout("document.getElementById('b'+'"+(b-1)+"').src = './image/game/boss.gif'",100);
		}
  
    }, 100);
}
