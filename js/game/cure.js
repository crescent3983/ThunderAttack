
/*Enemy_fire_3*/
var cure_create = function(){
	if(en){
		document.getElementById("heal").innerHTML += "<img id='cure'style='position:absolute; color: green; height :7%;'></img>"
		document.getElementById("cure").src = "./image/game/cure.gif"
			
		initcure();
		move_cure();
	}
	if(timer_5) clearTimeout(timer_5);
	timer_5 = setTimeout("cure_create()",30000);
}

var initcure = function(){
	
	cure = document.getElementById("cure");
	cure.style.zIndex = 1500;
		
	cure.style.left = (Math.random()*(80)+5) + "%";
	cure.style.top = "0%";	
};

var move_cure = function(){
	
	if(en){
		cure = document.getElementById("cure");	
		if(cure == null)return;
		if(parseFloat(cure.style.top) > 100) remove("cure");
		cure.style.top = (parseFloat(cure.style.top)+1.5) + "%";
		cure.style.left = (parseFloat(cure.style.left)+lftrght_2*Math.sin(crds_2)) + "%";

		if(Math.abs(parseFloat(cure.style.top) - (parseFloat(mine.style.top)+8)) < 8 && Math.abs(parseFloat(cure.style.left) - (parseFloat(mine.style.left)+5)) < 8){
			cure.style.top = "110%";
			hp.innerHTML = parseInt(hp.innerHTML) + 100;
		}
		crds_2 += 0.4;
	}
	setTimeout("move_cure()",200);
}