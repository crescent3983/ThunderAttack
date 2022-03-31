
/*Enemy_fire_3*/
var weapon_create = function(){
	if(en){
		document.getElementById("gun").innerHTML += "<img id='g'style='position:absolute; color: green; height :8%;'></img>"
		document.getElementById("g").src = "./image/game/weapon.gif"
			
		initweapon();
		move_weapon();
	}
	if(timer_4) clearTimeout(timer_4);
	timer_4 = setTimeout("weapon_create()",50000);
}

var initweapon = function(){
	
	gun = document.getElementById("g");
	gun.style.zIndex = 1500;
		
	gun.style.left = (Math.random()*(80)+5) + "%";
	gun.style.top = "0%";	
};

var move_weapon = function(){
	
	if(en){
		gun = document.getElementById("g");	
		if(gun == null)return;
		if(parseFloat(gun.style.top) > 100) remove("g");
		gun.style.top = (parseFloat(gun.style.top)+1.5) + "%";
		gun.style.left = (parseFloat(gun.style.left)+lftrght_3*Math.sin(crds_3)) + "%";

		if(Math.abs(parseFloat(gun.style.top) - (parseFloat(mine.style.top)+8)) < 8 && Math.abs(parseFloat(gun.style.left) - (parseFloat(mine.style.left)+5)) < 8){
			gun.style.top = "110%"
			document.getElementById("critical_weapon").innerHTML = parseInt(document.getElementById("critical_weapon").innerHTML) + 1;
		}
		crds_3 += 0.4;
	}
	setTimeout("move_weapon()",150);
}