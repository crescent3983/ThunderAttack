onload = function(){
	audio = document.createElement('audio');
	audio.volume = 0.4;
	back_1 = new Image();
    back_1.src = "./image/game/background-1.jpg";
    back_2 = new Image();
    back_2.src = "./image/game/background-2.jpg";
    back_3 = new Image();
    back_3.src = "./image/game/background-3.jpg";
    
    explode = new Image();
    explode.src = "./image/game/critical_bomb.gif";
    
    window_width = window.innerWidth*0.7;
	window_height = window.innerHeight*0.8;
    
	initVar();
	en = 0;
	document.getElementById("start_btn").onclick = function(){
		addClass(document.getElementById("start"),"content-hidden");
		removeClass(document.getElementById("stage"),"content-hidden");
		removeClass(document.getElementById("top_panel"),"content-hidden");
		removeClass(document.getElementById("bottom_panel"),"content-hidden");
		removeClass(document.getElementById("left_panel"),"content-hidden");
		removeClass(document.getElementById("music_switch"),"content-hidden");
		START();
	}
	movefire();
	movefire_2();
	movefire_3();
	moveflight();
	move_enemyfire();	
	moveflight_2();
	move_enemyfire_2();
	moveflight_3();
	move_enemyfire_3();
	moveboss();
	move_bossfire();
	
	add_weapon_1();
	add_weapon_2();
	add_weapon_3();
	
	canvas = document.getElementById("special_attack");
   canvas.width = window_width;
   canvas.height = window_height;
   
	context = canvas.getContext("2d");
	context.lineWidth = 30/(800/window_height);
	lingrad = context.createLinearGradient(0,0,canvas.height,0);
	lingrad.addColorStop(0, 'red');
	lingrad.addColorStop(0.3, '#FFEBFF');
	lingrad.addColorStop(1, 'red');
	context.strokeStyle = lingrad; // line color
}

var START = function(){
	initVar();
	initUI();
	document.getElementById("reveal").innerHTML += "<p id='word' style='text-align:center; font-size:10vmin; color: gold;'>Stage1</p>"
	setTimeout("remove('word')",1800);
	Flight_create();
	audio.setAttribute('src', './music/stage-1.mp3');
	audio.play();
}

window.onresize = function(event) {
   window_width = window.innerWidth*0.7;
   window_height = window.innerHeight*0.8;
   
   canvas = document.getElementById("special_attack");
   canvas.width = window_width;
   canvas.height = window_height;
   
	context = canvas.getContext("2d");
	context.lineWidth = 30/(800/window_height);
	lingrad = context.createLinearGradient(0,0,0,canvas.width);
	lingrad.addColorStop(0, 'hotpink');
	lingrad.addColorStop(0.3, '#FFEBFF');
	lingrad.addColorStop(1, 'hotpink');
	context.strokeStyle = lingrad; // line color
};

var initVar = function(){
	en = 1;
	off = 0;
	on = 0;
	left = 0;
	right = 0;
	up = 0;
	down = 0;
	weapon = 0;
	guard = 10;
	stage = 0;
	my_speed = 2;
	color = "yellow";
	
	mine = document.getElementById("mine");
	hp = document.getElementById("hp");
	score = document.getElementById("score");
	weapon_1_img = document.getElementById("weapon_1_img");
	weapon_1_num = document.getElementById("weapon_1_num");
	weapon_2_img = document.getElementById("weapon_2_img");
	weapon_2_num = document.getElementById("weapon_2_num");
	weapon_3_img = document.getElementById("weapon_3_img");
	weapon_3_num = document.getElementById("weapon_3_num");
	
	weapon_1_num.innerHTML = 99;
	weapon_2_num.innerHTML = 0;
	weapon_3_num.innerHTML = 0;
	
	weapon_1_img.style.backgroundColor = "#003366";
	weapon_1_num.style.backgroundColor = "#003366";
	weapon_2_img.style.backgroundColor = "";
	weapon_2_num.style.backgroundColor = "";
	weapon_3_img.style.backgroundColor = "";
	weapon_3_num.style.backgroundColor = "";
	
	b=0;
	e_b=0;
	
	crds_3=0;
	lftrght_3=1.3;
	
	crds_2=0;
	lftrght_2=1.2;
	
	f=0;
	e=0;

	f_2=0;
	e_2=0;
	crds=0;
	lftrght=1;
	
	f_3=0;
	e_3=0;
	
	h=0;
	h_2=0;
	h_3=0;
	c=0;
	life = 0;

	kill_1 = 0;
	kill_2 = 0;
	kill_3 = 0;
	kill_4 = 0;
	
	timer_1 = 0;
	timer_2 = 0;
	timer_3 = 0;
	timer_4 = 0;
	timer_5 = 0;
	
	special = 0;
	open =0;
	
	document.getElementById("background").style.top = "-600%";
	document.getElementById("background").style.height = "700%";
	document.getElementById("background").src=back_1.src;
}

