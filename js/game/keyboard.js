btn_up = 38;
btn_down = 40;
btn_left = 37;
btn_right = 39;
btn_attack = 32
btn_menu = 90;
btn_weapon = 17;
btn_critical = 88;

document.onkeydown = function(e){
	
	if(e.keyCode == btn_left && en == 1 && left == 0){
		left = 1;
		document.getElementById("mine").src="./image/game/left_"+color+".gif";
		Left();
	}

	if(e.keyCode == btn_right && en == 1 && right == 0){
		right = 1;
		document.getElementById("mine").src="./image/game/right_"+color+".gif";
		Right();
	}

	if(e.keyCode == btn_up && en == 1 && up == 0){
		up = 1;
		Up();
	}

	if(e.keyCode == btn_down && en == 1 && down == 0){
		down = 1;
		Down();
	}

	if(e.keyCode == btn_attack && weapon == 0 && en == 1 && on == 0 && parseInt(weapon_1_num.innerHTML) > 0) {
		on = 1;
		off = 0;
		Fire_on();
	}
	
	if(e.keyCode == btn_attack && weapon == 1 && en == 1 && on == 0 && parseInt(weapon_2_num.innerHTML) > 0) {
		on = 1;
		off = 0;
		Fire_on_3();
	}
	
	if(e.keyCode == btn_attack && weapon == 2 && en == 1 && on == 0 && parseInt(weapon_3_num.innerHTML) > 0) {
		on = 1;
		off = 0;
		special_on();
	}
	
	if(e.keyCode == 13 && en == 1 && on == 0) {
		on = 1;
		off = 0;
		Fire_on_2();
	}
	
	if(e.keyCode == btn_critical && en == 1 && on == 0) {
		if(parseInt(document.getElementById("critical_weapon").innerHTML) > 0){
			on = 1;
			off = 0;
			critical_on();
			document.getElementById("critical_weapon").innerHTML -= 1;
		}	
	}
	
	if(e.keyCode == btn_weapon){
		if(stage > 1 || open)weapon = (weapon+1)%3;
		else if(stage == 1)weapon = (weapon+1)%2;
		else weapon = 0;
			
		if(weapon == 0){
			weapon_1_img.style.backgroundColor = "#003366";
			weapon_1_num.style.backgroundColor = "#003366";
			weapon_2_img.style.backgroundColor = "";
			weapon_2_num.style.backgroundColor = "";
			weapon_3_img.style.backgroundColor = "";
			weapon_3_num.style.backgroundColor = "";
		}
		else if(weapon == 1){
			weapon_1_img.style.backgroundColor = "";
			weapon_1_num.style.backgroundColor = "";
			weapon_2_img.style.backgroundColor = "#003366";
			weapon_2_num.style.backgroundColor = "#003366";
			weapon_3_img.style.backgroundColor = "";
			weapon_3_num.style.backgroundColor = "";
		}
		else{
			weapon_1_img.style.backgroundColor = "";
			weapon_1_num.style.backgroundColor = "";
			weapon_2_img.style.backgroundColor = "";
			weapon_2_num.style.backgroundColor = "";
			weapon_3_img.style.backgroundColor = "#003366";
			weapon_3_num.style.backgroundColor = "#003366";
		}
	}
	
	if(e.keyCode == btn_menu && en == 1) {
		audio.pause();
		document.getElementById("hp_2").innerHTML=document.getElementById("hp").innerHTML;
		document.getElementById("score_2").innerHTML=document.getElementById("score").innerHTML;
		removeClass(document.getElementById("ground"),"content-hidden");
		en = 0;
		setTimeout("restart()",86400000);
	}
	
	else if(e.keyCode == btn_menu && en == 0 ){
		if(document.getElementById("music_switch").innerHTML == "Music Off")audio.play();
		addClass(document.getElementById("ground"),"content-hidden")
		en = 1;
		initbackground();
	}
	
}

document.onkeyup = function(e){
	
	if(e.keyCode == btn_attack) {
		if(weapon == 2){
			context.beginPath();
		   context.clearRect(0, 0, window_width, window_height);
			clearTimeout(special);
		}
		on = 0;
		off = 1;
	}
	
	if(e.keyCode == 13) {
		on = 0;
		off = 1;
	}
	
	if(e.keyCode == btn_critical) {
		on = 0;
		off = 1;
	}
	
	if(e.keyCode == btn_left){
		left = 0;
		document.getElementById("mine").src="./image/game/mine_"+color+".gif";
	}
	if(e.keyCode == btn_right){
		right = 0;
		document.getElementById("mine").src="./image/game/mine_"+color+".gif";
	}
	if(e.keyCode == btn_up)up = 0;
	if(e.keyCode == btn_down)down = 0;
	
}