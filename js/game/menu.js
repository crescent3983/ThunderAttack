var initmenu = function(){
	
	var music_switch = document.getElementById("music_switch");
	music_switch.onclick = function(){
		if(music_switch.innerHTML == "Music Off"){
			music_switch.innerHTML = "Music On";
			audio.pause();
		}
		else{
			music_switch.innerHTML = "Music Off";
			audio.play();
		}
	} 
	
	var button_1 = document.getElementById("button_1");
	var button_2 = document.getElementById("button_2");
	var button_3 = document.getElementById("button_3");
	
	button_1.onclick = function(){
		addClass(document.getElementById("option"),"content-hidden");
		removeClass(document.getElementById("equip"),"content-hidden");
		addClass(document.getElementById("library"),"content-hidden");
	}
	
	button_2.onclick = function(){
		removeClass(document.getElementById("option"),"content-hidden");
		addClass(document.getElementById("equip"),"content-hidden");
		addClass(document.getElementById("library"),"content-hidden");
	}
	
	button_3.onclick = function(){
		removeClass(document.getElementById("library"),"content-hidden");
		addClass(document.getElementById("option"),"content-hidden");
		addClass(document.getElementById("equip"),"content-hidden");
	}
	
	var yellow = document.getElementById("armor_yellow");
	var blue = document.getElementById("armor_blue");
	var red = document.getElementById("armor_red");
	var black = document.getElementById("armor_black");
	var comment_1 = document.getElementById("comment_1");
	var comment_2 = document.getElementById("comment_2");
	var comment_3 = document.getElementById("comment_3");
	var comment_4 = document.getElementById("comment_4");
	
	yellow.onclick = function(){
		addClass(document.getElementById("error"),"content-hidden");
		addClass(comment_2,"content-hidden");
		addClass(comment_3,"content-hidden");
		removeClass(comment_1,"content-hidden");
		addClass(comment_4,"content-hidden");
		
		guard = 10;
		my_speed = 2;
		color = "yellow";
		
		yellow.style.border = 'solid lime';
		blue.style.border = '';
		red.style.border = '';
		black.style.border = '';
		document.getElementById("defense").innerHTML = 10;
		document.getElementById("speed").innerHTML = 15;
		document.getElementById("portrait").src = "./image/game/mine_yellow.gif";
		document.getElementById("mine").src = "./image/game/mine_yellow.gif";
	}
	
	blue.onclick = function(){		
		if(parseInt(document.getElementById("score").innerHTML) >= 3000 || open){
			addClass(document.getElementById("error"),"content-hidden");
			removeClass(comment_2,"content-hidden");
			addClass(comment_3,"content-hidden");
			addClass(comment_1,"content-hidden");
			addClass(comment_4,"content-hidden");
			
			guard = 20;
			my_speed = 2.5;
			color = "blue";
			
			yellow.style.border = '';
			blue.style.border = 'solid lime';
			red.style.border = '';
			black.style.border = '';
			document.getElementById("defense").innerHTML = 20;
			document.getElementById("speed").innerHTML = 20;
			document.getElementById("portrait").src = "./image/game/mine_blue.gif";
			document.getElementById("mine").src = "./image/game/mine_blue.gif";
		}
		else{
			addClass(comment_1,"content-hidden");
			removeClass(document.getElementById("error"),"content-hidden");
			document.getElementById("error").innerHTML = "分數需要3000以上才能解開此項";
		}
	}
	
	red.onclick = function(){		
		if(parseInt(document.getElementById("score").innerHTML) >= 5000 || open){
			addClass(document.getElementById("error"),"content-hidden");
			addClass(comment_2,"content-hidden");
			removeClass(comment_3,"content-hidden");
			addClass(comment_1,"content-hidden");
			addClass(comment_4,"content-hidden");
			
			guard = 5;
			my_speed = 2;
			color = "red";
			
			yellow.style.border = '';
			blue.style.border = '';
			red.style.border = 'solid lime';
			black.style.border = '';
			document.getElementById("defense").innerHTML = 5;
			document.getElementById("speed").innerHTML = 15;
			document.getElementById("portrait").src = "./image/game/mine_red.gif";
			document.getElementById("mine").src = "./image/game/mine_red.gif";
		}
		else{
			addClass(comment_1,"content-hidden");
			addClass(comment_2,"content-hidden");
			removeClass(document.getElementById("error"),"content-hidden");
			document.getElementById("error").innerHTML = "分數需要5000以上才能解開此項";
		}
	}
	
	black.onclick = function(){		
		if(parseInt(document.getElementById("score").innerHTML) >= 50000 || open){
			black.src = "./image/game/armor_black.gif";
			addClass(document.getElementById("error"),"content-hidden");
			addClass(comment_1,"content-hidden");
			addClass(comment_2,"content-hidden");
			addClass(comment_3,"content-hidden");
			removeClass(comment_4,"content-hidden");
			
			guard = 100;
			my_speed = 3;
			color = "black";
			
			yellow.style.border = '';
			blue.style.border = '';
			red.style.border = '';
			black.style.border = 'solid lime';
			document.getElementById("defense").innerHTML = 100;
			document.getElementById("speed").innerHTML = 25;
			document.getElementById("portrait").src = "./image/game/mine_black.gif";
			document.getElementById("mine").src = "./image/game/mine_black.gif";
		}
		else{
			addClass(comment_1,"content-hidden");
			addClass(comment_2,"content-hidden");
			addClass(comment_3,"content-hidden");
			removeClass(document.getElementById("error"),"content-hidden");
			document.getElementById("error").innerHTML = "須達成某特殊條件才能解開隱藏裝甲";
		}
	}
	
	var UP = document.getElementById("up");
	var DOWN = document.getElementById("down");
	var LEFT = document.getElementById("left");
	var RIGHT = document.getElementById("right");
	var ATTACK = document.getElementById("attack");
	var WEAPON = document.getElementById("weapon");
	var CRITICAL_ATTACK = document.getElementById("critical_attack");
	
	UP.onclick = function(){
		this.onkeydown = function(e){
			btn_up = e.keyCode;
			button = e.keyCode;
			if(button == 38)button = "↑";
			else if(button == 40)button = "↓";
			else if(button == 37)button = "←";
			else if(button == 39)button = "→";
			else if(button == 40)button = "↓";
			else if(button == 32)button = "SPACE";
			else if(button == 8)button = "BACKSPACE";
			else if(button == 9)button = "TAB";
			else if(button == 12)button = "CLEAR";
			else if(button == 16)button = "SHIFT";
			else if(button == 17)button = "CTRL";
			else if(button == 18)button = "ALT";
			else if(button == 36)button = "HOME";
			else if(button == 45)button = "INSERT";
			else if(button == 46)button = "DELETE";
			else if(button == 9)button = "TAB";
			else if(button == 90)button = UP.value;
			else button = String.fromCharCode(e.keyCode);
			UP.value = button;
			this.onkeydown = '';
		}
	}
	
	
	DOWN.onclick = function(){
		this.onkeydown = function(e){
			btn_down = e.keyCode;
			button = e.keyCode;
			if(button == 38)button = "↑";
			else if(button == 40)button = "↓";
			else if(button == 37)button = "←";
			else if(button == 39)button = "→";
			else if(button == 40)button = "↓";
			else if(button == 32)button = "SPACE";
			else if(button == 8)button = "BACKSPACE";
			else if(button == 9)button = "TAB";
			else if(button == 12)button = "CLEAR";
			else if(button == 16)button = "SHIFT";
			else if(button == 17)button = "CTRL";
			else if(button == 18)button = "ALT";
			else if(button == 36)button = "HOME";
			else if(button == 45)button = "INSERT";
			else if(button == 46)button = "DELETE";
			else if(button == 9)button = "TAB";
			else if(button == 90)button = DOWN.value;
			else button = String.fromCharCode(e.keyCode);
				
			DOWN.value = button;
			this.onkeydown = '';
		}
	}
	
	LEFT.onclick = function(){
		this.onkeydown = function(e){
			btn_left = e.keyCode;
			button = e.keyCode;
			if(button == 38)button = "↑";
			else if(button == 40)button = "↓";
			else if(button == 37)button = "←";
			else if(button == 39)button = "→";
			else if(button == 40)button = "↓";
			else if(button == 32)button = "SPACE";
			else if(button == 8)button = "BACKSPACE";
			else if(button == 9)button = "TAB";
			else if(button == 12)button = "CLEAR";
			else if(button == 16)button = "SHIFT";
			else if(button == 17)button = "CTRL";
			else if(button == 18)button = "ALT";
			else if(button == 36)button = "HOME";
			else if(button == 45)button = "INSERT";
			else if(button == 46)button = "DELETE";
			else if(button == 9)button = "TAB";
			else if(button == 90)button = LEFT.value;
			else button = String.fromCharCode(e.keyCode);
			LEFT.value = button;
			this.onkeydown = '';
		}
	}
	
	RIGHT.onclick = function(){
		this.onkeydown = function(e){
			btn_right = e.keyCode;
			button = e.keyCode;
			if(button == 38)button = "↑";
			else if(button == 40)button = "↓";
			else if(button == 37)button = "←";
			else if(button == 39)button = "→";
			else if(button == 40)button = "↓";
			else if(button == 32)button = "SPACE";
			else if(button == 8)button = "BACKSPACE";
			else if(button == 9)button = "TAB";
			else if(button == 12)button = "CLEAR";
			else if(button == 16)button = "SHIFT";
			else if(button == 17)button = "CTRL";
			else if(button == 18)button = "ALT";
			else if(button == 36)button = "HOME";
			else if(button == 45)button = "INSERT";
			else if(button == 46)button = "DELETE";
			else if(button == 9)button = "TAB";
			else if(button == 90)button = RIGHT.value;
			else button = String.fromCharCode(e.keyCode);
			RIGHT.value = button;
			this.onkeydown = '';
		}
	}
	
	ATTACK.onclick = function(){
		this.onkeydown = function(e){
			btn_attack = e.keyCode;
			button = e.keyCode;
			if(button == 38)button = "↑";
			else if(button == 40)button = "↓";
			else if(button == 37)button = "←";
			else if(button == 39)button = "→";
			else if(button == 40)button = "↓";
			else if(button == 32)button = "SPACE";
			else if(button == 8)button = "BACKSPACE";
			else if(button == 9)button = "TAB";
			else if(button == 12)button = "CLEAR";
			else if(button == 16)button = "SHIFT";
			else if(button == 17)button = "CTRL";
			else if(button == 18)button = "ALT";
			else if(button == 36)button = "HOME";
			else if(button == 45)button = "INSERT";
			else if(button == 46)button = "DELETE";
			else if(button == 9)button = "TAB";
			else if(button == 90)button = ATTACK.value;
			else button = String.fromCharCode(e.keyCode);
			ATTACK.value = button;
			this.onkeydown = '';
		}
	}
	
	document.getElementById("open").onchange = function(){
		if(this.checked){
			open = 1;
			weapon_1_num.innerHTML = 99;
			weapon_2_num.innerHTML = 99;
			weapon_3_num.innerHTML = 99;
		}
		else open =0;
	}
	
	WEAPON.onclick = function(){
		this.onkeydown = function(e){
			btn_weapon = e.keyCode;
			button = e.keyCode;
			if(button == 38)button = "↑";
			else if(button == 40)button = "↓";
			else if(button == 37)button = "←";
			else if(button == 39)button = "→";
			else if(button == 40)button = "↓";
			else if(button == 32)button = "SPACE";
			else if(button == 8)button = "BACKSPACE";
			else if(button == 9)button = "TAB";
			else if(button == 12)button = "CLEAR";
			else if(button == 16)button = "SHIFT";
			else if(button == 17)button = "CTRL";
			else if(button == 18)button = "ALT";
			else if(button == 36)button = "HOME";
			else if(button == 45)button = "INSERT";
			else if(button == 46)button = "DELETE";
			else if(button == 9)button = "TAB";
			else if(button == 90)button = WEAPON.value;
			else button = String.fromCharCode(e.keyCode);
			WEAPON.value = button;
			this.onkeydown = '';
		}
	}
	
	CRITICAL_ATTACK.onclick = function(){
		this.onkeydown = function(e){
			btn_critical = e.keyCode;
			button = e.keyCode;
			if(button == 38)button = "↑";
			else if(button == 40)button = "↓";
			else if(button == 37)button = "←";
			else if(button == 39)button = "→";
			else if(button == 40)button = "↓";
			else if(button == 32)button = "SPACE";
			else if(button == 8)button = "BACKSPACE";
			else if(button == 9)button = "TAB";
			else if(button == 12)button = "CLEAR";
			else if(button == 16)button = "SHIFT";
			else if(button == 17)button = "CTRL";
			else if(button == 18)button = "ALT";
			else if(button == 36)button = "HOME";
			else if(button == 45)button = "INSERT";
			else if(button == 46)button = "DELETE";
			else if(button == 9)button = "TAB";
			else if(button == 90)button = CRITICAL_ATTACK.value;
			else button = String.fromCharCode(e.keyCode);
			CRITICAL_ATTACK.value = button;
			this.onkeydown = '';
		}
	}
	
	
	var enemy_1 = document.getElementById("enemy_1");
	var enemy_2 = document.getElementById("enemy_2");
	var enemy_3 = document.getElementById("enemy_3");
	var enemy_4 = document.getElementById("enemy_4");
	
	var air_1 = document.getElementById("air_1");
	var air_2 = document.getElementById("air_2");
	var air_3 = document.getElementById("air_3");
	var air_4 = document.getElementById("air_4");
	
	enemy_1.onclick = function(){		
		removeClass(air_1,"content-hidden");
		addClass(air_2,"content-hidden");
		addClass(air_3,"content-hidden");
		addClass(air_4,"content-hidden");
		
		if(kill_1 || open){
			air_1.src = "./image/game/enemy.gif";
			document.getElementById("info").childNodes[1].innerHTML = "VVA-41A天獒級第四代隱身戰鬥機";
			document.getElementById("info").childNodes[3].innerHTML = "HP : 20"
			document.getElementById("info").childNodes[5].innerHTML = "[網路謠言]中共研發的四代隱形戰鬥機"
		}
		else{
			air_1.src = "./image/game/enemy_1_unknown.gif";
			document.getElementById("info").childNodes[1].innerHTML = "尚未開啟"
			document.getElementById("info").childNodes[3].innerHTML = ""
			document.getElementById("info").childNodes[5].innerHTML = ""
		}	
	}
	
	enemy_2.onclick = function(){		
		addClass(air_1,"content-hidden");
		removeClass(air_2,"content-hidden");
		addClass(air_3,"content-hidden");
		addClass(air_4,"content-hidden");
		
		if(kill_2 || open){
			air_2.src = "./image/game/enemy_2.gif";
			document.getElementById("info").childNodes[1].innerHTML = "SJ-22T燕隼";
			document.getElementById("info").childNodes[3].innerHTML = "HP : 10"
			document.getElementById("info").childNodes[5].innerHTML = "強擊裝甲前哨戰[小說]：南方重工為了參與「新型四代半戰鬥機研製計劃」而提出的競爭方案"	
		}
		else{
			air_2.src = "./image/game/enemy_2_unknown.gif";
			document.getElementById("info").childNodes[1].innerHTML = "尚未開啟"
			document.getElementById("info").childNodes[3].innerHTML = ""
			document.getElementById("info").childNodes[5].innerHTML = ""
		}	
	}
	
	enemy_3.onclick = function(){		
		addClass(air_1,"content-hidden");
		addClass(air_2,"content-hidden");
		removeClass(air_3,"content-hidden");
		addClass(air_4,"content-hidden");
		
		if(kill_3 || open){
			air_3.src = "./image/game/enemy_3.gif";
			document.getElementById("info").childNodes[1].innerHTML = "T-50第五代戰鬥機";
			document.getElementById("info").childNodes[3].innerHTML = "HP : 50"
			document.getElementById("info").childNodes[5].innerHTML = "T-50戰鬥機是一款由俄羅斯聯邦聯合航空製造公司旗下蘇霍伊航空集團主導，在「未來戰術空軍戰鬥複合體」計畫下開發、生產的高性能多用途戰機；作為第五代戰鬥機。"		
		}
		else{
			air_3.src = "./image/game/enemy_3_unknown.gif";
			document.getElementById("info").childNodes[1].innerHTML = "尚未開啟"
			document.getElementById("info").childNodes[3].innerHTML = ""
			document.getElementById("info").childNodes[5].innerHTML = ""
		}	
	}
	
	enemy_4.onclick = function(){		
		addClass(air_1,"content-hidden");
		addClass(air_2,"content-hidden");
		addClass(air_3,"content-hidden");
		removeClass(air_4,"content-hidden");
		
		if(kill_4 || open){
			air_4.src = "./image/game/boss.gif";
			document.getElementById("info").childNodes[1].innerHTML = "Ju-89轟炸機";
			document.getElementById("info").childNodes[3].innerHTML = "HP : 3000"
			document.getElementById("info").childNodes[5].innerHTML = "Ju-89是一款納粹德國空軍在二次大戰爆發之前所開發出來的重型轟炸機，該機在還沒進入生產前就被取消了。 它對於後來容克軍機的設計風格影響頗大上。"	
		}
		else{
			air_4.src = "./image/game/enemy_4_unknown.gif";
			document.getElementById("info").childNodes[1].innerHTML = "尚未開啟"
			document.getElementById("info").childNodes[3].innerHTML = ""
			document.getElementById("info").childNodes[5].innerHTML = ""
		}	
	}
	
	document.getElementById("replay").onclick = function(){
		mine = document.getElementById("mine");
		mine.src = "./image/game/mine_yellow.gif"
		mine.style.top = "70%";
		mine.style.left = "45%";
		document.getElementById("hp").innerHTML = 200; 
		document.getElementById("score").innerHTML = 0; 
		document.getElementById("critical_weapon").innerHTML = 1;
		clearTimeout(timer_1);
		clearTimeout(timer_2);
		clearTimeout(timer_3);
		clearTimeout(timer_4);
		clearTimeout(timer_5);
		
		for(var i=0 ; i < e ; i++)
			if(document.getElementById("e"+i) != null)remove("e"+i);
		for(var i=0 ; i < e_2 ; i++)
			if(document.getElementById("e2_"+i) != null)remove("e2_"+i);
		for(var i=0 ; i < e_3 ; i++)
			if(document.getElementById("e3_"+i) != null)remove("e3_"+i);
		for(var i=0 ; i < f ; i++)
			if(document.getElementById("s"+i) != null)remove("s"+i);
		for(var i=0 ; i < f_2 ; i++)
			if(document.getElementById("s2_"+i) != null)remove("s2_"+i);
		for(var i=0 ; i < f_3 ; i++)
			if(document.getElementById("s3_"+i) != null)remove("s3_"+i);
		for(var i=0 ; i < h ; i++)
			if(document.getElementById("f"+i) != null)remove("f"+i);
		for(var i=0 ; i < h_2 ; i++)
			if(document.getElementById("f2_"+i) != null)remove("f2_"+i);
		for(var i=0 ; i < h_3 ; i++)
			if(document.getElementById("f3_"+i) != null)remove("f3_"+i);
		for(var i=0 ; i < e_b ; i++)
			if(document.getElementById("eb_"+i) != null)remove("eb_"+i);
		if(document.getElementById("g") != null)remove("g");
		if(document.getElementById("cure") != null)remove("cure");
		if(document.getElementById("b"+(b-1)) != null)remove("b"+(b-1));
		
		START();
		addClass(document.getElementById("end"),"content-hidden");
		removeClass(document.getElementById("menu"),"content-hidden");
		addClass(document.getElementById("ground"),"content-hidden");
		
		addClass(document.getElementById("error"),"content-hidden");
		addClass(comment_2,"content-hidden");
		addClass(comment_3,"content-hidden");
		removeClass(comment_1,"content-hidden");
		addClass(comment_4,"content-hidden");
		
		yellow.style.border = 'solid lime';
		blue.style.border = '';
		red.style.border = '';
		black.style.border = '';
		document.getElementById("defense").innerHTML = 10;
		document.getElementById("speed").innerHTML = 15;
		document.getElementById("portrait").src = "./image/game/mine_yellow.gif";
		document.getElementById("mine").src = "./image/game/mine_yellow.gif";
	
	}
	
}