var initUI = function(){
	initbackground();
	initmenu();
}

function initbackground(){
	var back = document.getElementById("background");
	if(parseFloat(back.style.top) < 0 ){
		back.style.top = (parseFloat(back.style.top) + 1.5) + "%";
	}
	else {
		if(stage == 0){
			weapon_1_num.innerHTML = 99;
			weapon_2_num.innerHTML = 99;
			back.src=back_2.src;
			back.style.top = "-700%";
			back.style.height = "800%";
			weapon_create();
			Flight_create_2();
			document.getElementById("reveal").innerHTML += "<p id='word'style='text-align:center; font-size:10vmin; color: white; top:25%; left:10%;'>Stage2</p>"
			setTimeout("remove('word')",1800);
			audio.setAttribute('src', './music/stage-2.mp3');
			if(document.getElementById("music_switch").innerHTML == "Music Off") audio.play();
		}
		else if(stage == 1){
			weapon_1_num.innerHTML = 99;
			weapon_2_num.innerHTML = 99;
			weapon_3_num.innerHTML = 99;
			back.src=back_3.src;
			back.style.top = "-800%";
			back.style.height = "900%";
			cure_create();
			Flight_create_3();		
			document.getElementById("reveal").innerHTML += "<p id='word'style='text-align:center; font-size:10vmin; color: black; top:25%; left:10%;'>Stage3</p>"
			setTimeout("remove('word')",1800);
			audio.setAttribute('src', './music/stage-3.mp3');
			if(document.getElementById("music_switch").innerHTML == "Music Off") audio.play();
		}
		if(stage == 2){	
			Boss_create();
		}	
		stage++;
	}
	if(en)setTimeout("initbackground()",100);
}

function Left(){	
	if(parseFloat(mine.style.left) > 0){
		mine.style.left = (parseFloat(mine.style.left)-my_speed) + "%";
		if(left)setTimeout("Left()",100);
	}	
}

function Right(){
	if(parseFloat(mine.style.left) < 90){
		mine.style.left = (parseFloat(mine.style.left)+my_speed) + "%";
		if(right)setTimeout("Right()",100);
	}	
}

function Up(){
	if(parseFloat(mine.style.top) > 0){
		mine.style.top = (parseFloat(mine.style.top)-my_speed) + "%";
		if(up)setTimeout("Up()",100);
	}
}

function Down(){
	if(parseFloat(mine.style.top) < 80){
		mine.style.top = (parseFloat(mine.style.top)+my_speed) + "%";
		if(down)setTimeout("Down()",100);
	}
}

var add_weapon_1 = function(){
	if(en){
		if(parseInt(weapon_1_num.innerHTML) < 99){
			weapon_1_num.innerHTML = parseInt(weapon_1_num.innerHTML)+1;
		}
	}
	setTimeout("add_weapon_1()",600);
}

var add_weapon_2 = function(){
	if(en){
		if(stage > 0 && parseInt(weapon_2_num.innerHTML) < 99){
			weapon_2_num.innerHTML = parseInt(weapon_2_num.innerHTML)+1;
		}
	}
	setTimeout("add_weapon_2()",800);
}

var add_weapon_3 = function(){
	if(en){
		if(stage > 1 && parseInt(weapon_3_num.innerHTML) < 99){
			weapon_3_num.innerHTML = parseInt(weapon_3_num.innerHTML)+1;
		}
	}
	setTimeout("add_weapon_3()",1000);
}

function restart(){
}

function GoToEnd(){
	removeClass(document.getElementById("ground"),"content-hidden");
	addClass(document.getElementById("menu"),"content-hidden");
	removeClass(document.getElementById("end"),"content-hidden");
	en = 0;
	audio.pause();
}

function remove(id)
{
    return (elem=document.getElementById(id)).parentNode.removeChild(elem);
}
